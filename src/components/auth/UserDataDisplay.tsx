import { FC, useContext, useEffect, useState } from 'react';
import { GetUserData } from './GetUserData';
import { UserDataType } from '../../types/UserDataType';
import { IsLoginContext } from '../../provider/ContextProviders';
import { EmailContext } from '../../provider/ContextProviders';

export const UserDataDisplay: FC = () => {
  const [isLogin] = useContext(IsLoginContext);
  const [email] = useContext(EmailContext);
  const [userData, setUserData] = useState<UserDataType>();

  useEffect(() => {
    // useEffect自体ではasyncの関数を受け取れないので内部で関数を定義して呼び出す。
    const access_db = async () => {
      const response = await GetUserData(email);
      setUserData(response);
    };
    access_db();
  }, [isLogin]);

  return isLogin ? (
    <div>
      <h2>ゆーざーでーた</h2>
      <div>
        <h3>ゆーざーID</h3>
        <h4>{email}</h4>
      </div>
      <div>
        <h3>ゆーざーねーむ</h3>
        <h4>{userData?.userName}</h4>
      </div>
      <div>
        <h3>ことばをたべさせたかいすう</h3>
        <h4>{String(userData?.totalEatCount)}かい</h4>
      </div>
      <div>
        <h3>バトルでかったかいすう</h3>
        <h4>{String(userData?.battleWinCount)}かい</h4>
      </div>
    </div>
  ) : null;
};
