import "../App.css";
import Card1 from "./Card"

function CardCom() {
  return (
    <>
      <div className="cardcon">
        <h2 className="cardcon-head">SIGNATURE DISHES</h2>
        <p className="cardcon-shead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae
          porro consequatur aliquam, incidunt eius magni provident, doloribus
          omnis minus ovident, doloribus omnis minus temporibus perferendis
          nesciunt..
        </p>
        <div className="inner-card-con">
         <Card1 Name="Cobb Salad" ImageLink="https://images.unsplash.com/photo-1514910103003-aa6b5e4239ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1927&q=80"></Card1>

         <Card1 Name="Twinkies" ImageLink="https://images.unsplash.com/photo-1592415499556-74fcb9f18667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"></Card1>

         <Card1 Name="Pot roast" ImageLink="https://images.unsplash.com/photo-1608133988679-554453a5a3cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></Card1>

          
        </div>
      </div>
     
    </>
  );
}

export default CardCom;
