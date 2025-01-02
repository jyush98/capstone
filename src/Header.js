import Logo from "./assets/Logo.svg"

function Header() {
    return (
        <header className="header">
            <img src={Logo}/>
        </header>
    );
};

export default Header;