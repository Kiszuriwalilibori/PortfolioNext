import { AppProps } from "next/app";

import MainLayout from "../src/components/layout/main-layout";

function AppWithLayouts({ Component, pageProps }) {
    if (Component) {
        const renderWithLayout =
            Component?.getLayout ||
            function (page) {
                return <MainLayout>{page}</MainLayout>;
            };
        return renderWithLayout(<Component {...pageProps} />);
    } else return null;
}
export default AppWithLayouts;
