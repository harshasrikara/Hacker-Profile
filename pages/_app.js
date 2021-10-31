import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";

import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
