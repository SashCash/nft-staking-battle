/** @format */

import { HardhatRuntimeEnvironment } from "hardhat/types";
import {
  Battle__factory,
  KnightNFT__factory,
  SamuraiNFT__factory,
} from "../generated/types";
import { task } from "hardhat/config";

/**
 * Deploy upgradeable contract
 */

const deployContracts = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();
  const initialOwner = deployer.address;
  console.log("initialOwner : ", initialOwner);

  // Deploy KnightNFT and SamuraiNFT and Battle
  const upgradeableKnightNftFactory = new KnightNFT__factory(deployer);
  const upgradeableSamuraiNftFactory = new SamuraiNFT__factory(deployer);
  const upgradeableBattleFactory = new Battle__factory(deployer);

  // Deploy tx and print address
  let deployProxyTx = await hre.upgrades.deployProxy(
    upgradeableKnightNftFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "KnightNFT deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );

  deployProxyTx = await hre.upgrades.deployProxy(
    upgradeableSamuraiNftFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "SamuraiNFT deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );

  deployProxyTx = await hre.upgrades.deployProxy(
    upgradeableBattleFactory,
    [initialOwner],
    {
      initializer: "initialize",
    }
  );
  await deployProxyTx.waitForDeployment();
  console.log(
    "Battle deployed to transparent proxy: ",
    await deployProxyTx.getAddress()
  );
};

task("deploy-contracts", "Deploy OptimismNFT upgradeable contracts").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await deployContracts(hre);
    console.log("Successfully ran HH task");
  }
);
