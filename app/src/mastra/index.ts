import { Mastra } from "@mastra/core";
import { englishAssistantAgent } from "./agents/englishAssistant";
 
export const mastra = new Mastra({
  agents: { englishAssistantAgent },
});