/** @format */

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Battle__factory } from "../generated/types";
import { task } from "hardhat/config";
import { addresses, hexRoles } from "./helpers";

/**
 * Grant VRF role
 */

const grantRole = async (hre: HardhatRuntimeEnvironment, address: string) => {
  const [deployer] = await hre.ethers.getSigners();

  // Connect to the deployed contracts
  const battleContract = Battle__factory.connect(
    addresses.arbSepolia.battle,
    deployer
  );

  // Grant VRF role
  console.log("Granting role...");
  let tx = await battleContract.grantRole(
    hexRoles.VRF_CALLBACK_DELIVERY_ROLE,
    address
  );
  await tx.wait();
  console.log("Successfully granted role");
};

task("grant-role", "Grant VRF role")
  .addParam("address", "Address to grant role")
  .setAction(async (args, hre) => {
    console.log("Running HH task");
    await grantRole(hre, args.address);
    console.log("Successfully ran HH task");
  });
