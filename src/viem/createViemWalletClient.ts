import { createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

export function createViemWalletClient() {
  try {
    const privateKeyRaw = process.env.PRIVATE_KEY;
    
    if (!privateKeyRaw) {
      throw new Error("PRIVATE_KEY environment variable is not set");
    }
    
    // Ensure private key has 0x prefix
    const privateKey = privateKeyRaw.startsWith('0x') 
      ? privateKeyRaw 
      : `0x${privateKeyRaw}`;
      
    // Validate private key format
    if (!/^0x[0-9a-fA-F]{64}$/.test(privateKey)) {
      throw new Error("Invalid private key format. Must be a hex string with 0x prefix and 64 characters");
    }
    
    const account = privateKeyToAccount(privateKey as `0x${string}`);
    
    return createWalletClient({
      account,
      chain: baseSepolia,
      transport: http(),
    });
  } catch (error) {
    console.error("Error creating wallet client:", error);
    throw error;
  }
}