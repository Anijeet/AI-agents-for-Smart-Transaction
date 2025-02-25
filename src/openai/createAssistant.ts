import OpenAI from "openai";
import { Assistant } from "openai/resources/beta/assistants.mjs";
import { tools } from "../tools/allTools";

export async function createAssistant(client: OpenAI) : Promise<Assistant>{
    return await client.beta.assistants.create({
        model: "gpt-4o-mini",
        name: "My Assistant",
        instructions:`Hey you have the control of your wallet`,
        tools: Object.values(tools).map(tool=>tool.definition)
    });
}