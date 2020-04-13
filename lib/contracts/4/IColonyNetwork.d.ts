/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IColonyNetworkInterface extends Interface {
  functions: {
    approveExitRecovery: TypedFunctionDescription<{ encode([]: []): string }>;

    exitRecoveryMode: TypedFunctionDescription<{ encode([]: []): string }>;

    numRecoveryRoles: TypedFunctionDescription<{ encode([]: []): string }>;

    setStorageSlotRecovery: TypedFunctionDescription<{
      encode([_slot, _value]: [BigNumberish, Arrayish]): string;
    }>;

    isInRecoveryMode: TypedFunctionDescription<{ encode([]: []): string }>;

    checkNotAdditionalProtectedVariable: TypedFunctionDescription<{
      encode([_slot]: [BigNumberish]): string;
    }>;

    removeRecoveryRole: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    setRecoveryRole: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    enterRecoveryMode: TypedFunctionDescription<{ encode([]: []): string }>;

    supportsInterface: TypedFunctionDescription<{
      encode([interfaceID]: [Arrayish]): string;
    }>;

    setReplacementReputationUpdateLogEntry: TypedFunctionDescription<{
      encode([
        _reputationMiningCycle,
        _id,
        _user,
        _amount,
        _skillId,
        _colony,
        _nUpdates,
        _nPreviousUpdates
      ]: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getReplacementReputationUpdateLogEntry: TypedFunctionDescription<{
      encode([_reputationMiningCycle, _id]: [string, BigNumberish]): string;
    }>;

    getReplacementReputationUpdateLogsExist: TypedFunctionDescription<{
      encode([_reputationMiningCycle]: [string]): string;
    }>;

    getMetaColony: TypedFunctionDescription<{ encode([]: []): string }>;

    getColonyCount: TypedFunctionDescription<{ encode([]: []): string }>;

    isColony: TypedFunctionDescription<{ encode([_colony]: [string]): string }>;

    addSkill: TypedFunctionDescription<{
      encode([_parentSkillId]: [BigNumberish]): string;
    }>;

    getSkill: TypedFunctionDescription<{
      encode([_skillId]: [BigNumberish]): string;
    }>;

    deprecateSkill: TypedFunctionDescription<{
      encode([_skillId]: [BigNumberish]): string;
    }>;

    appendReputationUpdateLog: TypedFunctionDescription<{
      encode([_user, _amount, _skillId]: [
        string,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getSkillCount: TypedFunctionDescription<{ encode([]: []): string }>;

    getReputationMiningSkillId: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    setTokenLocking: TypedFunctionDescription<{
      encode([_tokenLockingAddress]: [string]): string;
    }>;

    getTokenLocking: TypedFunctionDescription<{ encode([]: []): string }>;

    createMetaColony: TypedFunctionDescription<{
      encode([_tokenAddress]: [string]): string;
    }>;

    createColony: TypedFunctionDescription<{
      encode([_tokenAddress]: [string]): string;
    }>;

    addColonyVersion: TypedFunctionDescription<{
      encode([_version, _resolver]: [BigNumberish, string]): string;
    }>;

    initialise: TypedFunctionDescription<{
      encode([_resolver, _version]: [string, BigNumberish]): string;
    }>;

    getColony: TypedFunctionDescription<{
      encode([_id]: [BigNumberish]): string;
    }>;

    getCurrentColonyVersion: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    getParentSkillId: TypedFunctionDescription<{
      encode([_skillId, _parentSkillIndex]: [
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getChildSkillId: TypedFunctionDescription<{
      encode([_skillId, _childSkillIndex]: [
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getReputationMiningCycle: TypedFunctionDescription<{
      encode([_active]: [boolean]): string;
    }>;

    calculateMinerWeight: TypedFunctionDescription<{
      encode([_timeStaked, _submissonIndex]: [
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    getColonyVersionResolver: TypedFunctionDescription<{
      encode([_version]: [BigNumberish]): string;
    }>;

    setReputationRootHash: TypedFunctionDescription<{
      encode([newHash, newNNodes, stakers, reward]: [
        Arrayish,
        BigNumberish,
        string[],
        BigNumberish
      ]): string;
    }>;

    startNextCycle: TypedFunctionDescription<{ encode([]: []): string }>;

    initialiseReputationMining: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    getReputationRootHash: TypedFunctionDescription<{ encode([]: []): string }>;

    getReputationRootHashNNodes: TypedFunctionDescription<{
      encode([]: []): string;
    }>;

    startTokenAuction: TypedFunctionDescription<{
      encode([_token]: [string]): string;
    }>;

    setupRegistrar: TypedFunctionDescription<{
      encode([_ens, _rootNode]: [string, Arrayish]): string;
    }>;

    registerUserLabel: TypedFunctionDescription<{
      encode([username, orbitdb]: [string, string]): string;
    }>;

    registerColonyLabel: TypedFunctionDescription<{
      encode([colonyName, orbitdb]: [string, string]): string;
    }>;

    updateColonyOrbitDB: TypedFunctionDescription<{
      encode([orbitdb]: [string]): string;
    }>;

    updateUserOrbitDB: TypedFunctionDescription<{
      encode([orbitdb]: [string]): string;
    }>;

    getProfileDBAddress: TypedFunctionDescription<{
      encode([node]: [Arrayish]): string;
    }>;

    lookupRegisteredENSDomain: TypedFunctionDescription<{
      encode([addr]: [string]): string;
    }>;

    addr: TypedFunctionDescription<{ encode([node]: [Arrayish]): string }>;

    getENSRegistrar: TypedFunctionDescription<{ encode([]: []): string }>;

    setMiningResolver: TypedFunctionDescription<{
      encode([miningResolverAddress]: [string]): string;
    }>;

    getMiningResolver: TypedFunctionDescription<{ encode([]: []): string }>;

    getFeeInverse: TypedFunctionDescription<{ encode([]: []): string }>;

    setFeeInverse: TypedFunctionDescription<{
      encode([_feeInverse]: [BigNumberish]): string;
    }>;
  };

  events: {
    RecoveryRoleSet: TypedEventDescription<{
      encodeTopics([user, setTo]: [string | null, null]): string[];
    }>;

    ColonyNetworkInitialised: TypedEventDescription<{
      encodeTopics([resolver]: [null]): string[];
    }>;

    TokenLockingAddressSet: TypedEventDescription<{
      encodeTopics([tokenLocking]: [null]): string[];
    }>;

    MiningCycleResolverSet: TypedEventDescription<{
      encodeTopics([miningCycleResolver]: [null]): string[];
    }>;

    NetworkFeeInverseSet: TypedEventDescription<{
      encodeTopics([feeInverse]: [null]): string[];
    }>;

    ColonyVersionAdded: TypedEventDescription<{
      encodeTopics([version, resolver]: [null, null]): string[];
    }>;

    MetaColonyCreated: TypedEventDescription<{
      encodeTopics([metaColony, token, rootSkillId]: [
        null,
        null,
        null
      ]): string[];
    }>;

    ColonyAdded: TypedEventDescription<{
      encodeTopics([colonyId, colonyAddress, token]: [
        BigNumberish | null,
        string | null,
        null
      ]): string[];
    }>;

    SkillAdded: TypedEventDescription<{
      encodeTopics([skillId, parentSkillId]: [null, null]): string[];
    }>;

    AuctionCreated: TypedEventDescription<{
      encodeTopics([auction, token, quantity]: [null, null, null]): string[];
    }>;

    ReputationMiningInitialised: TypedEventDescription<{
      encodeTopics([inactiveReputationMiningCycle]: [null]): string[];
    }>;

    ReputationMiningCycleComplete: TypedEventDescription<{
      encodeTopics([hash, nNodes]: [null, null]): string[];
    }>;

    ReputationRootHashSet: TypedEventDescription<{
      encodeTopics([newHash, newNNodes, stakers, reward]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    UserLabelRegistered: TypedEventDescription<{
      encodeTopics([user, label]: [string | null, null]): string[];
    }>;

    ColonyLabelRegistered: TypedEventDescription<{
      encodeTopics([colony, label]: [string | null, null]): string[];
    }>;
  };
}

export class IColonyNetwork extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IColonyNetwork;
  attach(addressOrName: string): IColonyNetwork;
  deployed(): Promise<IColonyNetwork>;

  on(event: EventFilter | string, listener: Listener): IColonyNetwork;
  once(event: EventFilter | string, listener: Listener): IColonyNetwork;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IColonyNetwork;
  removeAllListeners(eventName: EventFilter | string): IColonyNetwork;
  removeListener(eventName: any, listener: Listener): IColonyNetwork;

  interface: IColonyNetworkInterface;

  functions: {
    approveExitRecovery(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    exitRecoveryMode(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    numRecoveryRoles(): Promise<BigNumber>;

    setStorageSlotRecovery(
      _slot: BigNumberish,
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isInRecoveryMode(): Promise<boolean>;

    checkNotAdditionalProtectedVariable(_slot: BigNumberish): Promise<void>;

    removeRecoveryRole(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setRecoveryRole(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    enterRecoveryMode(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceID: Arrayish): Promise<boolean>;

    setReplacementReputationUpdateLogEntry(
      _reputationMiningCycle: string,
      _id: BigNumberish,
      _user: string,
      _amount: BigNumberish,
      _skillId: BigNumberish,
      _colony: string,
      _nUpdates: BigNumberish,
      _nPreviousUpdates: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getReplacementReputationUpdateLogEntry(
      _reputationMiningCycle: string,
      _id: BigNumberish
    ): Promise<{
      user: string;
      amount: BigNumber;
      skillId: BigNumber;
      colony: string;
      nUpdates: BigNumber;
      nPreviousUpdates: BigNumber;
    }>;

    getReplacementReputationUpdateLogsExist(
      _reputationMiningCycle: string
    ): Promise<boolean>;

    getMetaColony(): Promise<string>;

    getColonyCount(): Promise<BigNumber>;

    isColony(_colony: string): Promise<boolean>;

    addSkill(
      _parentSkillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getSkill(
      _skillId: BigNumberish
    ): Promise<{
      nParents: BigNumber;
      nChildren: BigNumber;
      parents: BigNumber[];
      children: BigNumber[];
      globalSkill: boolean;
      deprecated: boolean;
    }>;

    deprecateSkill(
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    appendReputationUpdateLog(
      _user: string,
      _amount: BigNumberish,
      _skillId: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getSkillCount(): Promise<BigNumber>;

    getReputationMiningSkillId(): Promise<BigNumber>;

    setTokenLocking(
      _tokenLockingAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getTokenLocking(): Promise<string>;

    createMetaColony(
      _tokenAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    createColony(
      _tokenAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addColonyVersion(
      _version: BigNumberish,
      _resolver: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initialise(
      _resolver: string,
      _version: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getColony(_id: BigNumberish): Promise<string>;

    getCurrentColonyVersion(): Promise<BigNumber>;

    getParentSkillId(
      _skillId: BigNumberish,
      _parentSkillIndex: BigNumberish
    ): Promise<BigNumber>;

    getChildSkillId(
      _skillId: BigNumberish,
      _childSkillIndex: BigNumberish
    ): Promise<BigNumber>;

    getReputationMiningCycle(_active: boolean): Promise<string>;

    calculateMinerWeight(
      _timeStaked: BigNumberish,
      _submissonIndex: BigNumberish
    ): Promise<BigNumber>;

    getColonyVersionResolver(_version: BigNumberish): Promise<string>;

    setReputationRootHash(
      newHash: Arrayish,
      newNNodes: BigNumberish,
      stakers: string[],
      reward: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    startNextCycle(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    initialiseReputationMining(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getReputationRootHash(): Promise<string>;

    getReputationRootHashNNodes(): Promise<BigNumber>;

    startTokenAuction(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setupRegistrar(
      _ens: string,
      _rootNode: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registerUserLabel(
      username: string,
      orbitdb: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registerColonyLabel(
      colonyName: string,
      orbitdb: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateColonyOrbitDB(
      orbitdb: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateUserOrbitDB(
      orbitdb: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getProfileDBAddress(node: Arrayish): Promise<string>;

    lookupRegisteredENSDomain(addr: string): Promise<string>;

    addr(node: Arrayish): Promise<string>;

    getENSRegistrar(): Promise<string>;

    setMiningResolver(
      miningResolverAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getMiningResolver(): Promise<string>;

    getFeeInverse(): Promise<BigNumber>;

    setFeeInverse(
      _feeInverse: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  approveExitRecovery(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  exitRecoveryMode(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  numRecoveryRoles(): Promise<BigNumber>;

  setStorageSlotRecovery(
    _slot: BigNumberish,
    _value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isInRecoveryMode(): Promise<boolean>;

  checkNotAdditionalProtectedVariable(_slot: BigNumberish): Promise<void>;

  removeRecoveryRole(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setRecoveryRole(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  enterRecoveryMode(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceID: Arrayish): Promise<boolean>;

  setReplacementReputationUpdateLogEntry(
    _reputationMiningCycle: string,
    _id: BigNumberish,
    _user: string,
    _amount: BigNumberish,
    _skillId: BigNumberish,
    _colony: string,
    _nUpdates: BigNumberish,
    _nPreviousUpdates: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getReplacementReputationUpdateLogEntry(
    _reputationMiningCycle: string,
    _id: BigNumberish
  ): Promise<{
    user: string;
    amount: BigNumber;
    skillId: BigNumber;
    colony: string;
    nUpdates: BigNumber;
    nPreviousUpdates: BigNumber;
  }>;

  getReplacementReputationUpdateLogsExist(
    _reputationMiningCycle: string
  ): Promise<boolean>;

  getMetaColony(): Promise<string>;

  getColonyCount(): Promise<BigNumber>;

  isColony(_colony: string): Promise<boolean>;

  addSkill(
    _parentSkillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getSkill(
    _skillId: BigNumberish
  ): Promise<{
    nParents: BigNumber;
    nChildren: BigNumber;
    parents: BigNumber[];
    children: BigNumber[];
    globalSkill: boolean;
    deprecated: boolean;
  }>;

  deprecateSkill(
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  appendReputationUpdateLog(
    _user: string,
    _amount: BigNumberish,
    _skillId: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getSkillCount(): Promise<BigNumber>;

  getReputationMiningSkillId(): Promise<BigNumber>;

  setTokenLocking(
    _tokenLockingAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getTokenLocking(): Promise<string>;

  createMetaColony(
    _tokenAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  createColony(
    _tokenAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addColonyVersion(
    _version: BigNumberish,
    _resolver: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  initialise(
    _resolver: string,
    _version: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getColony(_id: BigNumberish): Promise<string>;

  getCurrentColonyVersion(): Promise<BigNumber>;

  getParentSkillId(
    _skillId: BigNumberish,
    _parentSkillIndex: BigNumberish
  ): Promise<BigNumber>;

  getChildSkillId(
    _skillId: BigNumberish,
    _childSkillIndex: BigNumberish
  ): Promise<BigNumber>;

  getReputationMiningCycle(_active: boolean): Promise<string>;

  calculateMinerWeight(
    _timeStaked: BigNumberish,
    _submissonIndex: BigNumberish
  ): Promise<BigNumber>;

  getColonyVersionResolver(_version: BigNumberish): Promise<string>;

  setReputationRootHash(
    newHash: Arrayish,
    newNNodes: BigNumberish,
    stakers: string[],
    reward: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  startNextCycle(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  initialiseReputationMining(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getReputationRootHash(): Promise<string>;

  getReputationRootHashNNodes(): Promise<BigNumber>;

  startTokenAuction(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setupRegistrar(
    _ens: string,
    _rootNode: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  registerUserLabel(
    username: string,
    orbitdb: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  registerColonyLabel(
    colonyName: string,
    orbitdb: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateColonyOrbitDB(
    orbitdb: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateUserOrbitDB(
    orbitdb: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getProfileDBAddress(node: Arrayish): Promise<string>;

  lookupRegisteredENSDomain(addr: string): Promise<string>;

  addr(node: Arrayish): Promise<string>;

  getENSRegistrar(): Promise<string>;

  setMiningResolver(
    miningResolverAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getMiningResolver(): Promise<string>;

  getFeeInverse(): Promise<BigNumber>;

  setFeeInverse(
    _feeInverse: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    RecoveryRoleSet(user: string | null, setTo: null): EventFilter;

    ColonyNetworkInitialised(resolver: null): EventFilter;

    TokenLockingAddressSet(tokenLocking: null): EventFilter;

    MiningCycleResolverSet(miningCycleResolver: null): EventFilter;

    NetworkFeeInverseSet(feeInverse: null): EventFilter;

    ColonyVersionAdded(version: null, resolver: null): EventFilter;

    MetaColonyCreated(
      metaColony: null,
      token: null,
      rootSkillId: null
    ): EventFilter;

    ColonyAdded(
      colonyId: BigNumberish | null,
      colonyAddress: string | null,
      token: null
    ): EventFilter;

    SkillAdded(skillId: null, parentSkillId: null): EventFilter;

    AuctionCreated(auction: null, token: null, quantity: null): EventFilter;

    ReputationMiningInitialised(
      inactiveReputationMiningCycle: null
    ): EventFilter;

    ReputationMiningCycleComplete(hash: null, nNodes: null): EventFilter;

    ReputationRootHashSet(
      newHash: null,
      newNNodes: null,
      stakers: null,
      reward: null
    ): EventFilter;

    UserLabelRegistered(user: string | null, label: null): EventFilter;

    ColonyLabelRegistered(colony: string | null, label: null): EventFilter;
  };

  estimate: {
    approveExitRecovery(): Promise<BigNumber>;

    exitRecoveryMode(): Promise<BigNumber>;

    numRecoveryRoles(): Promise<BigNumber>;

    setStorageSlotRecovery(
      _slot: BigNumberish,
      _value: Arrayish
    ): Promise<BigNumber>;

    isInRecoveryMode(): Promise<BigNumber>;

    checkNotAdditionalProtectedVariable(
      _slot: BigNumberish
    ): Promise<BigNumber>;

    removeRecoveryRole(_user: string): Promise<BigNumber>;

    setRecoveryRole(_user: string): Promise<BigNumber>;

    enterRecoveryMode(): Promise<BigNumber>;

    supportsInterface(interfaceID: Arrayish): Promise<BigNumber>;

    setReplacementReputationUpdateLogEntry(
      _reputationMiningCycle: string,
      _id: BigNumberish,
      _user: string,
      _amount: BigNumberish,
      _skillId: BigNumberish,
      _colony: string,
      _nUpdates: BigNumberish,
      _nPreviousUpdates: BigNumberish
    ): Promise<BigNumber>;

    getReplacementReputationUpdateLogEntry(
      _reputationMiningCycle: string,
      _id: BigNumberish
    ): Promise<BigNumber>;

    getReplacementReputationUpdateLogsExist(
      _reputationMiningCycle: string
    ): Promise<BigNumber>;

    getMetaColony(): Promise<BigNumber>;

    getColonyCount(): Promise<BigNumber>;

    isColony(_colony: string): Promise<BigNumber>;

    addSkill(_parentSkillId: BigNumberish): Promise<BigNumber>;

    getSkill(_skillId: BigNumberish): Promise<BigNumber>;

    deprecateSkill(_skillId: BigNumberish): Promise<BigNumber>;

    appendReputationUpdateLog(
      _user: string,
      _amount: BigNumberish,
      _skillId: BigNumberish
    ): Promise<BigNumber>;

    getSkillCount(): Promise<BigNumber>;

    getReputationMiningSkillId(): Promise<BigNumber>;

    setTokenLocking(_tokenLockingAddress: string): Promise<BigNumber>;

    getTokenLocking(): Promise<BigNumber>;

    createMetaColony(_tokenAddress: string): Promise<BigNumber>;

    createColony(_tokenAddress: string): Promise<BigNumber>;

    addColonyVersion(
      _version: BigNumberish,
      _resolver: string
    ): Promise<BigNumber>;

    initialise(_resolver: string, _version: BigNumberish): Promise<BigNumber>;

    getColony(_id: BigNumberish): Promise<BigNumber>;

    getCurrentColonyVersion(): Promise<BigNumber>;

    getParentSkillId(
      _skillId: BigNumberish,
      _parentSkillIndex: BigNumberish
    ): Promise<BigNumber>;

    getChildSkillId(
      _skillId: BigNumberish,
      _childSkillIndex: BigNumberish
    ): Promise<BigNumber>;

    getReputationMiningCycle(_active: boolean): Promise<BigNumber>;

    calculateMinerWeight(
      _timeStaked: BigNumberish,
      _submissonIndex: BigNumberish
    ): Promise<BigNumber>;

    getColonyVersionResolver(_version: BigNumberish): Promise<BigNumber>;

    setReputationRootHash(
      newHash: Arrayish,
      newNNodes: BigNumberish,
      stakers: string[],
      reward: BigNumberish
    ): Promise<BigNumber>;

    startNextCycle(): Promise<BigNumber>;

    initialiseReputationMining(): Promise<BigNumber>;

    getReputationRootHash(): Promise<BigNumber>;

    getReputationRootHashNNodes(): Promise<BigNumber>;

    startTokenAuction(_token: string): Promise<BigNumber>;

    setupRegistrar(_ens: string, _rootNode: Arrayish): Promise<BigNumber>;

    registerUserLabel(username: string, orbitdb: string): Promise<BigNumber>;

    registerColonyLabel(
      colonyName: string,
      orbitdb: string
    ): Promise<BigNumber>;

    updateColonyOrbitDB(orbitdb: string): Promise<BigNumber>;

    updateUserOrbitDB(orbitdb: string): Promise<BigNumber>;

    getProfileDBAddress(node: Arrayish): Promise<BigNumber>;

    lookupRegisteredENSDomain(addr: string): Promise<BigNumber>;

    addr(node: Arrayish): Promise<BigNumber>;

    getENSRegistrar(): Promise<BigNumber>;

    setMiningResolver(miningResolverAddress: string): Promise<BigNumber>;

    getMiningResolver(): Promise<BigNumber>;

    getFeeInverse(): Promise<BigNumber>;

    setFeeInverse(_feeInverse: BigNumberish): Promise<BigNumber>;
  };
}
