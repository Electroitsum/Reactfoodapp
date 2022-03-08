import "../App.css"
import { IconContext } from "react-icons";


function Widget(prop){
    return(
        <>
        <span className="widget">
            <span className="wid-icon">
              <IconContext.Provider
                value={{
                  color: "yellowgreen",
                  className: "global-class-name",
                  size: "3em",
                }}
              >
                {prop.Icon}
              </IconContext.Provider>
            </span>
            <div className="wid-text">
              <h5 className="wid-head">{prop.Name}</h5>
              <span className="wid-foot">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quae porro consequatur aliquam, incidunt
              </span>
            </div>
          </span>
        </>
    );
}

export default Widget;