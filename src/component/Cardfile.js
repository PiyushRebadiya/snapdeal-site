import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import "../assest/css/Card.css"

const Cardfile = () => {
  const [card, setcard] = useState()
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setcard(data));
    setTimeout(() => setSpinner(false), 3000)
  }, []);


  return (
    <div>
      {
        spinner ?
          <div>
            <Spinner animation="border" role="status">
            </Spinner>
            <span className="loadingText">Loading...</span>
          </div> :
          <div className="container-fluid px-5 py-4">
            <div className="row">
              {
                card && card.map((item) => {
                  return (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2">
                      <div class="card mt-4">
                        <div class="carcard-actiond-image">
                          <img class="img-responsive" src={item.image} />
                          <h4 class="card-title">{item.title}</h4>
                        </div>
                        <div class="card-content">
                          <h5>{item.category}</h5>
                          <h6>Price : {item.price}</h6>
                          <p>{item.description}</p>
                        </div>
                        <div class="card-action">
                          <a href={item.image} target="new_blank">Photo</a>
                          <a href="#" target="new_blank" className="aChange r-4">Link</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      }

    </div>
  )
}

export default Cardfile
