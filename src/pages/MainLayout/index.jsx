import Sidebar from "../../components/sidebar";
import { Wrapper } from "../../global_styles/styles";
function MainLayout() {
    return (
        <Wrapper height="100vh">
            <Sidebar/>
        </Wrapper>
    )
}
export default MainLayout