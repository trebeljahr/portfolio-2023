import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Script from "next/script";
import DefaultLayout from "../components/layout/DefaultLayout";
import UseScrollToTop from "../hooks/useScrollToTop";

const plausibleEnabled = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
      {plausibleEnabled ? (
        <Script id="plausible-loader" strategy="afterInteractive">
          {`
            (function () {
              var domain = "portfolio.trebeljahr.com";
              if (location.hostname !== domain) return;
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments);
              };
              var script = document.createElement("script");
              script.defer = true;
              script.dataset.domain = domain;
              script.src = "https://plausible.trebeljahr.com/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js";
              document.head.appendChild(script);
            })();
          `}
        </Script>
      ) : null}
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>

      <UseScrollToTop />
    </div>
  );
}

export default MyApp;
