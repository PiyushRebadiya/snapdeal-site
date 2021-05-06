import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import "../assest/css/Accordion.css"

const Accordionfiles = () => {
  const [accordionObject, setAccordionObject] = useState([
    { key: 'what is E-cart ?', value: 'ECART. European Consortium for Agricultural Research in the Tropics.' },
    { key: 'How is the Process of E-Cart ?', value: 'The fee covers the costs to prepare reports, compile documents, submit your application, provide counselling and guide you through the process.' },
    { key: 'what is the Advantage of E-Cart ?', value: 'Manages Multiple Products & Product categories,Manufacturer and  Supports Multiple-countries.' },
    { key: 'what is the Disadvantage of E-Cart ?', value: 'Fraud and security concerns,Lack of full cost disclosure,Privacy and Hands-on inspection.' },
    { key: 'what is the Rule of E-Cart ?', value: 'The rules define e-rickshaw as a special purpose battery operated vehicle having three wheels and intended to provide last mile connectivity for transport of passengers for hire or reward' },
    { key: 'What is E-Cart Related Terms ?', value: 'shopping cart,social shopping,Coupon Code Definition & Meaning and electronic commerce (e-commerce)' },
    { key: 'Where is E-Cart  Headquartered ?', value: 'E-Cart logistics or E-Cart courier is an Indian courier delivery services company, headquartered in Bangalore,Karnataka' },
    { key: 'Address', value: [{ name: 'India', address: 'M-31,Stark Tower,Varachha,Surat-395006' }, { name: 'Australia', address: 'S-19,Tony Tower,Varachha,Gondal-360311' }] }
  ])
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  const changeHandler = (e) => {
    var toggle = e.target
    toggle.classList.toggle("collapsed")
  }
  return (
    <div>
      {
        spinner ? 
        <div>
          <Spinner animation="border" role="status">
          </Spinner>
          <span className="loadingText">Loading...</span>
        </div> :
          <div className="container">
            <div >
              <h2 className="h2Accordion">Accordion Demo</h2>
            </div>
            <Accordion>
              {
                accordionObject.map((item, index) => {
                  return (
                    <Card id="card">
                      <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index + 1} onClick={(e) => changeHandler(e)} id="collapsed" className="collapsed">
                          {item.key}
                        </Accordion.Toggle>
                      </Card.Header>
                      {
                        Array.isArray(item.value) ? item && item.value.map((data, i) => {
                          return (
                            <Accordion.Collapse eventKey={index + 1}>
                              <Card.Body className="p-2">
                                <Accordion>
                                  <Card>
                                    <Card.Header>
                                      <Accordion.Toggle as={Button} variant="link" eventKey={i + 2} onClick={(e) => changeHandler(e)} id="collapsed" className="collapsed">
                                        {data.name}
                                      </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={i + 2} className="cardBodyBg">
                                      <Card.Body>{data.address} </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Card.Body>
                            </Accordion.Collapse>
                          )
                        }) : <Accordion.Collapse eventKey={index + 1} className="cardBodyBg">
                          <Card.Body>{item.value}</Card.Body>
                        </Accordion.Collapse>
                      }
                    </Card>
                  )
                })
              }
            </Accordion>
          </div>
      }
    </div>
  )
}

export default Accordionfiles
