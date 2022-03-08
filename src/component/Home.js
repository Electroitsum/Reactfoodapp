
import Card from "./CardCom";
import Buy from "./Buy";
import {
  MdBreakfastDining,
  MdLunchDining,
  MdDinnerDining,
} from "react-icons/md";

import Widget from "./widget";
import { GiCoffeeCup, GiPartyHat, GiPartyPopper } from "react-icons/gi";
function home(){
    return(
        <>
        <div className="cover"><h1>Always delecious and fresh food!</h1></div>
         <Card></Card>
      <div className="offer">
        <h2>WE OFFER</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae
          porro consequatur aliquam, incidunt eius magni provident, doloribus
          omnis minus ovident, doloribus omnis minus temporibus perferendis
          nesciunt..
        </p>
        <div className="widcon">
          <Widget Name="Coffee" Icon={<GiCoffeeCup />}></Widget>

          <Widget Name="Breakfast" Icon={<MdBreakfastDining />}></Widget>

          <Widget Name="Lunch" Icon={<MdLunchDining />}></Widget>
        </div>
        <div className="widcon">
          <Widget Name="Dinner" Icon={<MdDinnerDining />}></Widget>

          <Widget Name="Parties" Icon={<GiPartyHat />}></Widget>

          <Widget Name="Events" Icon={<GiPartyPopper />}></Widget>
        </div>
      </div>
      <Buy />
        </>
    );
}

export default home;