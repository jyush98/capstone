import HeroImage from "./../../assets/heroimage.jpg"

function HeroMainContent() {
    return (
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
    );
};

export default HeroMainContent;