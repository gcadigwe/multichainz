import { getAddress } from "@ethersproject/address";

export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch (e) {
    return false;
  }
}

export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars)}...${parsed.substring(42 - chars)}`;
}
