import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Acknowledgement: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    sourcePortAddress: p.string(),
    sourceChannelId: p.string(),
    sequence: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  CloseIbcChannel: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    portAddress: p.string(),
    channelId: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  ConnectIbcChannel: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    portAddress: p.string(),
    channelId: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  OpenIbcChannel: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    portAddress: p.string(),
    version: p.string(),
    ordering: p.int(),
    feeEnabled: p.boolean(),
    connectionHops: p.string().list(),
    counterpartyPortId: p.string(),
    counterpartyChannelId: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  OwnershipTransferred: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    previousOwner: p.string(),
    newOwner: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  RecvPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    destPortAddress: p.string(),
    destChannelId: p.string(),
    sequence: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  SendPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    sourcePortAddress: p.string(),
    sourceChannelId: p.string(),
    packet: p.string(),
    sequence: p.bigint(),
    timeoutTimestamp: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  Timeout: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    sourcePortAddress: p.string(),
    sourceChannelId: p.string(),
    sequence: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  WriteAckPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    writerPortAddress: p.string(),
    writerChannelId: p.string(),
    sequence: p.bigint(),
    ackPacketSuccess: p.boolean(),
    ackPacketData: p.string(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
  WriteTimeoutPacket: p.createTable({
    id: p.string(),
    dispatcherAddress: p.string(),
    dispatcherType: p.string(),
    writerPortAddress: p.string(),
    writerChannelId: p.string(),
    sequence: p.bigint(),
    timeoutHeightRevisionNumber: p.bigint(),
    timeoutHeightRevisionHeight: p.bigint(),
    timeoutTimestamp: p.bigint(),
    blockNumber: p.bigint(),
    blockTimestamp: p.bigint(),
    transactionHash: p.string(),
    chainId: p.int(),
    gas: p.bigint(),
    maxFeePerGas: p.bigint().optional(),
    maxPriorityFeePerGas: p.bigint().optional(),
  }),
}));