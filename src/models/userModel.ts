import userAPI from '@/api/sys/user';
import useAccountSecret from '@/hooks/sys/useAccountSecret';
import { useCookieState } from 'ahooks';
import { flushSync } from 'react-dom';
import { history, useModel, useRequest } from 'umi';

export default function userModel() {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { encrypt } = useAccountSecret();

  const [, setToken] = useCookieState('TOKEN', {
    defaultValue: '',
    path: '/',
    expires: undefined,
  });

  const getUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const login = async (loginData) => {
    const { data = {} } = await userAPI.login({
      ...loginData,
      password: encrypt(loginData.password),
    });

    setToken(data?.accessToken);

    await getUserInfo();

    const urlParams = new URL(window.location.href).searchParams;
    history.push(urlParams.get('redirect') || '/');
  };

  const loginOut = async () => {
    await userAPI.loginExit();
    setToken('');
    setInitialState((s) => ({
      ...s,
      currentUser: {},
    }));
    history.push('/login');
  };

  return {
    login,
    getUserInfo,
    loginOut,
  };
}
