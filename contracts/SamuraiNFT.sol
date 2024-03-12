// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "./BaseHelper.sol";

contract SamuraiNFT is BaseHelper, ERC721Upgradeable {
    /** Variables **/

    uint256 public tokenIdCounter;

    /** ERRORS **/

    /** EVENTS **/

    /** FUNCTIONS **/
    function initialize(address initialOwner) public initializer {
        __ERC721_init("SamuraiNFT", "SAMURAI");
        _baseInitialize(initialOwner);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721Upgradeable, AccessControlUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev Allow open mint just for testing purposes
     */
    function openMint(address to) public {
        tokenIdCounter++;
        uint256 tokenId = tokenIdCounter;
        _mint(to, tokenId);
    }
}
