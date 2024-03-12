// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";

import {KnightNFT} from "../contracts/KnightNFT.sol";
import {SamuraiNFT} from "../contracts/SamuraiNFT.sol";
import {Battle, BattleInstance} from "../contracts/Battle.sol";

contract TestGame is Test {
    // Contracts
    KnightNFT public knightNft;
    SamuraiNFT public samuraiNft;
    Battle public battle;

    // Accounts
    address public owner;

    address public openzeppelinDefender;

    address public playerOne;
    address public playerTwo;

    // Roles
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant UTILITY_ROLE = keccak256("UTILITY_ROLE");
    bytes32 public constant VRF_CALLBACK_DELIVERY_ROLE =
        keccak256("VRF_CALLBACK_DELIVERY_ROLE");

    function setUp() public {
        owner = msg.sender;
        playerOne = address(0x444);
        playerTwo = address(0x555);
        openzeppelinDefender = address(0x777);
        vm.startPrank(owner);

        // Initialize upgradeables
        knightNft = new KnightNFT();
        samuraiNft = new SamuraiNFT();
        battle = new Battle();
        knightNft.initialize(owner);
        samuraiNft.initialize(owner);
        battle.initialize(owner);

        battle.setNFTContracts(address(knightNft), address(samuraiNft));

        // Contract setup and connections

        // Set up roles
        battle.grantRole(
            VRF_CALLBACK_DELIVERY_ROLE,
            address(openzeppelinDefender)
        );
    }

    /**
     * @dev Test Addresses are not address(0)
     */
    function testFailContractAddress() public {
        assertEq(address(knightNft), address(0));
        assertEq(address(samuraiNft), address(0));
        assertEq(address(battle), address(0));
        console.log("KnightNFT: ", address(knightNft));
        console.log("SamuraiNFT: ", address(samuraiNft));
        console.log("Battle: ", address(battle));
    }

    /**
     * @dev Test simple mint on KnightNFT and SamuraiNFT
     */
    function testSimpleMint() public {
        knightNft.openMint(playerOne);
        knightNft.openMint(playerOne);
        knightNft.openMint(playerOne);
        samuraiNft.openMint(playerTwo);
        samuraiNft.openMint(playerTwo);
        samuraiNft.openMint(playerTwo);
        uint256 knightBalance = knightNft.balanceOf(playerOne);
        uint256 samuraiBalance = samuraiNft.balanceOf(playerTwo);
        assertEq(knightBalance, 3);
        assertEq(samuraiBalance, 3);
    }

    /**
     * @dev Test starting a battle with a knight
     */
    function testStartBattle() public {
        knightNft.openMint(playerOne);
        assertEq(knightNft.ownerOf(1), playerOne);
        vm.stopPrank();
        vm.prank(playerOne);
        knightNft.setApprovalForAll(address(battle), true);
        vm.prank(playerOne);
        battle.startBattle(1);
        BattleInstance memory battleInstance = battle.getBattleData(1);
        assertEq(battleInstance.playerOne, playerOne);
    }

    /**
     * @dev Test joining a battle with a samurai
     */
    function testJoinBattle() public {
        knightNft.openMint(playerOne);
        assertEq(knightNft.ownerOf(1), playerOne);
        vm.stopPrank();
        vm.prank(playerOne);
        knightNft.setApprovalForAll(address(battle), true);
        vm.prank(playerOne);
        battle.startBattle(1);
        BattleInstance memory battleInstance = battle.getBattleData(1);
        assertEq(battleInstance.playerOne, playerOne);
        vm.prank(playerTwo);
        samuraiNft.openMint(playerTwo);
        assertEq(samuraiNft.ownerOf(1), playerTwo);
        vm.prank(playerTwo);
        samuraiNft.setApprovalForAll(address(battle), true);
        vm.prank(playerTwo);
        battle.joinBattle(1, 1);
        battleInstance = battle.getBattleData(1);
        assertEq(battleInstance.playerTwo, playerTwo);
    }

    function testJoinBattleAndGetResult() public {
        knightNft.openMint(playerOne);
        assertEq(knightNft.ownerOf(1), playerOne);
        vm.stopPrank();
        vm.prank(playerOne);
        knightNft.setApprovalForAll(address(battle), true);
        vm.prank(playerOne);
        battle.startBattle(1);
        BattleInstance memory battleInstance = battle.getBattleData(1);
        assertEq(battleInstance.playerOne, playerOne);
        vm.prank(playerTwo);
        samuraiNft.openMint(playerTwo);
        assertEq(samuraiNft.ownerOf(1), playerTwo);
        vm.prank(playerTwo);
        samuraiNft.setApprovalForAll(address(battle), true);
        vm.prank(playerTwo);
        battle.joinBattle(1, 1);
        battleInstance = battle.getBattleData(1);
        assertEq(battleInstance.playerTwo, playerTwo);
        // Prank as the openzeppelin defender
        vm.prank(openzeppelinDefender);
        battle.decideWinner(1, 123456789);
        battleInstance = battle.getBattleData(1);
        // Make sure state is not PENDING
        assertNotEq(uint256(battleInstance.state), 2);
        if (uint256(battleInstance.state) == 3) {
            console.log("Player One Wins");
        } else if (uint256(battleInstance.state) == 4) {
            console.log("Player Two Wins");
        }
    }
}
