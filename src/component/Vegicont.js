

function vegicont(prop){
    return (
        <>
        <span className="col-12 col-md-6 col-xl-4 d-flex justify-content-center align-items-center p-5">
            <span className="vegiinnercard p-2">
              <sapn className="p-1">
                <img
                  className="vegiimg"
                  src={prop.image}
                  width="300px"
                  alt="vegi"
                />
              </sapn>
              <span className="vegifooter p-1">
                <h3 style={{ textAlign: "center" }}>{prop.item}</h3>
                <p style={{ textAlign: "center", margin: "0px" }}>
                  <span>{prop.rate} </span>Rs
                </p>
                <div className="p-2">
                  <input className="countinput" min="1" type="number"></input>
                  <span className="px-2">Nos</span>
                </div>

                <button className="addbtn m-2">Add to cart</button>
              </span>
            </span>
          </span>
        </>
    )
}


export default vegicont;