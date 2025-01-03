import HeroImage from "./assets/heroimage.jpg"
import GreekSaladImg from "./assets/greeksalad.jpg"
import BruschettaImg from "./assets/bruchetta.svg"
import LemonDessertImg from "./assets/lemondessert.jpg"
import HomeImg from "./assets/home icon.svg"

function Main() {
    return (
        <main className="main-content">
            <section className="hero">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean Restaurant, focused on traditional recipes with a modern twist.</p>
                    <button className="lemon-button">Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Restaurant" />
                </div>
            </section>

            <section className="specials">
                <div className="specials-header">
                    <h2>This weeks specials!</h2>
                    <button className="online-menu">Online Menu</button>
                </div>
                <div className="specials-list">
                    <div className="special-item">
                        <img src={GreekSaladImg} alt="Special 1" />
                        <div className="special-item-header">
                            <h3>Greek Salad</h3>
                            <p className="prices">$12.99</p>
                        </div>
                        <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.</p>
                        <div className="delivery-line">
                            <p>Order a delivery</p>
                            <img src={HomeImg} alt="Home"/>
                        </div>
                    </div>
                    <div className="special-item">
                        <img src={BruschettaImg} alt="Special 2" />
                        <div className="special-item-header">
                            <h3>Bruschetta</h3>
                            <p className="prices">$5.99</p>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with olive oil.</p>
                        <div className="delivery-line">
                            <p>Order a delivery</p>
                            <img src={HomeImg} alt="Home"/>
                        </div>
                    </div>
                    <div className="special-item">
                        <img src={LemonDessertImg} alt="Special 3" />
                        <div className="special-item-header">
                            <h3>Lemon Dessert</h3>
                            <p className="prices">$5.00</p>
                        </div>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and
                            is as authentic as can be imagined.</p>
                            <div className="delivery-line">
                            <p>Order a delivery</p>
                            <img src={HomeImg} alt="Home"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;