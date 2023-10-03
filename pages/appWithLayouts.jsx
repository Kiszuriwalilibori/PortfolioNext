import { useHandleConnectionStatus } from "../src/hooks";
import MainLayout from "../src/components/layout/main-layout";

function AppWithLayouts({ Component, pageProps }) {
    useHandleConnectionStatus();
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
