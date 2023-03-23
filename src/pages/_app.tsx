import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import Link from "next/link";
import { getheaderListApi } from "../request/api";
const { Header, Content, Footer } = Layout;
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
        <Footer style={ {padding:'0'}}>
          <footer className="bg-white text-black py-8">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Column 1 */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Links</h4>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
                {/* Column 2 */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Menu</h4>
                  <ul>
                    <li>
                      <a href="/menu">View Menu</a>
                    </li>
                    <li>
                      <a href="/menu#lunch">Lunch</a>
                    </li>
                    <li>
                      <a href="/menu#dinner">Dinner</a>
                    </li>
                    <li>
                      <a href="/menu#drinks">Drinks</a>
                    </li>
                  </ul>
                </div>
                {/* Column 3 */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Address</h4>
                  <p>1234 Main St.</p>
                  <p>Anytown, USA 12345</p>
                </div>
                {/* Column 4 */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                  <ul>
                    <li>
                      <a href="https://twitter.com/">Twitter</a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">Facebook</a>
                    </li>
                    <li>
                      <a href="https://instagram.com/">Instagram</a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p>
                  &copy; {new Date().getFullYear()} Your Website. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </footer>
        </Footer>
      </Layout>
    </>
  );
}
