import Head from "next/head";
import Quotes, { getServerSideProps, QuotesProps } from "@/components/quote";
import {InferGetServerSidePropsType} from 'next'





//ANCHOR //LOGIC
export default function Home({ quotes }: QuotesProps) {
  //ANCHOR //รีเทิร์น HTML
  return (
    <>
      <Head>
        <title>BEHEMOThread</title>
        <meta
          name="description"
          content="โปรเจ็คที่ต่อยอดมาจาก Instagram-App"
        />
      </Head>

      <div className="textext container">
      <Quotes quotes={quotes} />
        <div className="row">
          <div className="col-3 mt-2">
            <h1 className="text-indigo-500">สวัสดีครับ ที่นี่คือ Home Page เดี๋ยวจะมีคอมโพเน้นมาแปะนะครับ</h1>
          </div>
          
          <div className="col-3">
            <h1 className="text-indigo-200">สวัสดีครับบบบบ</h1>
          </div>
        </div>
      </div>
    </>
  );
}
