/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export type BattleInstanceStruct = {
  battleId: BigNumberish;
  playerOne: AddressLike;
  playerTwo: AddressLike;
  playerOneTokenId: BigNumberish;
  playerTwoTokenId: BigNumberish;
  state: BigNumberish;
};

export type BattleInstanceStructOutput = [
  battleId: bigint,
  playerOne: string,
  playerTwo: string,
  playerOneTokenId: bigint,
  playerTwoTokenId: bigint,
  state: bigint
] & {
  battleId: bigint;
  playerOne: string;
  playerTwo: string;
  playerOneTokenId: bigint;
  playerTwoTokenId: bigint;
  state: bigint;
};

export interface BattleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "MINTER_ROLE"
      | "OWNER_ROLE"
      | "PAUSER_ROLE"
      | "UTILITY_ROLE"
      | "VRF_CALLBACK_DELIVERY_ROLE"
      | "battleIdCounter"
      | "battleIdToBattleInstance"
      | "decideWinner"
      | "getBattleData"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "joinBattle"
      | "knightNFT"
      | "pause"
      | "paused"
      | "renounceRole"
      | "revokeRole"
      | "samuraiNFT"
      | "setNFTContracts"
      | "startBattle"
      | "supportsInterface"
      | "unpause"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BattleStarted"
      | "Initialized"
      | "Paused"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UTILITY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VRF_CALLBACK_DELIVERY_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "battleIdCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "battleIdToBattleInstance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decideWinner",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBattleData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "joinBattle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "knightNFT", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "samuraiNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTContracts",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "startBattle",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UTILITY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VRF_CALLBACK_DELIVERY_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "battleIdCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "battleIdToBattleInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decideWinner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBattleData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinBattle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "knightNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "samuraiNFT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setNFTContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBattle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}

export namespace BattleStartedEvent {
  export type InputTuple = [battleId: BigNumberish];
  export type OutputTuple = [battleId: bigint];
  export interface OutputObject {
    battleId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Battle extends BaseContract {
  connect(runner?: ContractRunner | null): Battle;
  waitForDeployment(): Promise<this>;

  interface: BattleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  MINTER_ROLE: TypedContractMethod<[], [string], "view">;

  OWNER_ROLE: TypedContractMethod<[], [string], "view">;

  PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  UTILITY_ROLE: TypedContractMethod<[], [string], "view">;

  VRF_CALLBACK_DELIVERY_ROLE: TypedContractMethod<[], [string], "view">;

  battleIdCounter: TypedContractMethod<[], [bigint], "view">;

  battleIdToBattleInstance: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint, bigint] & {
        battleId: bigint;
        playerOne: string;
        playerTwo: string;
        playerOneTokenId: bigint;
        playerTwoTokenId: bigint;
        state: bigint;
      }
    ],
    "view"
  >;

  decideWinner: TypedContractMethod<
    [battleId: BigNumberish, randomNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  getBattleData: TypedContractMethod<
    [battleId: BigNumberish],
    [BattleInstanceStructOutput],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [initialOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  joinBattle: TypedContractMethod<
    [playerTwoTokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  knightNFT: TypedContractMethod<[], [string], "view">;

  pause: TypedContractMethod<[], [void], "nonpayable">;

  paused: TypedContractMethod<[], [boolean], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  samuraiNFT: TypedContractMethod<[], [string], "view">;

  setNFTContracts: TypedContractMethod<
    [_knightNFT: AddressLike, _samuraiNFT: AddressLike],
    [void],
    "nonpayable"
  >;

  startBattle: TypedContractMethod<
    [playerTokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  unpause: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MINTER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OWNER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UTILITY_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "VRF_CALLBACK_DELIVERY_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "battleIdCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "battleIdToBattleInstance"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, string, bigint, bigint, bigint] & {
        battleId: bigint;
        playerOne: string;
        playerTwo: string;
        playerOneTokenId: bigint;
        playerTwoTokenId: bigint;
        state: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "decideWinner"
  ): TypedContractMethod<
    [battleId: BigNumberish, randomNumber: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getBattleData"
  ): TypedContractMethod<
    [battleId: BigNumberish],
    [BattleInstanceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[initialOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "joinBattle"
  ): TypedContractMethod<
    [playerTwoTokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "knightNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "samuraiNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setNFTContracts"
  ): TypedContractMethod<
    [_knightNFT: AddressLike, _samuraiNFT: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startBattle"
  ): TypedContractMethod<[playerTokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "unpause"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "BattleStarted"
  ): TypedContractEvent<
    BattleStartedEvent.InputTuple,
    BattleStartedEvent.OutputTuple,
    BattleStartedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "BattleStarted(uint256)": TypedContractEvent<
      BattleStartedEvent.InputTuple,
      BattleStartedEvent.OutputTuple,
      BattleStartedEvent.OutputObject
    >;
    BattleStarted: TypedContractEvent<
      BattleStartedEvent.InputTuple,
      BattleStartedEvent.OutputTuple,
      BattleStartedEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
