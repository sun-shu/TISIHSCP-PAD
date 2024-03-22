import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import classNames from 'classnames';
import { history, Link, NavLink, Outlet } from 'umi';
import styles from './index.less';
import { Image } from 'antd';
import Logo from '@/assets/logo.png';
import { useModel } from '@@/exports';

export default function Layout() {
  const px2rem = px2remTransformer({
    rootValue: 16, // 32px = 1rem; @default 16
    precision: 10,
  });

  const isActive = (match, location) => {
    return location.path.includes('elder');
  };

  const { initialState = {}, loading, error, refresh, setInitialState } =
    useModel('@@initialState');

  const { currentUser = {} } = initialState;

  return (
    <StyleProvider transformers={[px2rem]}>
      <div
        className={classNames('bg-gray-F6 pt-[50px] min-h-screen h-screen overscroll-y-auto')}
      >
        <div
          className={classNames(styles.navs, 'bg-white fixed h-[50px] top-0 z-50 w-full flex justify-start items-center px-[24px] gap-[24px]')}>
          <div
            onClick={() => {
              history.push('/evaluate/task-list');
            }}
          >
            {/*<img src={Logo} className="h-[40px]" />*/}
          </div>
          <ul className="flex flex-1 justify-start text-lg mb-0">
            <li>
              <NavLink
                strict
                to="/evaluate"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary hover:text-primary'
                    : 'hover:text-primary'
                }
              >
                评估管理
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/elder"
                strict
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary hover:text-primary'
                    : 'hover:text-primary'
                }
                isActive={isActive}
              >
                长者管理
              </NavLink>
            </li>
          </ul>

          <Link to="/user-info">
            <div className="flex items-center py-1 px-2 rounded bg-[#00adb8]">
              <div className=" text-white  text-sm leading-5">评估师：</div>
              <div className=" text-white  text-sm leading-5">{currentUser.actName}</div>
            </div>
          </Link>
        </div>

        <div className="bg-gray-F6" style={{
          minHeight: 'calc(100vh - 50px)',
        }}>

          <Outlet />

        </div>
      </div>
    </StyleProvider>
  );
}
