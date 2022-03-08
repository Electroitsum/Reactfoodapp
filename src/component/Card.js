import "../App.css"

function Card(prop) {
    return(
    <>
     <span className="card1">
            <div className="card-image-con">
              <img
                className="card-image"
                src={prop.ImageLink}
                alt="salad"
              />
              <h3 className="image-title">
                <p>{prop.Name}</p>
              </h3>
            </div>
            <div className="card-footertext">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores quae porro consequatur aliquam, incidunt Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Dolores quae
                  porro consequatur aliquam, incidunt
                </p>
              </div>
          </span>
        </>
    );
}

export default Card;