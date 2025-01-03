import DeliveryLine from "./DeliveryLine";

const SpecialItem = ({ image, title, price, description }) => {
    return (
        <div className="special-item">
            <img src={image} alt={`Special: ${title}`} />
            <div className="special-item-header">
                <h3>{title}</h3>
                <p className="prices">${price}</p>
            </div>
            <p>{description}</p>
            <DeliveryLine />
        </div>
    );
};

export default SpecialItem;