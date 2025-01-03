import GreenLogo from "./../assets/greenlogo.png"
import NavLinks from "./NavLinks";

function Footer() {
    const socialMediaSites = ["TikTok", "Instagram", "Facebook", "Youtube", "Resy", "Beli"]

    return (
        <footer className="footer">
            <img className="footer-info" src={GreenLogo} alt="logo"/>
            <div className="footer-info">
                <h4>Links</h4>
                <nav className="nav-content-footer">
                    <NavLinks/>
                </nav>
            </div>
            <div className="footer-info">
                <h4>Social Media</h4>
                <nav className="nav-content-footer">
                    <ul>
                        {
                            socialMediaSites.map(site => (
                                <li key={site}><a href="/coming-soon">{site}</a></li>
                            ))
                        }
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
        </footer>
    );
};

export default Footer;