import "./specials.css"
import SpecialsHeader from "./SpecialsHeader";
import SpecialsList from "./SpecialsList";

function Specials() {
    return (
        <section className="specials">
            <SpecialsHeader />
            <SpecialsList />
        </section>
    );
};

export default Specials;