import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Vegicard from "./component/Vegicard";
import ScrollToTop from "./component/ScrollToTop";
import  { createStore } from 'redux';

const buy1 = "buy1";


function buy(){
  return (
    {
      type: "buy1",
      info: "bought_product"
    }
  );
}

const initState = {
  soup: 20
}
const reducer = (state = initState, action) =>{
  
  
    switch (action.type){
    case buy1:
      return{
      ...state,
      soup: state.soup -1
    }
    default: return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());
const unsub = store.subscribe(() => {
  return(
    console.log("new count", store.getState())
  );
})

store.dispatch(buy());
store.dispatch(buy());
unsub();

function App() {
  return (
    <>
      

      <ScrollToTop />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/buy" component={Vegicard} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
