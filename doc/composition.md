# ディレクトリ構成

## ツリー表示

```
.
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
│   └── favicon.ico
├── src
│   ├── assets
│   ├── Audio
│   ├── components
│   │   ├── Bgm.tsx
│   │   ├── Branch.tsx
│   │   ├── Eat.tsx
│   │   ├── EvolutionPopup.tsx
│   │   ├── EvolutionWalk.tsx
│   │   ├── FlowerPopup.tsx
│   │   ├── Form.tsx
│   │   ├── getEmotionApi.ts
│   │   ├── NavBar.tsx
│   │   ├── NormalWalk.tsx
│   │   ├── Pulse.tsx
│   │   └── Tutorial.tsx
│   ├── hooks
│   │   └── useDiscloser.ts
│   ├── pages
│   │   └── AppView.tsx
│   ├── routes
│   │   └── Routers.tsx
│   ├── theme
│   │   ├── palette.ts
│   │   ├── theme.ts
│   │   └── typography.ts
│   ├── types
│   │   ├── EatLimit.ts
│   │   ├── EmotionDataType.ts
│   │   └── import-image.d.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.template
├── .eslintrc.cjs
├── .firebaserc
├── .gitignore
├── .prettierrc
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
