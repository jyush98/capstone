import GreekSaladImg from "./../../assets/greeksalad.jpg"
import BruschettaImg from "./../../assets/bruchetta.svg"
import LemonDessertImg from "./../../assets/lemondessert.jpg"
import SpecialItem from "./SpecialItem";

const SpecialsList = () => {
    const specials = [
        {
            image: GreekSaladImg,
            title: "Greek Salad",
            price: "12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            image: BruschettaImg,
            title: "Bruschetta",
            price: "5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with olive oil."
        },
        {
            image: LemonDessertImg,
            title: "Lemon Dessert",
            price: "5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        }
    ]
    return (
        <div className="specials-list">
            {
                specials.map(special => (
                    <SpecialItem
                        key={special.title}
                        image={special.image}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                    />
                ))
            }
        </div>
    );
};

export default SpecialsList;