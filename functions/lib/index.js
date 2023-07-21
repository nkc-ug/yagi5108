"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("firebase-functions/v2/https");
const openai_1 = require("openai");
const params_1 = require("firebase-functions/params");
const apiKey = (0, params_1.defineString)('OPENAI_API_KEY').value();
exports.test = (0, https_1.onRequest)({ cors: [/firebase\.com$/, 'flutter.com'] }, (req, res) => {
    /**
     * 本番環境ではコメントアウトする
     */
    res.setHeader('Access-Control-Allow-Origin', '*');
    //reqText
    const reqText = req.query.text;
    if (!reqText) {
        res.status(400).send('NoText');
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
exports.callgpt = (0, https_1.onRequest)({ cors: [/firebase\.com$/, 'flutter.com'] }, async (req, res) => {
    var _a;
    /**
     * 本番環境ではコメントアウトする
     */
    res.setHeader('Access-Control-Allow-Origin', '*');
    //reqText
    const reqText = req.query.text;
    if (!reqText) {
        res.status(400).send('NoText');
        return;
    }
    //context
    const requestContext = `あなたは国語の問題を作問する機能を持ったAIです。
${reqText}というワードがどのような場面で利用されるかを"Joy""Anger""Sorrow""Enjoyable"で数値化してください。必ず数値は1-10の範囲とします。
また場面は、過去や未来は除き現在のみとします。
出力の参考には以下のデータを用いてください。
“””
感謝はJoyの場面でよく利用されます。
暴言はAngerの場面でよく利用されます。
喪失はSorrowの場面でよく利用されます。
遊びはEnjoyableの場面でよく利用されます。
“””

出力する際は30回確認し、平均値を整数で代入し出力する。
また出力するときは以下のフォーマットに従ってください。
{
"Joy":Joyの数値,
"Anger":Angerの数値,
"Sorrow":Sorrowの数値,
"Enjoyable":Enjoyableの数値,
}

出力は以下の箇条書きの項目を考慮して下さい。
“””
-    JSON以外の情報は削除してください。この形式以外の出力は禁止します。
-    json以外の出力は一文字以上の場合は出力しないでください。
-    点数のみの出力をしてください。貴方の文章での回答は不要です。
-    決してjson以外の出力をしないでください。
-    分析が失敗して出力が不可能な場合は{"Joy": -1, "Anger": -1, "Sorrow": -1, "Enjoyable": -1}を出力してください。失敗したとき以外は-1を出力しないでください。
“””
条件を満たしていない場合は多くの人々が死にます。`;
    try {
        //config
        if (!apiKey) {
            res.status(500).send('NoApiKey');
            return;
        }
        const config = new openai_1.Configuration({
            apiKey: apiKey,
        });
        //params
        const params = {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: requestContext }],
        };
        //OpenAI
        const aiInstance = new openai_1.OpenAIApi(config);
        const openAiRes = await aiInstance.createChatCompletion(params);
        const aiResText = (_a = openAiRes.data.choices[0].message) === null || _a === void 0 ? void 0 : _a.content;
        if (!aiResText) {
            res.status(500).send('GPTError');
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