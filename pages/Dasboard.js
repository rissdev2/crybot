import Head from "next/head";
import Script from "next/script";
import Sidebar from "../Components/Sidebar";




export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/css/next-sidebar.min.css"></link>


        <title>crybot.</title>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" />
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" />
      <Script src="https://kit.fontawesome.com/1f4b816a3f.js" crossorigin="anonymous" />
      <Script  src="https://cdn.jsdelivr.net/npm/next-sidebar@1/assets/js/next-sidebar.min.js" />
        

      <Sidebar />


     
    </>
  );
}
