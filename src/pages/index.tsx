import type { NextPage } from "next";
import { Carousel } from "antd";
import { useState, useEffect } from "react";
import { getBannerListApi } from "../request/api";
const Index: NextPage = () => {
  const getBannerListFunc = async () => {
    const [err, res]: [err:requsesType | null,res:requsesType | null ]= await getBannerListApi({});
    console.log(res);
  };
  useEffect(() => {
    getBannerListFunc();
  });
  const [swiperList, setSwiperList]: [
    swiperList: string[],
    setSwiperList: any
  ] = useState([
    "https://img.youpin.mi-img.com/ferriswheel/4bbc32cf_1fe0_45aa_a48f_74b9282edf9f.jpeg?w=2560&h=1080",
    "https://img.youpin.mi-img.com/ferriswheel/f9e992cd_8a4b_4c54_81b8_a1e11ce05c06.jpeg@base@tag=imgScale&F=webp&h=1080&q=90&w=2560",
    "https://wds-service-1258344699.file.myqcloud.com/20/15204/png/16771155064393955ae135ef021ce.png?version=1677115510",
  ]);

  const [advantageList, setAdvantageList]: [
    advantageList: { img: string; title: string; text: string }[],
    setAdvantageList: any
  ] = useState([
    {
      img: "https://wds-service-1258344699.file.myqcloud.com/20/15204/jpg/167763868973736141f114521ec4b.jpg?version=1677638692",
      title: "品质服务",
      text: "高品质服务项目，满足您的按摩需求，包含休闲按摩、疼痛理疗、女性保养等三大类",
    },
    {
      img: "https://wds-service-1258344699.file.myqcloud.com/20/15204/jpeg/1677641259156b6f04f8dd40d7d90.jpeg?version=0",
      title: "专业技师",
      text: "资深专业理疗师，缓解您的疼痛不适，专业资质认证，正规安全更方便",
    },
    {
      img: "https://wds-service-1258344699.file.myqcloud.com/20/15204/png/16776393239142afb9ab9dc38928c.png?version=0",
      title: "一键下单",
      text: "专业线上平台，一键预约，轻松上门，享受超5星按摩推拿服务，解放时间，简单方便",
    },
  ]);

  const [featuredList, setFeaturedList]: [
    featuredList: { img: string; title: string; text: string }[],
    setFeaturedList: any
  ] = useState([
    {
      img: "https://wds-service-1258344699.file.myqcloud.com/20/15204/jpg/1677825157440504f583cda746597.jpg?version=1677825159",
      title: "休闲按摩",
      text: "休闲养生 适用于亚健康人群",
    },
    {
      img: "https://wds-service-1258344699.file.myqcloud.com/20/15204/png/16777195567354152cb9fd569ac28.png?version=1677719558",
      title: "康养推拿",
      text: "疼痛按摩 适用于局部疼痛活动受限人群",
    },
    {
      img: "https://wds-service-1258344699.file.myqcloud.com/20/15204/png/1677722438835ea722525a91bc110.png?version=1677722440",
      title: "女性保养",
      text: "女性专属 纤体瘦身抗衰",
    },
  ]);
  return (
    <div>
      <Carousel autoplay>
        {swiperList.map((item, index) => {
          return (
            <div className="w-full h-[530px]" key={index}>
              <img className="w-full h-[530px]" src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
      <div className="w-full flex items-center justify-center bg-white	">
        <div className="w-[1200px]">
          <div>
            <div className="text-center	text-4xl text-[#4a4a4a] py-7">
              我们的优势
            </div>
            <div className="text-center	text-xl">
              24小时 · 专业正规 · 不收小费
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
            {advantageList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="shadow-[0_2px_10px_0_rgb(25_93_194_/_7%)]
bg-white border border-[#e9eaf3] rounded-[30px] w-auto inline-block transition-all duration-300 hover:scale-105 group !flex !flex-col justify-between p-[20px_36px]"
                >
                  <img className="rounded-full" src={item.img} alt="" />
                  <div className="text-[#ff7f00] font-bold text-2xl	py-3 text-center">
                    {item.title}
                  </div>
                  <div className="text-[#999999] text-lg text-center	">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-center	text-4xl text-[#4a4a4a] py-7">
              精选服务
            </div>
            <div className="text-center	text-xl">
              休闲养生 · 疼痛按摩 · 女性专享，全人群，全需求
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-10">
            {featuredList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="shadow-[0_2px_10px_0_rgb(25_93_194_/_7%)]
bg-white border border-[#e9eaf3] rounded-[30px] w-auto inline-block transition-all duration-300 hover:scale-105 group !flex !flex-col justify-between p-[20px_36px]"
                >
                  <img src={item.img} alt="" />
                  <div className="text-[#ff7f00] font-bold text-2xl	py-3 text-center">
                    {item.title}
                  </div>
                  <div className="text-[#999999] text-lg text-center	">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-center	text-4xl text-[#4a4a4a] py-7">
              项目详情
            </div>
            <div className="text-center	text-xl">风格清晰，流畅</div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://wds-service-1258344699.file.myqcloud.com/20/15204/png/1677837449553a3fa921a763afb62.png?version=0"
          alt=""
        />
      </div>
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
    </div>
  );
};

export default Index;
