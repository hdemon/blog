import "../styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ElementType;
  pageProps: unknown;
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
