import { BigNumberish, Signer } from "ethers";
import { ethers } from "hardhat";
import { ACA } from "@acala-network/contracts/utils/MandalaTokens";
import { TransactionReceipt } from "@ethersproject/providers";
import { parseEther } from "ethers/lib/utils";

const ERC20_ABI = [
  "function transfer(address to, uint amount) returns (bool)"
];

async function transferToken(
  wallet: Signer,
  tokenAddr: string,
  to: string,
  amount: BigNumberish,
): Promise<TransactionReceipt> {
  const token = new ethers.Contract(tokenAddr, ERC20_ABI, wallet);
  const transaction = await token.transfer(to, amount);
  return await transaction.wait();
}

async function main() {
  const [wallet] = await ethers.getSigners();
  const receipt = await transferToken(
    wallet,
    ACA,
    wallet.address,
    parseEther('123'),
  )

  console.log('transfer complete!')
  console.log('logs: ', receipt.logs)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
