import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import classNames from 'classnames';
import { history, Link, NavLink, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  const px2rem = px2remTransformer({
    rootValue: 16, // 32px = 1rem; @default 16
    precision: 10,
  });

  const isActive = (match, location) => {
    console.log('match', match, location);

    return location.path.includes('elder');
  };
  return (
    <StyleProvider transformers={[px2rem]}>
      <div
        className={classNames(styles.navs, 'bg-gray-F6 pt-[50px] min-h-screen')}
      >
        <div className="bg-white fixed h-[50px] top-0 z-50 w-full flex justify-start items-center px-[24px] gap-[24px]">
          <div
            onClick={() => {
              history.push('/evaluate/task-list');
            }}
          >
            LOGO区域
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
              <div className=" text-white  text-sm leading-5">郑婷雅</div>
            </div>
          </Link>
        </div>

        <div className="">
          <Outlet />
        </div>
      </div>
    </StyleProvider>
  );
}
