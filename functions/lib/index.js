"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("firebase-functions/v2/https");
const openai_1 = require("openai");
const params_1 = require("firebase-functions/params");
const apiKey = (0, params_1.defineString)("OPENAI_API_KEY").value();
exports.test = (0, https_1.onRequest)({ cors: [/firebase\.com$/, "flutter.com"] }, (req, res) => {
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
    const returnItem = {
        happy: Math.floor(Math.random() * 11),
        anger: Math.floor(Math.random() * 11),
        sad: Math.floor(Math.random() * 11),
        enjoyable: Math.floor(Math.random() * 11),
    };
    res.status(200).send(returnItem);
});
exports.callgpt = (0, https_1.onRequest)({ cors: [/firebase\.com$/, "flutter.com"] }, async (req, res) => {
    var _a;
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
        const config = new openai_1.Configuration({
            apiKey: apiKey,
        });
        //params
        const params = {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: requestContext }],
        };
        //OpenAI
        const aiInstance = new openai_1.OpenAIApi(config);
        const openAiRes = await aiInstance.createChatCompletion(params);
        const aiResText = (_a = openAiRes.data.choices[0].message) === null || _a === void 0 ? void 0 : _a.content;
        if (!aiResText) {
            res.status(500).send("GPTError");
            return;
        }
        const aiResObj = JSON.parse(aiResText);
        res.status(200).send(aiResObj);
        return;
    }
    catch (e) {
        res.status(500).send(e);
        return;
    }
});
//# sourceMappingURL=index.js.map