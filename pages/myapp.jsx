

import MainLayout from "../src/components/layout/main-layout";

function MyApp ({ Component, pageProps }) {
    const renderWithLayout =
        Component.getLayout ||
        function (page) {
            return <MainLayout>{page}</MainLayout>;
        };

    return renderWithLayout(<Component {...pageProps} />);
}

export default MyApp;

