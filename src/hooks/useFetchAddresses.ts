import { useState, useMemo } from "react";
import { IPoolAddressProverAddresses } from "../utils/constants/addresses";
import { getContract } from "../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import IpoolAddressProviderAbi from "../utils/abi/IPoolAddressProvider.json";

const useFetchAddresses = () => {
  const [addresses, setAddresses] = useState<any>({});
  const { chainId, account, library } = useWeb3React();

  useMemo(async () => {
    const addressProviderContract = getContract(
      IPoolAddressProverAddresses[chainId as number],
      library,
      IpoolAddressProviderAbi.abi
    );

    const IPoolDataProvierAddress =
      await addressProviderContract.getPoolDataProvider();

    const PoolAddress = await addressProviderContract.getPool();

    console.log(IPoolDataProvierAddress);
    setAddresses({
      IPoolDataProvierAddress,
      PoolAddress,
    });
  }, [chainId, account]);

  return { addresses };
};

export default useFetchAddresses;
