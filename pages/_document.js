import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link
          rel="preload"
          href="/fonts/Basetica/Basetica-Bold.otf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Basetica/Basetica-BoldItalic.otf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Basetica/Basetica-Regular.otf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Basetica/Basetica-RegularItalic.otf"
          as="font"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="/fonts/AlbraGrotesk/Albra-Grotesk-Bold.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/AlbraGrotesk/Albra-Grotesk-Medium.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/AlbraGrotesk/Albra-Grotesk-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/AlbraGrotesk/Albra-Grotesk-Semi.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
