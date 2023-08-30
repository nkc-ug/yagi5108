import { FC, createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type StringContextType = [state: string, setState: React.Dispatch<React.SetStateAction<string>>];
type NumberContextType = [state: number, setState: React.Dispatch<React.SetStateAction<number>>];
type BackgroundUrlType = {
  skyUrl: string;
  groundUrl: string;
};

type BackgroundUrlContextType = [
  state: BackgroundUrlType,
  setState: React.Dispatch<React.SetStateAction<BackgroundUrlType>>
];

type BooleanContextType = [state: boolean, setState: React.Dispatch<React.SetStateAction<boolean>>];

// ヤギの服を保持するコンテキスト
export const GoatClothesContext = createContext<StringContextType>({} as StringContextType);
// ヤギの姿を保持するコンテキスト
export const GoatContext = createContext<StringContextType>({} as StringContextType);
// 背景（空・地面）を保持するコンテキスト
export const BackgroundContext = createContext<BackgroundUrlContextType>(
  {} as BackgroundUrlContextType
);
//モンスターを保持するコンテキスト
export const MonsterContext = createContext<StringContextType>({} as StringContextType);
//バトルのためにモンスターの属性値を保持するコンテキスト
export const MonsterNumberContext = createContext<NumberContextType>({} as NumberContextType);
// ログイン状態を保持するコンテキスト
export const LoginContext = createContext<BooleanContextType>({} as BooleanContextType);
// ユーザーのEmailを保持するコンテキスト
export const EmailContext = createContext<StringContextType>({} as StringContextType);

export const ContextProviders: FC<Props> = ({ children }) => {
  // ヤギの服を保持するステート
  const [clothesUrl, setClothesUrl] = useState('yagi');
  // ヤギの姿を保持するステート
  const [goatUrl, setGoatUrl] = useState('');
  // 背景（空・地面）を保持するステート
  const [backgroundUrl, setBackgroundUrl] = useState({
    skyUrl: '',
    groundUrl: '',
  });
  // モンスターを保持するステート
  const [monsterUrl, setMonsterUrl] = useState('');
  //monsterの属性値を保持するステート
  const [monsternumber, setMonsterNumber] = useState(0);
  // ログイン状態を保持するステート
  const [login, setLogin] = useState(false);
  // ユーザーのEmailを保持するステート
  const [email, setEmail] = useState('null');

  return (
    <GoatClothesContext.Provider value={[clothesUrl, setClothesUrl]}>
      <GoatContext.Provider value={[goatUrl, setGoatUrl]}>
        <BackgroundContext.Provider value={[backgroundUrl, setBackgroundUrl]}>
          <MonsterContext.Provider value={[monsterUrl, setMonsterUrl]}>
            <MonsterNumberContext.Provider value={[monsternumber, setMonsterNumber]}>
              <LoginContext.Provider value={[login, setLogin]}>
               <EmailContext.Provider value={[email, setEmail]}>
                 {children}
                </EmailContext.Provider>
              </LoginContext.Provider>
            </MonsterNumberContext.Provider>
          </MonsterContext.Provider>
        </BackgroundContext.Provider>
      </GoatContext.Provider>
    </GoatClothesContext.Provider>
  );
};
