import type { NextPage } from "next";
import { Carousel, message } from "antd";
import { useState, useEffect } from "react";
import { getBannerListApi, getProductListApi } from "../request/api";
const Index: NextPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  //轮播
  const [swiperList, setSwiperList]: [
    swiperList: { url: string; id: number }[],
    setSwiperList: any
  ] = useState([]);

  //产品-小米
  const [productList, setProductList]: [
    productList: { img: string; name: string; title: string; id: number }[],
    setAdvantageList: any
  ] = useState([]);

  //产品-红米
  const [RedmiProductList, setRedmiProductList]: [
    productList: { img: string; name: string; title: string; id: number }[],
    setAdvantageList: any
  ] = useState([]);

  //轮播函数
  const getBannerListFunc = async () => {
    const [err, res]: any = await getBannerListApi();
    if (err !== null) {
      messageApi.error(err.msg);
      return;
    }
    setSwiperList(res.data);
  };

  //产品函数-小米
  const getProductListFunc = async () => {
    const [err, res]: any = await getProductListApi({ type: "xiaomi" });
    if (err !== null) {
      messageApi.error(err.msg);
      return;
    }
    setProductList(res.data);
  };

  //产品函数-红米
  const getRedmiProductListFunc = async () => {
    const [err, res]: any = await getProductListApi({ type: "Redmi" });
    if (err !== null) {
      messageApi.error(err.msg);
      return;
    }
    setRedmiProductList(res.data);
  };

  useEffect(() => {
    getBannerListFunc();
    getProductListFunc();
    getRedmiProductListFunc();
  }, []);

  return (
    <div>
      {contextHolder}
      <Carousel autoplay>
        {swiperList.map((item) => {
          return (
            <div className="w-full h-[530px]" key={item.id}>
              <img className="w-full h-[530px]" src={item.url} alt="" />
            </div>
          );
        })}
      </Carousel>
      <div className="w-full flex items-center justify-center bg-white	">
        <div className="w-[1200px]">
          <div>
            <div className="text-center	text-4xl text-[#4a4a4a] py-7">
              小米系列
            </div>
            <div className="text-center	text-xl">
              性能旗舰，徕卡原生双画质，2K OLED 屏幕
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
            {productList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="shadow-[0_2px_10px_0_rgb(25_93_194_/_7%)]
bg-white border border-[#e9eaf3] rounded-[30px] w-auto inline-block transition-all duration-300 hover:scale-105 group !flex !flex-col justify-between p-[20px_36px]"
                >
                  <img className="rounded-full" src={item.img} alt="" />
                  <div className="text-[#ff7f00] font-bold text-2xl	py-3 text-center">
                    {item.name}
                  </div>
                  <div className="text-[#999999] text-lg text-center	">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-center	text-4xl text-[#4a4a4a] py-7">
              红米系列
            </div>
            <div className="text-center	text-xl">
              第二代骁龙8， VC 液冷散热
              ，120W神仙秒充+30W无线秒充，5000mAh大电量
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
            {RedmiProductList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="shadow-[0_2px_10px_0_rgb(25_93_194_/_7%)]
bg-white border border-[#e9eaf3] rounded-[30px] w-auto inline-block transition-all duration-300 hover:scale-105 group !flex !flex-col justify-between p-[20px_36px]"
                >
                  <img src={item.img} alt="" />
                  <div className="text-[#ff7f00] font-bold text-2xl	py-3 text-center">
                    {item.name}
                  </div>
                  <div className="text-[#999999] text-lg text-center	">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div>
            <div className="text-center	text-4xl text-[#4a4a4a] py-7">
              项目详情
            </div>
            <div className="text-center	text-xl">风格清晰，流畅</div>
          </div> */}
        </div>
      </div>
      <div className="pt-10 bg-white	">
        <img
          className="w-full h-[810px]"
          src="https://img.youpin.mi-img.com/ferriswheel/482d5fa5_1a5f_4649_8d63_271a9ebd8f1b.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560"
          alt=""
        />
      </div>
    </div>
  );
};

export default Index;
