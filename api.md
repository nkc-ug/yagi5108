## ChatGPTRapperAPI

<br>

# test API

### Req

```
GET https://test-f6bkalktuq-uc.a.run.app?text={text}
```

### Res

#### 成功時

```
200 OK
```

| param     | type   | description |
| --------- | ------ | ----------- |
| happy     | string | 喜びの値    |
| angry     | string | 怒りの値    |
| sad       | string | 悲しみの値  |
| enjoyable | string | 楽しい      |

処理できない場合には -1 を載せて返す

```js
{
    "happy": string,
    "angry": string,
    "sad": string,
    "enjoyable": string
}
```

#### Text のパラメータが空

```
400 NoText
```

<br>
<br>
<br>

# main API

### Req

```
https://callgpt-f6bkalktuq-uc.a.run.app?text={text}
```

### Res

#### 成功時

```
200 OK
```

| param     | type   | description |
| --------- | ------ | ----------- |
| happy     | string | 喜びの値    |
| angry     | string | 怒りの値    |
| sad       | string | 悲しみの値  |
| enjoyable | string | 楽しい      |

処理できない場合には -1 を載せて返す

```js
{
    "happy": string,
    "angry": string,
    "sad": string,
    "enjoyable": string
}
```

#### Text のパラメータが空

    ```
    400 NoText
    ```

#### APIKEY が取得できない

    ```
    400 NoApiKey
    ```

#### GPT レスポンスが異常

    ```
    400 GPTError
    ```

#### サーバーエラー

    ```
    500 ErrorText
    ```
