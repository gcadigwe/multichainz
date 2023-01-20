import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import erc20Abi from "./abi/erc20.json";

export const getContract = (
  address: string,
  library: Web3Provider | undefined,
  abi: any
) => {
  return new Contract(address, abi, library?.getSigner());
};

export const ERC20Token = (
  address: string,
  library: Web3Provider | undefined
) => {
  return new Contract(address, erc20Abi, library?.getSigner());
};
