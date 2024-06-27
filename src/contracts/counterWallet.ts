import { Address, Builder, Cell, Contract, ContractABI, ContractProvider, Sender, Slice, TupleBuilder, TupleReader, beginCell, contractAddress } from "ton-core";
import { JettonDefaultWallet_errors, JettonDefaultWallet_getters, JettonDefaultWallet_receivers, JettonDefaultWallet_types } from "../types/Abi";
import { TokenBurn, TokenTransfer, TokenTransferInternal } from "../types/Token";
import { storeTokenBurn, storeTokenTransfer, storeTokenTransferInternal } from "../utils/commonFunction";

type JettonDefaultWallet_init_args = {
  $$type: 'JettonDefaultWallet_init_args';
  master: Address;
  owner: Address;
}

function initJettonDefaultWallet_init_args(src: JettonDefaultWallet_init_args) {
  return (builder: Builder) => {
      let b_0 = builder;
      b_0.storeAddress(src.master);
      b_0.storeAddress(src.owner);
  };
}

async function JettonDefaultWallet_init(master: Address, owner: Address) {
  const __code = Cell.fromBase64('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');
  const __system = Cell.fromBase64('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');
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initJettonDefaultWallet_init_args({ $$type: 'JettonDefaultWallet_init_args', master, owner })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

function loadTupleJettonWalletData(source: TupleReader) {
  let _balance = source.readBigNumber();
  let _owner = source.readAddress();
  let _master = source.readAddress();
  let _walletCode = source.readCell();
  return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

export class CounterWallet implements Contract {
    
  static async init(master: Address, owner: Address) {
      return await JettonDefaultWallet_init(master, owner);
  }
  
  static async fromInit(master: Address, owner: Address) {
      const init = await JettonDefaultWallet_init(master, owner);
      const address = contractAddress(0, init);
      return new CounterWallet(address, init);
  }
  
  static fromAddress(address: Address) {
      return new CounterWallet(address);
  }
  
  readonly address: Address; 
  readonly init?: { code: Cell, data: Cell };
  readonly abi: ContractABI = {
      types:  JettonDefaultWallet_types,
      getters: JettonDefaultWallet_getters,
      receivers: JettonDefaultWallet_receivers,
      errors: JettonDefaultWallet_errors,
  };
  
  private constructor(address: Address, init?: { code: Cell, data: Cell }) {
      this.address = address;
      this.init = init;
  }
  
  async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenTransfer | TokenTransferInternal | TokenBurn) {
      
      let body: Cell | null = null;
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenTransfer') {
          body = beginCell().store(storeTokenTransfer(message)).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenTransferInternal') {
          body = beginCell().store(storeTokenTransferInternal(message)).endCell();
      }
      if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenBurn') {
          body = beginCell().store(storeTokenBurn(message)).endCell();
      }
      if (body === null) { throw new Error('Invalid message type'); }
      
      await provider.internal(via, { ...args, body: body });
      
  }
  
  async getGetWalletData(provider: ContractProvider) {
      let builder = new TupleBuilder();
      let source = (await provider.get('get_wallet_data', builder.build())).stack;
      const result = loadTupleJettonWalletData(source);
      console.log(result, 'result')
      return result;
  }
  
}