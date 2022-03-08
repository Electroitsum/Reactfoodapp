import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import {Link} from "react-router-dom";

function buy(){
    return (
        <>
        <div className="buy">
        <h2>OUR RESTAURANT</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae
          porro consequatur aliquam, incidunt eius magni provident, doloribus
          omnis minus ovident, doloribus omnis minus temporibus perferendis
          nesciunt..
        </p>
        <div className="bcon row m-0 my-5">
          <span className="col-12 col-md-6 p-3 order-2 order-md-1">
            <p className="w-100 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              aliquet quam id dui posuere blandit. Donec sollicitudin molestie
              malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat.
            </p>
            <div className="my-5">
              <div>
                <IconContext.Provider
                  value={{ size: "24px", color: "yellowgreen" }}
                >
                  <IoIosArrowDroprightCircle />
                </IconContext.Provider>
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div>
                <IconContext.Provider
                  value={{ size: "24px", color: "yellowgreen" }}
                >
                  <IoIosArrowDroprightCircle />
                </IconContext.Provider>
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div>
                <IconContext.Provider
                  value={{ size: "24px", color: "yellowgreen" }}
                >
                  <IoIosArrowDroprightCircle />
                </IconContext.Provider>
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div>
                <IconContext.Provider
                  value={{ size: "24px", color: "yellowgreen" }}
                >
                  <IoIosArrowDroprightCircle />
                </IconContext.Provider>
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "16px",
                    marginLeft: "5px",
                  }}
                >
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <Link
              to ="/buy"
              className="ordernow-btn"
            >
              <p>Order Now</p>
            </Link>
          </span>
          <span className="col-12 col-md-6 order-1 order-md-2">
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              style={{ width: "100%" }}
              alt="food"
            />
          </span>
        </div>
      </div>
        </>
    )
}

export default buy;