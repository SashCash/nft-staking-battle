/** @format */

const { ethers } = require("ethers");
const {
  DefenderRelaySigner,
  DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");

const fullAbi = [
  { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "neededRole", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "BattleAlreadyComplete", type: "error" },
  { inputs: [], name: "BattleAlreadyStarted", type: "error" },
  { inputs: [], name: "EnforcedPause", type: "error" },
  { inputs: [], name: "ExpectedPause", type: "error" },
  { inputs: [], name: "InvalidInitialization", type: "error" },
  { inputs: [], name: "InvalidValues", type: "error" },
  { inputs: [], name: "NotInitializing", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "battleId",
        type: "uint256",
      },
    ],
    name: "BattleStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UTILITY_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VRF_CALLBACK_DELIVERY_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "battleIdCounter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "battleIdToBattleInstance",
    outputs: [
      { internalType: "uint256", name: "battleId", type: "uint256" },
      { internalType: "address", name: "playerOne", type: "address" },
      { internalType: "address", name: "playerTwo", type: "address" },
      { internalType: "uint256", name: "playerOneTokenId", type: "uint256" },
      { internalType: "uint256", name: "playerTwoTokenId", type: "uint256" },
      { internalType: "enum BattleState", name: "state", type: "uint8" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "battleId", type: "uint256" },
      { internalType: "uint256", name: "randomNumber", type: "uint256" },
    ],
    name: "decideWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "battleId", type: "uint256" }],
    name: "getBattleData",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "battleId", type: "uint256" },
          { internalType: "address", name: "playerOne", type: "address" },
          { internalType: "address", name: "playerTwo", type: "address" },
          {
            internalType: "uint256",
            name: "playerOneTokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "playerTwoTokenId",
            type: "uint256",
          },
          { internalType: "enum BattleState", name: "state", type: "uint8" },
        ],
        internalType: "struct BattleInstance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "initialOwner", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "playerTwoTokenId", type: "uint256" },
      { internalType: "uint256", name: "battleId", type: "uint256" },
    ],
    name: "joinBattle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "knightNFT",
    outputs: [{ internalType: "contract IERC721", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "callerConfirmation", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "samuraiNFT",
    outputs: [{ internalType: "contract IERC721", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_knightNFT", type: "address" },
      { internalType: "address", name: "_samuraiNFT", type: "address" },
    ],
    name: "setNFTContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "playerTokenId", type: "uint256" },
    ],
    name: "startBattle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// Entrypoint for the Autotask
exports.handler = async function (payload) {
  // Initialize defender relayer provider and signer
  const relayProvider = new DefenderRelayProvider(payload);
  const signer = new DefenderRelaySigner(payload, relayProvider, {
    speed: "fast",
  });
  const addressBridge = "0xdc7af87124Ae94f33692F2425f97997f2e7ec56a";
  const provider = new ethers.providers.WebSocketProvider(
    process.env.ALCHEMY_URL
  );

  const conditionRequest = payload.request.body;
  console.log(
    "conditionRequest.matchReasons is : ",
    conditionRequest.matchReasons
  );
  for (const evt of conditionRequest.matchReasons) {
    // add custom logic for matching here

    const battleId = evt.params.battleId;
    console.log("battleId is : ", battleId);

    const battleContract = new ethers.Contract(addressBridge, fullAbi, signer);
    let randomNumber = Math.floor(Math.random() * 9999999);
    let tx = await battleContract.decideWinner(battleId, randomNumber);
    await tx.wait();
    console.log("txHash is: ", tx.hash);
  }
  return;
};
