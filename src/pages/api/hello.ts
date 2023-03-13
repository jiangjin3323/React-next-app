// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
const url: string = "mongodb://localhost:27017";
const client: any = new MongoClient(url);
async function run() {
  try {
    //初始化
    await client.connect();
    // Establish and verify connection
    //连接数据库
    const res:any = await client.db("admin");
    //查询users表
    const List:any = await res.collection("users").find({}).toArray()
    console.log(List,' users表');
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
