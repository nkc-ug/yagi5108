# ディレクトリ構成

## ツリー表示

```
.
├── .git
├── .github
│   └── workflows
│       ├── ci.yml
│       └── firebase-hosting-merge.yml
├── doc
│   ├── api.md
│   └── composition.md
├── functions
│   ├── lib
│   │   ├── index.js
│   │   └── index.js.map
│   ├── src
│   │   └── index.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── public
│   ├── favicon.ico
│   └── ogp.png
├── src
│   ├── api
│   │   ├── addWordEmotions.ts
│   │   ├── getEmotionApi.ts
│   │   └── getWordEmotions.ts
│   ├── assets
│   ├── Audio
│   ├── components
│   │   ├── auth
│   │   │   ├── update
│   │   │   │   ├── BattleWinCount.ts
│   │   │   │   └── TotalEatCount.ts
│   │   │   ├── AddUserData.ts
│   │   │   ├── AuthGoogleSigninPopup.ts
│   │   │   ├── GetUserData.ts
│   │   │   ├── LoginButton.tsx
│   │   │   ├── SetupUserData.ts
│   │   │   ├── UpdateUserData.ts
│   │   │   └── UserDataDisplay.tsx
│   │   ├── battle
│   │   │   ├── BattleAction.tsx
│   │   │   ├── BattleForm.tsx
│   │   │   ├── BattleNavbar.tsx
│   │   │   ├── BattleNavBarcon.tsx
│   │   │   ├── BattleResult.tsx
│   │   │   └── MonsterModal.tsx
│   │   ├── common
│   │   │   ├── CircleProgressCon.tsx
│   │   │   └── VerticalDivider.tsx
│   │   ├── costume
│   │   │   ├── BgImageBox.tsx
│   │   │   ├── ChangeBgImageBox.tsx
│   │   │   ├── ChangeCostumeBox.tsx
│   │   │   ├── CostumeBox.tsx
│   │   │   ├── CostumeHeader.tsx
│   │   │   ├── CostumeNavbar.tsx
│   │   │   └── CostumeNavBarcon.tsx
│   │   ├── navbar
│   │   │   ├── Bgm.tsx
│   │   │   ├── NavBar.tsx
│   │   │   └── NavBarCon.tsx
│   │   ├── settings
│   │   │   ├── SettingsNavbar.tsx
│   │   │   └── SettingsNavBarCon.tsx
│   │   ├── trophy
│   │   │   ├── RequestLogin.tsx
│   │   │   └── TrophyList.tsx
│   │   ├── Branch.tsx
│   │   ├── Eat.tsx
│   │   ├── EvolutionPopup.tsx
│   │   ├── EvolutionWalk.tsx
│   │   ├── Form.tsx
│   │   ├── NormalWalk.tsx
│   │   ├── PageContainer.tsx
│   │   ├── Pulse.tsx
│   │   ├── ShowNewGrassModal.tsx
│   │   ├── Tutorial.tsx
│   │   └── TwitterShare.ts
│   ├── const
│   │   └── eatLimit.ts
│   ├── hooks
│   │   ├── useDiscloser.ts
│   │   └── useInput.ts
│   ├── lib
│   │   ├── analytics.ts
│   │   ├── AuthGoogleProviderCreate.ts
│   │   ├── AuthGoogleProviderScopes.ts
│   │   ├── firebase.ts
│   │   └── firestore.ts
│   ├── pages
│   │   ├── AppView.tsx
│   │   ├── BattleView.tsx
│   │   ├── CostumePage.tsx
│   │   ├── MonsterView.tsx
│   │   ├── SettingsView.tsx
│   │   └── TrophyPage.tsx
│   ├── provider
│   │   ├── ContextProviders.tsx
│   │   └── Providers.tsx
│   ├── routes
│   │   └── Routers.tsx
│   ├── styles
│   │   ├── modalStyle.ts
│   │   ├── MonsterModalStyle.ts
│   │   └── textFieldStyle.ts
│   ├── theme
│   │   ├── palette.ts
│   │   ├── theme.ts
│   │   └── typography.ts
│   ├── types
│   │   ├── EmotionDataType.ts
│   │   ├── import-image.d.ts
│   │   └── UserDataType.ts
│   ├── util
│   │   ├── convertBackGroundImg.ts
│   │   ├── convertCostume.ts
│   │   ├── convertGoat.ts
│   │   └── convertMonster.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.template
├── .eslintrc.cjs
├── .firebaserc
├── .gitignore
├── .prettierrc
├── eslint-results.sarif
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## ディレクトリの説明

- `src/components`: React コンポーネントを格納するディレクトリ
- `src/pages`: 各ページのコンポーネントを格納するディレクトリ
- `src/routes`: React ルーティングを格納するディレクトリ
