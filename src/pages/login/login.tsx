import type { NextPage } from 'next'
import { Button } from 'antd';
const Login: NextPage = () => {
    return (
        <div>
            <div className="mb-5 flex items-center justify-center">
                <img src="https://www.ichati.cn/ichati.png" alt="logo" />
            </div>
            <div className="mb-2 text-center">
                <div className="mb-2 text-2xl font-bold text-center">欢迎来到 IChatI</div>
                <div className="mb-1 text-sm text-center text-dashboard-neutral-600">
                    <div>一个将 10 亿人连接到 AI 与 Web3 的网站</div>
                    <div className="mb-4 text-center">你可以使用你的 Web3 钱包账户，如果没有的话，可以选择注册一个钱包账户</div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Button className='w-96 h-14 rounded-full bg-blue-500' type="primary">登录</Button>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <Button className='w-96 h-14 rounded-full' >注册</Button>
            </div>
        </div>
    )
}

export default Login
