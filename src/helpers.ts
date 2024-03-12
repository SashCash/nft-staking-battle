/** @format */

import { ethers } from "ethers";

export const addresses = {
  arbSepolia: {
    samuraiNft: "0xE215791F91488fd926e558a955864BF331693581",
    knightNft: "0x2541e9D7667Fe31532e4868564F2a70EdEe6aFC1",
    battle: "0xdc7af87124Ae94f33692F2425f97997f2e7ec56a",
  },
};

export const roles = {
  OWNER_ROLE: "OWNER_ROLE",
  PAUSER_ROLE: "PAUSER_ROLE",
  MINTER_ROLE: "MINTER_ROLE",
  ADMIN_ROLE: "ADMIN_ROLE",
  UTILITY_ROLE: "UTILITY_ROLE",
};

export const keccak256 = (value: string): string => {
  return ethers.keccak256(ethers.toUtf8Bytes(value));
};

export const hexRoles = {
  OWNER_ROLE: keccak256("OWNER_ROLE"),
  PAUSER_ROLE: keccak256("PAUSER_ROLE"),
  MINTER_ROLE: keccak256("MINTER_ROLE"),
  ADMIN_ROLE: keccak256("ADMIN_ROLE"),
  UTILITY_ROLE: keccak256("UTILITY_ROLE"),
  VRF_CALLBACK_DELIVERY_ROLE: keccak256("VRF_CALLBACK_DELIVERY_ROLE"),
};
