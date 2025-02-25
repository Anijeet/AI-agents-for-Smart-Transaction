import { Address } from 'viem';
import { createViemWalletClient } from '../viem/createViemWalletClient.js';
import { ToolConfig } from './allTools.js';



export const getWalletAddressTool: ToolConfig = {
    definition: {
        type: 'function',
        function: {
            name: 'get_wallet_address',
            description: 'Get the connected wallet address',
            // No parameters needed since we're getting the connected wallet
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },
    handler: async () => {
        return await getWalletAddress();
    }
};

async function getWalletAddress(): Promise<Address> {
    try {
        const privateKey = process.env.PRIVATE_KEY;
        
        if (!privateKey) {
            throw new Error("PRIVATE_KEY environment variable is not set");
        }
        
        console.log("Private key available (first few chars):", 
            privateKey.substring(0, 6) + "...");
            
        const walletClient = createViemWalletClient();
        const addresses = await walletClient.getAddresses();
        
        if (!addresses || addresses.length === 0) {
            throw new Error("No addresses found in wallet");
        }
        
        return addresses[0];
    } catch (error) {
        console.error("Error getting wallet address:", error);
        throw error;
    }
}