import {
  Contract,
  ContractProvider,
  Sender,
  Address,
  Cell,
  contractAddress,
  beginCell,
  TupleBuilder,
} from "ton-core";
import { loadTupleJettonWalletData } from "../utils/commonFunction";

export default class Counter implements Contract {
  static createForDeploy(code: Cell, initialCounterValue: number): Counter {
    const data = beginCell().storeUint(initialCounterValue, 64).endCell();
    const workchain = 0; // deploy to workchain 0
    const address = contractAddress(workchain, { code, data });
    console.log(address, '-address-')
    return new Counter(address, { code, data });
  }

  async sendDeploy(provider: ContractProvider, via: Sender) {
    await provider.internal(via, {
      value: "0.01", // send 0.01 TON to contract for rent
      bounce: false,
    });
  }

  async getCounter(provider: ContractProvider) {
    const { stack } = await provider.get("counter", []);
    return stack.readBigNumber();
  }

  async sendIncrement(provider: ContractProvider, via: Sender) {
    const messageBody = beginCell()
      .storeUint(1, 32) // op (op #1 = increment)
      .storeUint(0, 64) // query id
      .endCell();
    await provider.internal(via, {
      value: "0.002", // send 0.002 TON for gas
      body: messageBody,
    });
  }

  async getGetWalletAddress(provider: ContractProvider, owner: Address) {
    let builder = new TupleBuilder();
    builder.writeAddress(owner);
    let source = (await provider.get('get_wallet_address', builder.build())).stack;
    let result = source.readAddress();
    console.log(result, 'result')
    return result;
  }

  async getGetWalletData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('get_wallet_data', builder.build())).stack;
    const result = loadTupleJettonWalletData(source);
    console.log(result, 'result')
    return result;
  }

  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell }
  ) { }
}
