import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import NProgress from 'nprogress'

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
      url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url) => {
      NProgress.done()
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? <div></div> : null;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
