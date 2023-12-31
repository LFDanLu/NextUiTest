import '../styles/globals.css';
import { CssBaseline, NextUIProvider, createTheme } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
