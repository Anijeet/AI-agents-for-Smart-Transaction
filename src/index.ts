import OpenAI from "openai"
import dotenv from "dotenv";

dotenv.config(); 
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { performRun } from "./openai/performRun";

async function main(){
    const client = new OpenAI();
    const message="send 0 ETH to 0x9a77283A161BAB4777625327A389b9e74782839a";

    const assistant = await createAssistant(client);
    const thread = await createThread(client,message)
    const run = await createRun(client,thread,assistant.id)
    const result = await performRun(run, client, thread);
    console.log(result)
}

main();