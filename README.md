<!-- @format -->

# Knights vs Samurais NFT Staking Combat Game

#### with true randomness

This NFT Combat Staking game allows you to challenge other players and requires both players to stake their NFTs. Whichever player ends up winning the battle becomes the new owner of both NFTs. The losing player will lose ownership of the NFT they staked.

1. Only Knight NFTS may start a battle
2. Only Samurai NFTs may join a battle.
3. Joining a battle kicks off a `BattleStarted` event which is picked up by **Openzeppelin Defender** which ends up triggering a transaction call to the `decideWinner()` function with a random number. That random number decides the winner of the battle and sends out the NFTs to the winner.

`KnightNFT` : https://sepolia.arbiscan.io/address/0x2541e9d7667fe31532e4868564f2a70edee6afc1
`SamuraiNFT` : https://sepolia.arbiscan.io/address/0xe215791f91488fd926e558a955864bf331693581
`Battle` : https://sepolia.arbiscan.io/address/0xdc7af87124ae94f33692f2425f97997f2e7ec56a
