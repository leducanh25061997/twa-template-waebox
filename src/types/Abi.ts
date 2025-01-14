import { ABIGetter, ABIReceiver, ABIType } from "ton-core";

export const JettonDefaultWallet_types: ABIType[] = [
  { "name": "StateInit", "header": null, "fields": [{ "name": "code", "type": { "kind": "simple", "type": "cell", "optional": false } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "Context", "header": null, "fields": [{ "name": "bounced", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "sender", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "value", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "raw", "type": { "kind": "simple", "type": "slice", "optional": false } }] },
  { "name": "SendParameters", "header": null, "fields": [{ "name": "bounce", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "to", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "value", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "mode", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "body", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "code", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "data", "type": { "kind": "simple", "type": "cell", "optional": true } }] },
  { "name": "Deploy", "header": 2490013878, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "DeployOk", "header": 2952335191, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "FactoryDeploy", "header": 1829761339, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "cashback", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "ChangeOwner", "header": 2174598809, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "newOwner", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "ChangeOwnerOk", "header": 846932810, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "newOwner", "type": { "kind": "simple", "type": "address", "optional": false } }] },
  { "name": "TokenTransfer", "header": 260734629, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "amount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "destination", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "responseDestination", "type": { "kind": "simple", "type": "address", "optional": true } }, { "name": "customPayload", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "forwardTonAmount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "forwardPayload", "type": { "kind": "simple", "type": "slice", "optional": false, "format": "remainder" } }] },
  { "name": "TokenTransferInternal", "header": 395134233, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "amount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "from", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "responseAddress", "type": { "kind": "simple", "type": "address", "optional": true } }, { "name": "forwardTonAmount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "forwardPayload", "type": { "kind": "simple", "type": "slice", "optional": false, "format": "remainder" } }] },
  { "name": "TokenNotification", "header": 1935855772, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "amount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "from", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "forwardPayload", "type": { "kind": "simple", "type": "slice", "optional": false, "format": "remainder" } }] },
  { "name": "TokenBurn", "header": 1499400124, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "amount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "responseAddress", "type": { "kind": "simple", "type": "address", "optional": true } }] },
  { "name": "TokenBurnNotification", "header": 2078119902, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }, { "name": "amount", "type": { "kind": "simple", "type": "uint", "optional": false, "format": "coins" } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "responseAddress", "type": { "kind": "simple", "type": "address", "optional": true } }] },
  { "name": "TokenExcesses", "header": 3576854235, "fields": [{ "name": "queryId", "type": { "kind": "simple", "type": "uint", "optional": false, "format": 64 } }] },
  { "name": "TokenUpdateContent", "header": 201882270, "fields": [{ "name": "content", "type": { "kind": "simple", "type": "cell", "optional": true } }] },
  { "name": "JettonData", "header": null, "fields": [{ "name": "totalSupply", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "mintable", "type": { "kind": "simple", "type": "bool", "optional": false } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "content", "type": { "kind": "simple", "type": "cell", "optional": true } }, { "name": "walletCode", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "JettonWalletData", "header": null, "fields": [{ "name": "balance", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }, { "name": "owner", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "master", "type": { "kind": "simple", "type": "address", "optional": false } }, { "name": "walletCode", "type": { "kind": "simple", "type": "cell", "optional": false } }] },
  { "name": "Mint", "header": 33240155, "fields": [{ "name": "amount", "type": { "kind": "simple", "type": "int", "optional": false, "format": 257 } }] },
];

export const JettonDefaultWallet_getters: ABIGetter[] = [
  {"name":"get_wallet_data","arguments":[],"returnType":{"kind":"simple","type":"JettonWalletData","optional":false}},
];

export const JettonDefaultWallet_receivers: ABIReceiver[] = [
  {"receiver":"internal","message":{"kind":"typed","type":"TokenTransfer"}},
  {"receiver":"internal","message":{"kind":"typed","type":"TokenTransferInternal"}},
  {"receiver":"internal","message":{"kind":"typed","type":"TokenBurn"}},
];

export const JettonDefaultWallet_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
  4429: { message: `Invalid sender` },
  13650: { message: `Invalid bounced message` },
  16059: { message: `Invalid value` },
  62972: { message: `Invalid balance` },
};