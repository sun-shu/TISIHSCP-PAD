import NotFoundImg from '@/assets/404.png';
import { Image } from 'antd';

const NotFoundPage = () => {
  return (
    <div className="w-full flex-col flex-center gap-[50px] mt-[30%]">
      <Image src={NotFoundImg} width={200} alt="404" preview={false} />
      <h1>404 Page Not Found -- 点击LOGO返回主页</h1>
    </div>
  );
};

export default NotFoundPage;