import { Address, Cell } from "ton-core";

export type TokenTransfer = {
  $$type: 'TokenTransfer';
  queryId: bigint;
  amount: bigint;
  destination: Address;
  responseDestination: Address | null;
  customPayload: Cell | null;
  forwardTonAmount: bigint;
  forwardPayload: Cell;
}

export type TokenTransferInternal = {
  $$type: 'TokenTransferInternal';
  queryId: bigint;
  amount: bigint;
  from: Address;
  responseAddress: Address | null;
  forwardTonAmount: bigint;
  forwardPayload: Cell;
}

export type TokenBurn = {
  $$type: 'TokenBurn';
  queryId: bigint;
  amount: bigint;
  owner: Address;
  responseAddress: Address | null;
}