/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Battle, BattleInterface } from "../../contracts/Battle";

const _abi = [
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "BattleAlreadyComplete",
    type: "error",
  },
  {
    inputs: [],
    name: "BattleAlreadyStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidValues",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
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
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
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
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
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
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
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
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAUSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UTILITY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VRF_CALLBACK_DELIVERY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "battleIdCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "battleIdToBattleInstance",
    outputs: [
      {
        internalType: "uint256",
        name: "battleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "playerOne",
        type: "address",
      },
      {
        internalType: "address",
        name: "playerTwo",
        type: "address",
      },
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
      {
        internalType: "enum BattleState",
        name: "state",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "battleId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "randomNumber",
        type: "uint256",
      },
    ],
    name: "decideWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "battleId",
        type: "uint256",
      },
    ],
    name: "getBattleData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "battleId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "playerOne",
            type: "address",
          },
          {
            internalType: "address",
            name: "playerTwo",
            type: "address",
          },
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
          {
            internalType: "enum BattleState",
            name: "state",
            type: "uint8",
          },
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "playerTwoTokenId",
        type: "uint256",
      },
    ],
    name: "joinBattle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "knightNFT",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
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
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "samuraiNFT",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_knightNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_samuraiNFT",
        type: "address",
      },
    ],
    name: "setNFTContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "playerTokenId",
        type: "uint256",
      },
    ],
    name: "startBattle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506115c2806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80638f296759116100de578063d4abd2f411610097578063e58378bb11610071578063e58378bb14610405578063e63ab1e91461042c578063f9d6d6bf14610441578063fe3edcd11461045457600080fd5b8063d4abd2f4146103a4578063d5391393146103cb578063d547741f146103f257600080fd5b80638f2967591461032957806391d1485414610350578063a217fddf14610363578063c4d66de81461036b578063c7bb3fda1461037e578063c97dd0f91461039157600080fd5b80634a042f0d1161014b57806382bea4ce1161012557806382bea4ce146102895780638456cb59146102ee5780638c5e6dc1146102f65780638e6807f81461031657600080fd5b80634a042f0d146102375780635c975abb1461024a57806375b238fc1461026257600080fd5b806301ffc9a714610193578063248a9ca3146101bb5780632f2ff15d146101dc578063331353ad146101f157806336568abe1461021c5780633f4ba83a1461022f575b600080fd5b6101a66101a13660046112d6565b61045d565b60405190151581526020015b60405180910390f35b6101ce6101c9366004611307565b610494565b6040519081526020016101b2565b6101ef6101ea366004611335565b6104b6565b005b603354610204906001600160a01b031681565b6040516001600160a01b0390911681526020016101b2565b6101ef61022a366004611335565b6104d8565b6101ef610510565b6101ef610245366004611307565b610533565b60008051602061156d8339815191525460ff166101a6565b6101ce7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6102dc610297366004611307565b60326020526000908152604090208054600182015460028301546003840154600485015460059095015493946001600160a01b03938416949290931692909160ff1686565b6040516101b29695949392919061139d565b6101ef61072b565b610309610304366004611307565b61074b565b6040516101b291906113e1565b6101ef610324366004611307565b610816565b6101ce7f35af5b5a3fb4c88a8cb5e26e8a68a53cc8f6cafcc4000a1db1ae5753e25a168e81565b6101a661035e366004611335565b610a27565b6101ce600081565b6101ef610379366004611435565b610a5f565b6101ef61038c366004611452565b610b6f565b603454610204906001600160a01b031681565b6101ce7ffac2ca1f36146faa39c5bcc0b960d021ea7055ceba427adb32a1937cb8af07e881565b6101ce7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101ef610400366004611335565b610bc8565b6101ce7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b6101ce60008051602061152d83398151915281565b6101ef61044f366004611480565b610be4565b6101ce60355481565b60006001600160e01b03198216637965db0b60e01b148061048e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600090815260008051602061154d833981519152602052604090206001015490565b6104bf82610494565b6104c881610e80565b6104d28383610e8a565b50505050565b6001600160a01b03811633146105015760405163334bd91960e11b815260040160405180910390fd5b61050b8282610f36565b505050565b60008051602061152d83398151915261052881610e80565b610530610fb2565b50565b6034546040516331a9108f60e11b8152600481018390526001600160a01b0390911690636352211e90602401602060405180830381865afa15801561057c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a091906114a2565b6001600160a01b0316336001600160a01b0316146106135760405162461bcd60e51b815260206004820152602560248201527f4e6f7420746865206f776e6572206f66207468652053616d757261694e4654206044820152643a37b5b2b760d91b60648201526084015b60405180910390fd5b60355460009081526032602052604090206001600582015460ff16600481111561063f5761063f611365565b1461065d57604051630c43cddf60e41b815260040160405180910390fd5b600280820180546001600160a01b031916331790556004820183905560058201805460ff191660018302179055506034546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906106bf903390309087906004016114bf565b600060405180830381600087803b1580156106d957600080fd5b505af11580156106ed573d6000803e3d6000fd5b505082546040519081527f9a02cac07671e80638a2bd9ec5e274cc02bd2d1d52552751695dc8ad623441909250602001905060405180910390a15050565b60008051602061152d83398151915261074381610e80565b610530611012565b6107816040805160c08101825260008082526020820181905291810182905260608101829052608081018290529060a082015290565b600082815260326020908152604091829020825160c0810184528154815260018201546001600160a01b0390811693820193909352600282015490921692820192909252600382015460608201526004808301546080830152600583015491929160a084019160ff909116908111156107fc576107fc611365565b600481111561080d5761080d611365565b90525092915050565b6033546040516331a9108f60e11b8152600481018390526001600160a01b0390911690636352211e90602401602060405180830381865afa15801561085f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088391906114a2565b6001600160a01b0316336001600160a01b0316146108ef5760405162461bcd60e51b8152602060048201526024808201527f4e6f7420746865206f776e6572206f6620746865204b6e696768744e4654207460448201526337b5b2b760e11b606482015260840161060a565b603580549060006108ff836114e3565b90915550506035546040805160c08101825282815233602080830191825260008385018181526060850188815260808601838152600160a088018181528a865260329096529790932086518155945185880180546001600160a01b03199081166001600160a01b03938416179091559251600287018054909416911617909155516003840155516004808401919091559051600583018054949586959293919260ff19169184908111156109b5576109b5611365565b0217905550506033546040516323b872dd60e01b81526001600160a01b0390911691506323b872dd906109f0903390309088906004016114bf565b600060405180830381600087803b158015610a0a57600080fd5b505af1158015610a1e573d6000803e3d6000fd5b50505050505050565b600091825260008051602061154d833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff16600081158015610aa55750825b905060008267ffffffffffffffff166001148015610ac25750303b155b905081158015610ad0575080155b15610aee5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610b1857845460ff60401b1916600160401b1785555b610b218661105b565b8315610b6757845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e610b9981610e80565b50603380546001600160a01b039384166001600160a01b03199182161790915560348054929093169116179055565b610bd182610494565b610bda81610e80565b6104d28383610f36565b7ffac2ca1f36146faa39c5bcc0b960d021ea7055ceba427adb32a1937cb8af07e8610c0e81610e80565b60008381526032602052604090206002600582015460ff166004811115610c3757610c37611365565b14610c845760405162461bcd60e51b815260206004820152601e60248201527f426174746c65206973206e6f7420696e2073746174652050454e44494e470000604482015260640161060a565b610c8f60028461150a565b600003610d8b5760058101805460ff191660039081179091556033546001830154918301546040516323b872dd60e01b81526001600160a01b03928316936323b872dd93610ce79330939190921691906004016114bf565b600060405180830381600087803b158015610d0157600080fd5b505af1158015610d15573d6000803e3d6000fd5b505060345460018401546004808601546040516323b872dd60e01b81526001600160a01b0394851696506323b872dd9550610d549430941692016114bf565b600060405180830381600087803b158015610d6e57600080fd5b505af1158015610d82573d6000803e3d6000fd5b505050506104d2565b60058101805460ff191660049081179091556034546002830154828401546040516323b872dd60e01b81526001600160a01b03938416946323b872dd94610dd99430949116929091016114bf565b600060405180830381600087803b158015610df357600080fd5b505af1158015610e07573d6000803e3d6000fd5b5050603354600284015460038501546040516323b872dd60e01b81526001600160a01b0393841695506323b872dd9450610e489330931691906004016114bf565b600060405180830381600087803b158015610e6257600080fd5b505af1158015610e76573d6000803e3d6000fd5b5050505050505050565b610530813361117a565b600060008051602061154d833981519152610ea58484610a27565b610f25576000848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055610edb3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600191505061048e565b600091505061048e565b5092915050565b600060008051602061154d833981519152610f518484610a27565b15610f25576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4600191505061048e565b610fba6111b3565b60008051602061156d833981519152805460ff191681557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a150565b61101a6111e5565b60008051602061156d833981519152805460ff191660011781557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833610ff4565b611063611216565b61106b61125f565b61107361126f565b61107b611277565b611086600082610e8a565b5061109f60008051602061152d83398151915282610e8a565b506110ca7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e82610e8a565b506110f57f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a682610e8a565b506111207fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177582610e8a565b5061114b7f35af5b5a3fb4c88a8cb5e26e8a68a53cc8f6cafcc4000a1db1ae5753e25a168e82610e8a565b506111767ffac2ca1f36146faa39c5bcc0b960d021ea7055ceba427adb32a1937cb8af07e882610e8a565b5050565b6111848282610a27565b6111765760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161060a565b60008051602061156d8339815191525460ff166111e357604051638dfc202b60e01b815260040160405180910390fd5b565b60008051602061156d8339815191525460ff16156111e35760405163d93c066560e01b815260040160405180910390fd5b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff166111e357604051631afcd79f60e31b815260040160405180910390fd5b611267611216565b6111e3611287565b6111e3611216565b61127f611216565b6111e36112a8565b61128f611216565b60008051602061156d833981519152805460ff19169055565b6112b0611216565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6000602082840312156112e857600080fd5b81356001600160e01b03198116811461130057600080fd5b9392505050565b60006020828403121561131957600080fd5b5035919050565b6001600160a01b038116811461053057600080fd5b6000806040838503121561134857600080fd5b82359150602083013561135a81611320565b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b6005811061139957634e487b7160e01b600052602160045260246000fd5b9052565b8681526001600160a01b03868116602083015285166040820152606081018490526080810183905260c081016113d660a083018461137b565b979650505050505050565b600060c08201905082518252602083015160018060a01b0380821660208501528060408601511660408501525050606083015160608301526080830151608083015260a0830151610f2f60a084018261137b565b60006020828403121561144757600080fd5b813561130081611320565b6000806040838503121561146557600080fd5b823561147081611320565b9150602083013561135a81611320565b6000806040838503121561149357600080fd5b50508035926020909101359150565b6000602082840312156114b457600080fd5b815161130081611320565b6001600160a01b039384168152919092166020820152604081019190915260600190565b60006001820161150357634e487b7160e01b600052601160045260246000fd5b5060010190565b60008261152757634e487b7160e01b600052601260045260246000fd5b50069056fe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800cd5ed15c6e187e77e9aee88184c21f4f2182ab5827cb3b7e07fbedcd63f03300a264697066735822122009a62e9eb0724bb567ae13a6c45bb3f0357fe5de4a7ff7367127caba05da1cc564736f6c63430008140033";

type BattleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BattleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Battle__factory extends ContractFactory {
  constructor(...args: BattleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Battle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Battle__factory {
    return super.connect(runner) as Battle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BattleInterface {
    return new Interface(_abi) as BattleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Battle {
    return new Contract(address, _abi, runner) as unknown as Battle;
  }
}
