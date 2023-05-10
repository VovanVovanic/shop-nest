import Head from "next/head";
import { FC, PropsWithChildren } from "react";

export interface ISeo{
 title?: string;
 description?: string;
 image?: string;
 type?: string
}
const Meta: FC<PropsWithChildren<ISeo>> = ({ type = "website", description, children, image }) => {
 return (
  <>
   <Head>
    <title itemProp="headline"></title>
    {
     description ? (
      <>
       <meta
        itemProp='description'
        name='description'
        //content = {onlyText(description, 152)}
       />
       <link rel='canonical' href="" />
       <meta property="og:type" content="type" />
       <meta property="og:locale" content="en" />
       <meta property="og:title" content="" />
       <meta property="og:url" content="" />
       <meta property="og:image" content={image} />
       <meta property="og:description" content="" />
      </>
     ): (
      <meta name="robots" content="noindex nofollow" />
     )
    }
   </Head>
  </>
 )
}

export default Meta