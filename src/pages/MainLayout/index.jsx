import { Outlet } from "react-router-dom";
import { Wrapper } from "../../global_styles/styles";
import { Footer, Header } from "../../components";
import Sidebar from "../../components/sidebar";
function MainLayout() {
    return (
        <Wrapper height="100vh">
            {/* <Header />
            <Outlet />
            <Footer /> */}
            <Sidebar/>
        </Wrapper>
    )
}
export default MainLayout