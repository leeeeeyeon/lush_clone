import Header from "./Header";
import Footer from "./Footer";
import "./css/Layout.css";
import Slide from "./Slide";

const Layout = () => {
    return (
        <div className="layout">
            <Header />

            <main className="main">
                <Slide />
            </main>
            <Footer />
        </div>
    )
}

export default Layout