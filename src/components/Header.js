import Logo from "./../assets/Logo.svg"
import Nav from "./Nav";

function Header() {
    return (
        <>
            <header className="header">
                <img src={Logo} alt="logo" />
            </header>
            <Nav />
        </>


    );
};

export default Header;