import { ethers } from "ethers";
import JSBI from "jsbi";
import { Fraction, BigintIsh } from "@uniswap/sdk-core";

export const calculateAvailable = (
  balance: any,
  stable: any,
  variable: any
) => {
  try {
    if (balance !== "0") {
      const add = JSBI.add(
        JSBI.BigInt(stable.toString()),
        JSBI.BigInt(variable.toString())
      );

      const subtract = JSBI.subtract(JSBI.BigInt(balance), add);

      const divide = JSBI.divide(subtract, JSBI.BigInt(balance));

      const multiply = JSBI.multiply(divide, JSBI.BigInt(100));

      return multiply.toString();
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
};

export const calculateSupplyApy = (currentLiquidityRate: any, apr: boolean) => {
  try {
    if (apr) {
      const parseValue: any = ethers.utils.parseUnits("10", "27");

      const APR = JSBI.divide(
        JSBI.BigInt(currentLiquidityRate),
        JSBI.BigInt(parseValue)
      );

      const fract = new Fraction(currentLiquidityRate, parseValue);

      // ((1 + (depositAPR / SECONDS_PER_YEAR)) ^ SECONDS_PER_YEAR) - 1

      return APR.toString();
    } else {
      const parseValue = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(27));
      const SECONDS_PER_YEAR = 31536000;

      console.log("parseValue", currentLiquidityRate);

      const APR = new Fraction(currentLiquidityRate, parseValue.toString());

      //   console.log("fract", APR.toSignificant(2));

      //   const multiplyAPR = APR.multiply(100);

      //   console.log(multiplyAPR);

      const divideAPR = parseFloat(APR.toFixed(5)) / SECONDS_PER_YEAR;

      //   console.log("divide", divideAPR);

      const add = divideAPR + 1;

      //   console.log("add", add.toSignificant(2));

      const multi = add ** SECONDS_PER_YEAR;

      const subtract = multi - 1;

      //   const APR = JSBI.divide(JSBI.BigInt(currentLiquidityRate), parseValue);

      //   console.log("APR", APR.toString());
      //   console.log("currentLiquidityRate", currentLiquidityRate);

      //   const multiplyAPR = JSBI.multiply(JSBI.BigInt(1000), APR);

      //   console.log("multiply", multiplyAPR.toString());

      //   const divideAPR = JSBI.divide(multiplyAPR, JSBI.BigInt(SECONDS_PER_YEAR));

      //   const add = JSBI.add(JSBI.BigInt(1), divideAPR);

      //   const multi = JSBI.exponentiate(add, JSBI.BigInt(SECONDS_PER_YEAR));

      //   const subtract = JSBI.subtract(multi, JSBI.BigInt(1));

      // ((1 + (depositAPR / SECONDS_PER_YEAR)) ^ SECONDS_PER_YEAR) - 1

      return (subtract * 100).toFixed(2);
    }
  } catch (err) {
    console.log(err);
  }
};

// export const calculateSupplyApr = (currentLiquidityRate: any) => {
//     try {
//       const parseValue = ethers.utils.parseUnits("10", "27");

//       const APR = JSBI.divide(
//         JSBI.BigInt(currentLiquidityRate),
//         JSBI.BigInt(parseValue)
//       );

//       // ((1 + (depositAPR / SECONDS_PER_YEAR)) ^ SECONDS_PER_YEAR) - 1

//       return APR.toString();

//     } catch (err) {
//       console.log(err);
//     }
//   };

export const CalculateTotalSupply = (reserveData: any) => {
  try {
    const allValues = [];

    for (let i = 0; i < reserveData?.length; i++) {
      const supplyInUsd =
        parseFloat(
          ethers.utils.formatUnits(
            reserveData[i].aTokenSupply,
            reserveData[i].decimals
          )
        ) * parseFloat(reserveData[i].assetPrice);

      allValues.push(supplyInUsd);
    }

    return allValues.reduce((a, b) => a + b, 0).toFixed(2);
  } catch (err) {
    console.log(err);
  }
};

export const calculateValueToBeBorrowed = (poolReserveData: any) => {
  try {
    if (poolReserveData?.reservesData.usageAsCollateralEnabled === true) {
      console.log(parseFloat(poolReserveData?.reservesData.ltv.toString()));
      const ltv =
        parseFloat(poolReserveData?.reservesData.ltv.toString()) / 10000;

      const amountThatCanBeBorrowed =
        ltv *
        parseFloat(
          parseFloat(
            ethers.utils.formatUnits(
              poolReserveData?.userReserveData.currentATokenBalance.toString(),
              poolReserveData?.decimals
            )
          ).toFixed(2)
        );

      return (
        amountThatCanBeBorrowed * parseFloat(poolReserveData?.assetPrice)
      ).toFixed(2);
    } else {
      return "0.00";
    }
  } catch (err) {
    console.log(err);
  }
};

export const calculateTVL = (reservesData: any) => {
  try {
    const allValues = [];
    const allValueDebt = [];

    for (let i = 0; i < reservesData?.length; i++) {
      const supplyInUsd =
        parseFloat(
          ethers.utils.formatUnits(
            reservesData[i].aTokenSupply,
            reservesData[i].decimals
          )
        ) * parseFloat(reservesData[i].assetPrice);

      allValues.push(supplyInUsd);
    }

    for (let i = 0; i < reservesData?.length; i++) {
      const debtinUsd =
        parseFloat(
          ethers.utils.formatUnits(
            reservesData[i].totalDebt,
            reservesData[i].decimals
          )
        ) * parseFloat(reservesData[i].assetPrice);

      allValueDebt.push(debtinUsd);
    }

    const final =
      allValues.reduce((a, b) => a + b, 0) -
      allValueDebt.reduce((a, b) => a + b, 0);

    return final.toFixed(2);
  } catch (err) {
    console.log(err);
  }
};

export const calculateTotalBorrow = (reservesData: any) => {
  try {
    const allValueDebt = [];

    for (let i = 0; i < reservesData?.length; i++) {
      const debtinUsd =
        parseFloat(
          ethers.utils.formatUnits(
            reservesData[i].totalDebt,
            reservesData[i].decimals
          )
        ) * parseFloat(reservesData[i].assetPrice);

      allValueDebt.push(debtinUsd);
    }

    const final = allValueDebt.reduce((a, b) => a + b, 0);

    return final.toFixed(2);
  } catch (err) {
    console.log(err);
  }
};

export const calculateUserBorrowedorSupplied = (
  reservesData: any,
  borrow: boolean
) => {
  try {
    if (borrow) {
      const allValues = [];

      for (let i = 0; i < reservesData?.length; i++) {
        const supplied =
          parseFloat(
            parseFloat(
              ethers.utils.formatUnits(
                reservesData[i]?.userReserveData.currentVariableDebt.toString(),
                reservesData[i]?.decimals
              )
            ).toFixed(2)
          ) * parseFloat(reservesData[i]?.assetPrice);

        allValues.push(supplied);
      }

      return allValues.reduce((a, b) => a + b, 0);
    } else {
      const allValues = [];

      for (let i = 0; i < reservesData?.length; i++) {
        const supplied =
          parseFloat(
            parseFloat(
              ethers.utils.formatUnits(
                reservesData[
                  i
                ]?.userReserveData.currentATokenBalance.toString(),
                reservesData[i]?.decimals
              )
            ).toFixed(2)
          ) * parseFloat(reservesData[i]?.assetPrice);

        allValues.push(supplied);
      }

      return allValues.reduce((a, b) => a + b, 0);
    }
  } catch (err) {
    console.log(err);
  }
};
