/** @format */

import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Battle__factory,
  KnightNFT__factory,
  SamuraiNFT__factory,
} from "../generated/types";
import { task } from "hardhat/config";
import { addresses, hexRoles } from "./helpers";

/**
 * Upgrade transparent proxy contracts
 */

const upgradeContracts = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();

  // Setup all proxy contracts
  const upgradeableBattleFactory = new Battle__factory(deployer);
  const upgradeableKnightNftFactory = new KnightNFT__factory(deployer);
  const upgradeableSamuraiNftFactory = new SamuraiNFT__factory(deployer);

  // Upgrading all the contracts
  console.log("Upgrading contracts...");

  console.log("Upgrading Battle...");
  let tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.battle,
    upgradeableBattleFactory
  );
  await tx.waitForDeployment();

  console.log("Upgrading KnightNFT...");
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.knightNft,
    upgradeableKnightNftFactory
  );
  await tx.waitForDeployment();

  console.log("Upgrading SamuraiNFT...");
  tx = await hre.upgrades.upgradeProxy(
    addresses.arbSepolia.samuraiNft,
    upgradeableSamuraiNftFactory
  );
  await tx.waitForDeployment();

  console.log("Successfully upgraded all contracts");
};

task("upgrade-contracts", "Upgrade proxy contracts").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await upgradeContracts(hre);
    console.log("Successfully ran HH task");
  }
);
