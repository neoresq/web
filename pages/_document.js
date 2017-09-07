import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
          />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato|Lobster" rel="stylesheet" />
        </Head>
        <body>
          <style>{`
            body {
              font-size: 16px;
              background-color: papayawhip;
            }

            .ff-lobster {
              font-family: Lobster, cursive;
            }
            .ff-lato {
              font-family: Lato, sans-serif;
            }

            .card-shadow {
              box-shadow: 0px 5px 10px -3px rgba(230, 233, 238, 0.7);
            }
            .shadow {
              box-shadow: 0px 5px 10px -3px rgba(black, 0.2);
            }
            .shadow1 {
              box-shadow: 0 8px 34px 0 rgba(0, 0, 0, 0.3);
            }
          `}</style>
          <div className="root">{main}</div>
          <NextScript />
        </body>
      </html>
    );
  }
}
