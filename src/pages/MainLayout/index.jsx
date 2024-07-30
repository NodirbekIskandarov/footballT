import { Outlet } from "react-router-dom";
import { Wrapper } from "../../global_styles/styles";
import { Footer, Header } from "../../components";
function MainLayout() {
    return (
        <Wrapper height="100vh">
            <Header />
            <Outlet />
            <Footer />
        </Wrapper>
    )
}
export default MainLayout