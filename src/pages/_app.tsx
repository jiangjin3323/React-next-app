import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "antd";
import Link from "next/link";
const { Header, Content } = Layout;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Header className="bg-white w-full flex items-center justify-center	">
            <div className="flex items-center	w-[1200px] h-20	justify-between">
                <div className="flex items-center justify-center">
                   <img className="w-40 h-11" src="http://www.sl66.cn/img/logo.png?1677837484" alt="美优到家" />
                </div>
                <div className="flex items-center justify-between	">
                  <Link href={'/'}>
                    <div className="flex items-center justify-center w-40 h-11">首页</div>
                  </Link>
                  <Link href={'/'}>
                    <div className="flex items-center justify-center w-40 h-11 text-[#17233d]">产品服务</div>
                  </Link>
                  <Link href={'/'}>
                    <div className="flex items-center justify-center w-40 h-11 text-[#17233d]">技师展示</div>
                  </Link>
                  <Link href={'/'}>
                    <div className="flex items-center justify-center w-40 h-11 text-[#17233d]">关于我们</div>
                  </Link>
                  <Link href={'/'}>
                    <div className="flex items-center justify-center w-40 h-11 text-[#17233d]">合作加盟</div>
                  </Link>
                </div>
            </div>
        </Header>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </>
  );
}
