import { onRequest } from "firebase-functions/v2/https";
import { Configuration, OpenAIApi, CreateChatCompletionRequest } from "openai";

import { defineString } from "firebase-functions/params";
const apiKey = defineString("OPENAI_API_KEY").value();

type returnType = {
  happy: number;
  anger: number;
  sad: number;
  enjoyable: number;
};

exports.test = onRequest({ cors: [/firebase\.com$/, "flutter.com"] }, (req, res) => {
  /**
   * 本番環境ではコメントアウトする
   */
  res.setHeader("Access-Control-Allow-Origin", "*");

  //reqText
  const reqText = req.query.text;
  if (!reqText) {
    res.status(400).send("NoText");
    return;
  }

  const returnItem: returnType = {
    happy: Math.floor(Math.random() * 11),
    anger: Math.floor(Math.random() * 11),
    sad: Math.floor(Math.random() * 11),
    enjoyable: Math.floor(Math.random() * 11),
  };

  res.status(200).send(returnItem);
});

exports.callgpt = onRequest({ cors: [/firebase\.com$/, "flutter.com"] }, async (req, res) => {
  /**
   * 本番環境ではコメントアウトする
   */
  res.setHeader("Access-Control-Allow-Origin", "*");

  //reqText
  const reqText = req.query.text;
  if (!reqText) {
    res.status(400).send("NoText");
    return;
  }

  //context
  const requestContext = `${reqText}に含まれる"happy""anger""sad""enjoyable"を採点し、{"happy": 数値, "anger": 数値, "sad": 数値, "enjoyable": 数値}という形式で出力してください。必ずいずれかの数値は1-10の範囲の値にして下さい。この形式以外の出力は禁止します。json以外の出力は一文字以上の場合は出力しないでください。点数のみの出力をしてください。貴方の文章での回答は不要です。決してjson以外の出力をしないでください。jsonのみの出力をしてください。出力が無理な場合は{"happy": -1, "anger": -1, "sad": -1, "enjoyable": -1}を出力してください。
  `;

  try {
    //config
    if (!apiKey) {
      res.status(500).send("NoApiKey");
      return;
    }
    const config = new Configuration({
      apiKey: apiKey,
    });

    //params
    const params: CreateChatCompletionRequest = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: requestContext }],
    };

    //OpenAI
    const aiInstance = new OpenAIApi(config);
    const openAiRes = await aiInstance.createChatCompletion(params);
    const aiResText = openAiRes.data.choices[0].message?.content;

    if (!aiResText) {
      res.status(500).send("GPTError");
      return;
    }

    const aiResObj = JSON.parse(aiResText);
    res.status(200).send(aiResObj);
    return;
  } catch (e) {
    res.status(500).send(e);
    return;
  }
});
