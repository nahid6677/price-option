import PriceOpt from "./PriceOpt";

const PriceOption = () => {
          
    const priceOption = [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "billingCycle": "monthly",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "billingCycle": "monthly",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Free Wi-Fi",
            "1 free personal training session per month",
            "Access to group classes"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 69.99,
          "billingCycle": "monthly",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Free Wi-Fi",
            "Unlimited group classes",
            "3 personal training sessions per month",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 4,
          "name": "Elite",
          "price": 99.99,
          "billingCycle": "monthly",
          "features": [
            "All-inclusive gym access",
            "Locker room with reserved lockers",
            "Free Wi-Fi",
            "Unlimited group classes and workshops",
            "Unlimited personal training sessions",
            "Access to sauna, steam room, and pool",
            "Priority booking for classes",
            "Free nutritional counseling"
          ]
        },
        {
          "id": 5,
          "name": "Annual Basic",
          "price": 299.99,
          "billingCycle": "yearly",
          "features": [
            "Access to gym facilities",
            "Locker room access",
            "Free Wi-Fi",
            "2 guest passes per year"
          ]
        },
        {
          "id": 6,
          "name": "Annual Premium",
          "price": 699.99,
          "billingCycle": "yearly",
          "features": [
            "All-inclusive gym access",
            "Locker room access",
            "Free Wi-Fi",
            "Unlimited group classes",
            "10 personal training sessions per year",
            "Access to sauna, steam room, and pool",
            "4 guest passes per year"
          ]
        }
      ]
      
    return (
        <div className="m-8">
            <h2>Best Prices</h2>
            <div className="grid md:grid-cols-3 gap-5">
            {
                priceOption.map(option => <PriceOpt key={option.id} option={option}></PriceOpt>)
            }
            </div>
        </div>
    );
};

export default PriceOption;