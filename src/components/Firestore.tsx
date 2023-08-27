import { Button, TextField } from '@mui/material';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { FC, useState } from 'react';
import { db } from '../lib/firebase';

export const Firestore: FC = () => {
  //   フォームの中身を管理するための変数
  const [name, setName] = useState('');
  // DBの返り値を管理する変数
  const [users, setUsers] = useState('DBの返り値');
  // 読み取り用の変数
  const [read, setRead] = useState('取得してきた文字列');

  // フォームのハンドリング
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // データの追加
  const handleAddDoc = async () => {
    const docRef = await addDoc(collection(db, 'words'), {
      wordString: name,
    });
    setUsers(docRef.id);
    setName('');
  };

  const getDoc = async () => {
    const querySnapshot = await getDocs(collection(db, 'words'));
    querySnapshot.forEach((doc) => {
      if (doc.id === users) {
        const word = doc.data();
        // setRead(word);
      }
    });
  };

  return (
    <div>
      <h1>Firestore</h1>
      <h1>{users}</h1>
      <TextField value={name} onChange={handleChange} />
      <Button
        variant="contained"
        onClick={() => {
          handleAddDoc();
        }}
      >
        データを追加する
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          getDoc();
        }}
      >
        データを取得する
      </Button>
      <h1>{read}</h1>
    </div>
  );
};
