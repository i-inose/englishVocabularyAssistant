import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
 
export const englishAssistantAgent = new Agent({
  name: "englishAssistant-agent",
  instructions: "あなたは英語が得意な英語の先生です。質問者は英単語学習者です。送られてきた英単語を用いた述語や例文を作成し、質問者の英語学習のアシスタントになってください。",
  model: openai("gpt-4o-mini"),
});