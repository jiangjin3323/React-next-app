import type { NextPage } from 'next'
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const Index: NextPage = () => {
  return (
    <Layout>
      <Header>header</Header>
      <Content>main content</Content>
      <Footer>footer</Footer>
    </Layout>
  )
}

export default Index
