import Logo from "./assets/Logo.svg"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-info" src={Logo}/>
            <h3 className="footer-info">Links</h3>
            <h3 className="footer-info">Contact Information</h3>
            <h3 className="footer-info">Social Media</h3>
        </footer>
    );
};

export default Footer;