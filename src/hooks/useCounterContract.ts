import { useEffect, useState } from "react";
import Counter from "../contracts/counter";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract, fromNano } from "ton-core";
import { useQuery } from "@tanstack/react-query";
import { CHAIN } from "@tonconnect/protocol";
import { CounterWallet } from "../contracts/counterWallet";
import { sleep } from "../utils/commonFunction";

export function useCounterContract() {
  const { client } = useTonClient();
  const { sender, network, wallet } = useTonConnect();
  console.log(wallet, 'wallet')
  const [balance, setBalance] = useState<string | null>();
  console.log(balance, 'balance')

  const counterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new Counter(
      Address.parse(
        network === CHAIN.MAINNET
          ? "EQBPEDbGdwaLv1DKntg9r6SjFIVplSaSJoJ-TVLe_2rqBOmH"
          : "kQCoG4PHWrGRjr8s_gZ3Qtk5HFJaWzLnF_28X1rG3jWd3W8G"
      ) // replace with your address from tutorial 2 step 8
    );
    return client.open(contract) as OpenedContract<Counter>;
  }, [client]);

  const { data, isFetching } = useQuery(
    ["counter"],
    async () => {
      if (!counterContract) return null;
      return (await counterContract!.getCounter()).toString();
    },
    { refetchInterval: 3000 }
  );

  return {
    value: isFetching ? null : data,
    address: counterContract?.address.toString(),
    sendIncrement: () => {
      return counterContract?.sendIncrement(sender);
    },
  };
}
