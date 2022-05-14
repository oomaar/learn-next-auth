import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default Application;
