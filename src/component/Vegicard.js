import Vegicont from "./Vegicont";
// import { Link } from "react-router-dom";
const vegitables = [
  {
    image:
      "https://images.unsplash.com/photo-1626202155907-faf8fa3dbc5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    item: "Corn Soup",
    rate: "80.00",
  },

  {
    image:
      "https://images.unsplash.com/photo-1631880383152-f29099b0fd16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=587&q=80",
    item: "Salad",
    rate: "120.00",
  },

  {
    image:
      "https://images.unsplash.com/photo-1566918214014-a3b3e0132267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    item: "Roasted Chicken",
    rate: "220.00",
  },

  {
    image:
      "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    item: "Burger",
    rate: "99.00",
  },

  {
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    item: "Pizza",
    rate: "180.00",
  },
];

function vegiCard() {
  return (
    <>
      <div className="cover1">
        <h1>Order Your delecious food now!</h1>
      </div>
      <div className="vegicont p-5">
        <div className="row m-0">
          {vegitables.map((element) => {
            return (
              <Vegicont
                image={element.image}
                item={element.item}
                rate={element.rate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default vegiCard;
