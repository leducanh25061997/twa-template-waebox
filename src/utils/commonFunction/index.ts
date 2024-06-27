import { Builder, TupleReader } from "ton-core";
import { TokenBurn, TokenTransfer, TokenTransferInternal } from "../../types/Token";

export function storeTokenTransfer(src: TokenTransfer) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(260734629, 32);
      b_0.storeUint(src.queryId, 64);
      b_0.storeCoins(src.amount);
      b_0.storeAddress(src.destination);
      b_0.storeAddress(src.responseDestination);
      if (src.customPayload !== null && src.customPayload !== undefined) { b_0.storeBit(true).storeRef(src.customPayload); } else { b_0.storeBit(false); }
      b_0.storeCoins(src.forwardTonAmount);
      b_0.storeBuilder(src.forwardPayload.asBuilder());
  };
};

export function storeTokenTransferInternal(src: TokenTransferInternal) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(395134233, 32);
      b_0.storeUint(src.queryId, 64);
      b_0.storeCoins(src.amount);
      b_0.storeAddress(src.from);
      b_0.storeAddress(src.responseAddress);
      b_0.storeCoins(src.forwardTonAmount);
      b_0.storeBuilder(src.forwardPayload.asBuilder());
  };
};

export function storeTokenBurn(src: TokenBurn) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeUint(1499400124, 32);
      b_0.storeUint(src.queryId, 64);
      b_0.storeCoins(src.amount);
      b_0.storeAddress(src.owner);
      b_0.storeAddress(src.responseAddress);
  };
};

export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export function loadTupleJettonWalletData(source: TupleReader) {
  let _balance = source.readBigNumber();
  let _owner = source.readAddress();
  let _master = source.readAddress();
  let _walletCode = source.readCell();
  return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}