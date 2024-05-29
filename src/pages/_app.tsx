import "@/styles/globals.css";

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import {
  AdobeClean,
  AvenirNext,
  CircularStd,
  FiraSans,
  ubuntu,
} from "@/assets/fonts";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --avenirNext-font: ${AvenirNext.style.fontFamily};
            --adobeClean-font: ${AdobeClean.style.fontFamily};
            --ubuntu-font: ${ubuntu.style.fontFamily};
            --circularStd-font: ${CircularStd.style.fontFamily};
            --firaSans-font: ${FiraSans.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
