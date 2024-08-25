import Document, { Html, Head, Main, NextScript } from "next/document";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/utilities/libraries/fontawesome";
import "aos/dist/aos.css";

config.autoAddCss = false;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* AOS script */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
            integrity="sha512-A7AYkJyl7WjvUSI1d4KbMOw24Zb8aQxkTbJ2dKBR4tA4WAlx2xZMkH1MiO9uAgBwn5RYwHQDa6mGAZpM1F3iXg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
