import GreenLogo from "./assets/greenlogo.png"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-info" src={GreenLogo} />
            <div className="footer-info">
                <h4>Links</h4>
                <nav className="nav-content-footer">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-info">
                <h4>Contact Information</h4>
                <div className="footer-contact-info">
                    <ul>
                        <li>(123)-456-7890</li>
                        <li>littlelemon@gmail.com</li>
                        <li>123 45th St <br/> New York, NY 12345</li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                <h4>Social Media</h4>
                <nav className="nav-content-footer">
                    <ul>
                        <li><a href="#">TikTok</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Resy</a></li>
                        <li><a href="#">Beli</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;