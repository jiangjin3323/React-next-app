import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import Link from "next/link";
import { getheaderListApi } from "../request/api";
const { Header, Content } = Layout;
export default function App({ Component, pageProps }: AppProps) {
  const headerListFunc = async () => {
    const [err, res]: any = await getheaderListApi();
    if (err !== null) return;
    setHeaderList(res.data);
  };

  const [headerList, setHeaderList]: [
    headerList: { title: string; linkUrl: string; id: number }[],
    setHeaderList: any
  ] = useState([]);
  useEffect(() => {
    headerListFunc();
  }, []);

  return (
    <>
      <Layout>
        <Header className="bg-white w-full flex items-center justify-center	">
          <div className="flex items-center	w-[1200px] h-20	justify-between">
            <div className="flex items-center justify-center">
              <img
                className="w-11 h-11"
                src="https://cdn.cnbj1.fds.api.mi-img.com/mi.com-assets/shop/img/logo-mi2.png"
                alt="小米"
              />
            </div>
            <div className="flex items-center justify-between	">
              {headerList.map((item) => {
                return (
                  <Link href={item.linkUrl} key={item.id}>
                    <div className="flex items-center justify-center w-40 h-11">
                      {item.title}
                    </div>
                  </Link>
                );
              })}
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
