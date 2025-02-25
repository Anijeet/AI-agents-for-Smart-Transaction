## OpenAI Wallet Assistant
This project is an OpenAI-powered assistant designed to manage wallet transactions using the Viem library. The assistant can perform tasks such as getting wallet addresses, checking balances, and sending transactions securely on the Sepolia test network.

 ## Features
1. Wallet Control: The assistant has control over your wallet, allowing it to manage transactions.
2. Transaction Execution: Send 0 ETH to a specified address using OpenAI's assistant functionalities.
3. Tool Integration: Utilizes modular tools for getting wallet addresses, balances, and sending transactions.
4. Smart Workflow: The assistant runs a workflow consisting of creating threads, running processes, and handling tool calls.
5. Error Handling: Comprehensive error management and logging for reliable operations.

## Prerequisites

1. Node.js (v18.x or later)
2. npm or yarn
3. OpenAI API Key
4. A wallet private key for Sepolia Test Network

## Installation
1. Clone the Repository
2. git clone https://github.com/your-username/openai-wallet-assistant.git
3. cd openai-wallet-assistant
4. Install Dependencies
npm install

## Environment Variables
Create a .env file in the root directory and add the following:
OPENAI_API_KEY=your_openai_api_key
PRIVATE_KEY=your_wallet_private_key
Replace your_openai_api_key with your OpenAI API key.
Replace your_wallet_private_key with your wallet's private key (Sepolia network).

## Project Structure

openai-wallet-assistant
│   main.ts                # Main entry point
│   .env                   # Environment variables
│   package.json           # Project dependencies and scripts
│
└───openai
│   │   createAssistant.ts  # Creates OpenAI Assistant
│   │   createThread.ts     # Handles Thread Creation
│   │   createRun.ts        # Manages Assistant Runs
│   │   performRun.ts       # Executes Assistant Runs
│   │   handleRunToolCalls.ts # Handles Tool Calls During Runs
│
└───tools
    │   allTools.ts         # Exports available tools
    │   getBalance.ts       # Retrieves wallet balance
    │   getWalletAddress.ts # Retrieves wallet address
    │   sendTransaction.ts  # Sends a transaction
    │
    └───viem
        │   createViemWalletClient.ts # Creates Viem Wallet Client
## How It Works

Assistant Creation: createAssistant() initializes the OpenAI Assistant with custom instructions and tools.

Thread and Run Management:
A new thread is created with a message, e.g., "send 0 ETH to 0x...".
A run is initiated to perform the assistant's workflow.

Tool Handling:
The assistant interacts with modular tools for wallet operations.

Tools include:
get_balance: Checks wallet balance.
get_wallet_address: Retrieves connected wallet address.
send_transaction: Sends ETH to a specified address.

Execution Flow:
The assistant runs a workflow of creating threads, runs, and processing tool calls.
Tool calls are handled asynchronously with error management and logging.
Usage

To run the project:
node main.ts
The assistant will:

Initialize the OpenAI client.
Create an assistant instance.
Start a thread with the message to send 0 ETH.
Perform the transaction and display the result in the console.

## Dependencies
OpenAI - For creating and managing assistant workflows.
Viem - For interacting with Ethereum wallets.
dotenv - For managing environment variables.
Security Notes
Keep your private key secure!
Do not hardcode your private key or share your .env file.
Add .env to your .gitignore:
.env
Contributing
Contributions are welcome! If you'd like to enhance this project, please:

Fork the repository.
Create a new branch for your feature or bugfix.
Submit a pull request with a detailed description of changes.
License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
OpenAI for the powerful assistant API.
Viem for the seamless wallet interaction experience.
