// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./BaseHelper.sol";

/** Global STRUCTS **/

enum BattleState {
    NONE,
    STARTED,
    PENDING,
    PLAYER_ONE_WON,
    PLAYER_TWO_WON
}

// Monster struct
struct BattleInstance {
    uint256 battleId;
    address playerOne;
    address playerTwo;
    uint256 playerOneTokenId;
    uint256 playerTwoTokenId;
    BattleState state;
}

contract Battle is BaseHelper {
    /** STRUCTS **/

    /** VARIABLES **/

    // Track the Level and Xp of each token ID
    mapping(uint256 => BattleInstance) public battleIdToBattleInstance;

    IERC721 public knightNFT;
    IERC721 public samuraiNFT;

    uint256 public battleIdCounter;

    /** ERRORS **/

    /// @notice Error if the battle is already started
    error BattleAlreadyStarted();

    /// @notice Error if the battle is already complete
    error BattleAlreadyComplete();

    /** MODIFIERS **/

    /** EVENTS **/

    event BattleStarted(uint256 battleId);

    /** FUNCTIONS **/

    function initialize(address initialOwner) public initializer {
        _baseInitialize(initialOwner);
    }

    function getBattleData(
        uint256 battleId
    ) public view returns (BattleInstance memory) {
        return battleIdToBattleInstance[battleId];
    }

    /**
     * @dev Set the address of the KnightNFT contract and the SamuraiNFT contract
     */
    function setNFTContracts(
        address _knightNFT,
        address _samuraiNFT
    ) public onlyRole(OWNER_ROLE) {
        knightNFT = IERC721(_knightNFT);
        samuraiNFT = IERC721(_samuraiNFT);
    }

    function startBattle(uint256 playerTokenId) public {
        // Only knights can start battles
        require(
            msg.sender == knightNFT.ownerOf(playerTokenId),
            "Not the owner of the KnightNFT token"
        );
        battleIdCounter++;
        uint256 battleId = battleIdCounter;
        // Create a new battle instance
        BattleInstance memory newBattleInstance = BattleInstance({
            battleId: battleId,
            playerOne: msg.sender,
            playerTwo: address(0),
            playerOneTokenId: playerTokenId,
            playerTwoTokenId: 0,
            state: BattleState.STARTED
        });
        // Store the new battle instance
        battleIdToBattleInstance[
            newBattleInstance.battleId
        ] = newBattleInstance;
        // Take the NFT from the user and store in the contract
        knightNFT.transferFrom(msg.sender, address(this), playerTokenId);
    }

    function joinBattle(uint256 playerTwoTokenId, uint256 battleId) public {
        // Only samurais can join battles
        require(
            msg.sender == samuraiNFT.ownerOf(playerTwoTokenId),
            "Not the owner of the SamuraiNFT token"
        );
        // Find the battle instance
        BattleInstance storage battleInstance = battleIdToBattleInstance[
            battleId
        ];
        // Make sure the battle is in the correct state
        if (battleInstance.state != BattleState.STARTED) {
            revert BattleAlreadyStarted();
        }
        // Update the battle instance
        battleInstance.playerTwo = msg.sender;
        battleInstance.playerTwoTokenId = playerTwoTokenId;
        battleInstance.state = BattleState.PENDING;
        // Take the NFT from the user and store in the contract
        samuraiNFT.transferFrom(msg.sender, address(this), playerTwoTokenId);
        emit BattleStarted(battleInstance.battleId);
    }

    function decideWinner(
        uint256 battleId,
        uint256 randomNumber
    ) external onlyRole(VRF_CALLBACK_DELIVERY_ROLE) {
        BattleInstance storage battleInstance = battleIdToBattleInstance[
            battleId
        ];
        require(
            battleInstance.state == BattleState.PENDING,
            "Battle is not in state PENDING"
        );
        // Set the battle state based on the random number
        if (randomNumber % 2 == 0) {
            battleInstance.state = BattleState.PLAYER_ONE_WON;
            // Give the winner their original NFT back and the loser's NFT
            knightNFT.transferFrom(
                address(this),
                battleInstance.playerOne,
                battleInstance.playerOneTokenId
            );
            samuraiNFT.transferFrom(
                address(this),
                battleInstance.playerOne,
                battleInstance.playerTwoTokenId
            );
        } else {
            battleInstance.state = BattleState.PLAYER_TWO_WON;
            // Give the winner their original NFT back and the loser's NFT
            samuraiNFT.transferFrom(
                address(this),
                battleInstance.playerTwo,
                battleInstance.playerTwoTokenId
            );
            knightNFT.transferFrom(
                address(this),
                battleInstance.playerTwo,
                battleInstance.playerOneTokenId
            );
        }
    }
}
