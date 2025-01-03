import GreenLogo from "./assets/greenlogo.png"

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-info" src={GreenLogo} alt="logo"/>
            <div className="footer-info">
                <h4>Links</h4>
                <nav className="nav-content-footer">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/coming-soon">About</a></li>
                        <li><a href="/coming-soon">Menu</a></li>
                        <li><a href="/book">Reservations</a></li>
                        <li><a href="/coming-soon">Order Online</a></li>
                        <li><a href="/coming-soon">Login</a></li>
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
                        <li><a href="/coming-soon">TikTok</a></li>
                        <li><a href="/coming-soon">Instagram</a></li>
                        <li><a href="/coming-soon">Facebook</a></li>
                        <li><a href="/coming-soon">Youtube</a></li>
                        <li><a href="/coming-soon">Resy</a></li>
                        <li><a href="/coming-soon">Beli</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;