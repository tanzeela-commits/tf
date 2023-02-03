import { Fragment } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AuthConsumer, AuthProvider } from "../contexts/auth-context";
import { createEmotionCache } from "../utils/create-emotion-cache";
import { registerChartJs } from "../utils/register-chart-js";

import { theme } from "../theme";

registerChartJs();

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>ShopJOB | Get Hired</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <AuthConsumer>
              {(auth) =>
                auth.isLoading ? (
                  <Fragment />
                ) : (
                  <>
                    <NextNProgress color="#C46B39" height={3} />
                    {getLayout(
                      <>
                        <Component {...pageProps} />
                      </>
                    )}
                  </>
                )
              }
            </AuthConsumer>
          </AuthProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
