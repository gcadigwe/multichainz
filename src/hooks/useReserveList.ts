import { useState, useMemo } from "react";

import { ERC20Token, getContract } from "../utils/Contract";
import { useWeb3React } from "@web3-react/core";
import IPoolAbi from "../utils/abi/IPool.json";
import AaveProtocolDataprovider from "../utils/abi/AaveProtocolDataProvider.json";
import erc20TokenAbi from "../utils/abi/erc20.json";
import AaveOracleAbi from "../utils/abi/AaveOracleAbi.json";
import { ethers } from "ethers";

import {
  AaveOracleAddresess,
  AaveProtocolDataProviderAddresses,
  TokenBalanceProvider,
} from "../utils/constants/addresses";
import MultiCall from "@indexed-finance/multicall";

const useReserveList = (poolAddress: any, recheckReserver: boolean) => {
  const { chainId, account, library } = useWeb3React();
  const [reservesList, setreservesList] = useState<any>();

  useMemo(async () => {
    if (poolAddress && account) {
      try {
        console.log("library", library);
        const multi = new MultiCall(library);
        const reserveDataInputs = [];
        const userReserveDataInputs = [];
        const tokenNameInputs = [];
        const tokenSymbolInputs = [];
        const tokenDecimalsInputs = [];
        const poolReserveDataInputs = [];
        const wethValueInputs = [];
        const aTokenTotalSupplyInputs = [];
        const totalDebtInputs = [];
        console.log(multi);
        const poolContract = getContract(poolAddress, library, IPoolAbi.abi);

        const oracleContract = getContract(
          AaveOracleAddresess[chainId as number],
          library,
          AaveOracleAbi
        );

        // const aaveProcolDataProvider = getContract(
        //   AaveProtocolDataProviderAddresses[chainId as number],
        //   library,
        //   AaveProtocolDataprovider.abi
        // );

        // const reserveList = [];

        const list = await poolContract.getReservesList();

        // for (let i = 0; i < list.length; i++) {
        //   reserveDataInputs.push({
        //     target: AaveProtocolDataProviderAddresses[chainId as number],
        //     function: "getReserveConfigurationData",
        //     args: [list[i]],
        //   });
        // }

        for (let i = 0; i < list.length; i++) {
          userReserveDataInputs.push({
            target: AaveProtocolDataProviderAddresses[chainId as number],
            function: "getUserReserveData",
            args: [list[i], account],
          });

          reserveDataInputs.push({
            target: AaveProtocolDataProviderAddresses[chainId as number],
            function: "getReserveConfigurationData",
            args: [list[i]],
          });

          aTokenTotalSupplyInputs.push({
            target: AaveProtocolDataProviderAddresses[chainId as number],
            function: "getATokenTotalSupply",
            args: [list[i]],
          });

          totalDebtInputs.push({
            target: AaveProtocolDataProviderAddresses[chainId as number],
            function: "getTotalDebt",
            args: [list[i]],
          });

          poolReserveDataInputs.push({
            target: poolAddress,
            function: "getReserveData",
            args: [list[i]],
          });

          tokenNameInputs.push({
            target: list[i],
            function: "name",
            args: [],
          });

          tokenSymbolInputs.push({
            target: list[i],
            function: "symbol",
            args: [],
          });

          tokenDecimalsInputs.push({
            target: list[i],
            function: "decimals",
            args: [],
          });

          wethValueInputs.push({
            target: AaveOracleAddresess[chainId as number],
            function: "getAssetPrice",
            args: [list[i]],
          });
        }

        const balanceData = await multi.getBalancesAndAllowances(
          list,
          account,
          poolAddress
        );

        const reserveData = await multi.multiCall(
          AaveProtocolDataprovider.abi,
          reserveDataInputs
        );

        const userReserveData = await multi.multiCall(
          AaveProtocolDataprovider.abi,
          userReserveDataInputs
        );

        const poolReserveData = await multi.multiCall(
          IPoolAbi.abi,
          poolReserveDataInputs
        );

        const tokenNameData = await multi.multiCall(
          erc20TokenAbi,
          tokenNameInputs
        );

        const tokenSymbolData = await multi.multiCall(
          erc20TokenAbi,
          tokenSymbolInputs
        );

        const tokenDecimalsData = await multi.multiCall(
          erc20TokenAbi,
          tokenDecimalsInputs
        );

        const wethPriceData = await multi.multiCall(
          AaveOracleAbi,
          wethValueInputs
        );

        const aTokenTotalSupplyData = await multi.multiCall(
          AaveProtocolDataprovider.abi,
          aTokenTotalSupplyInputs
        );

        const totalDebtData = await multi.multiCall(
          AaveProtocolDataprovider.abi,
          totalDebtInputs
        );

        // const balanceSuppliedData = await multi.multiCall(
        //   balanceProviderAbi,
        //   balanceSuppliedInputs
        // );

        console.log("userReserveData", userReserveData);

        const reserveList = [];

        for (let i = 0; i < list.length; i++) {
          const listObject = {
            name: tokenNameData[1][i],
            symbol: tokenSymbolData[1][i],
            decimals: tokenDecimalsData[1][i],
            reservesData: reserveData[1][i],
            userReserveData: userReserveData[1][i],
            balance: balanceData[1][list[i]].balance,
            allowance: balanceData[1][list[i]].allowance,
            address: list[i],
            poolReserveData: poolReserveData[1][i],
            assetPrice: ethers.utils.formatUnits(
              wethPriceData[1][i].toString(),
              8
            ),
            aTokenSupply: aTokenTotalSupplyData[1][i].toString(),
            totalDebt: totalDebtData[1][i].toString(),
            // supplied: balanceSuppliedData[1][i].toString(),
          };

          reserveList.push(listObject);
        }

        setreservesList(reserveList);
      } catch (err) {
        console.log(err);
      }
    }
  }, [chainId, account, poolAddress, recheckReserver]);

  return { reservesList };
};

export default useReserveList;
