import React from 'react'
import './info.css'
import { Form, Button } from 'react-bootstrap'
const Info = () => {
    const infoData = [
        {
            id: 1,
            icon: "fa-solid fa-city",
            name: "Construction & Build",
            openPos: "7"

        },
        {
            id: 2,
            icon: "fa-solid fa-book-open",
            name: "Education & Training",
            openPos: "32"

        },
        {
            id: 3,
            icon: "fa-solid fa-chart-column",
            name: "Acounting & Finance",
            openPos: "0"

        },
        {
            id: 4,
            icon: "fa-solid fa-heart-pulse",
            name: "Healthcare & Beauty",
            openPos: "2"

        },
        {
            id: 5,
            icon: "fa-solid fa-car",
            name: "Cars & Automotive",
            openPos: "9"

        },
        {
            id: 6,
            icon: "fa-solid fa-laptop-code",
            name: "Web Development",
            openPos: "8"

        },
    ]
    return (
        <div className='subscribe-ctr container'>
            <div className='row'>
                <div className='col-lg-8 p-3'>
                    <div className='open-positions border'>
                        {infoData.map(info => (
                            <>
                                <div className='info d-flex flex-row border p-4'>
                                    <div className="icon">
                                        <i className={info.icon}></i>
                                    </div>
                                    <div className='details d-flex flex-column'>
                                        <h6> {info.name} </h6>
                                        <p> {info.openPos} open posisions </p>
                                    </div>
                                </div>
                            </>

                        ))

                        }
                    </div>
                </div>
            </div>

            <div className='row contact-us p-3'>
                <div className='col-lg-4 bg-primary text-light subscribe-ctr'>

                    <Form>
                        <Form.Group className="mb-3">
                            <div className='d-flex border-bottom'>
                                <span className='border-end p-3'>
                                    <i className="fa-solid fa-paper-plane p-2"></i>
                                </span>
                                <span className='p-3 text-light'> Subscribe Our News </span>
                            </div>

                            <div className='p-2'>
                                <div className='p-3 pb-0 m-0'>
                                    <p className='m-0'>
                                        Subscribe to our newsletter to get the latest jobs posted, candidates and latest news.
                                    </p>
                                </div>
                                <div className="email-input p-3">
                                    <i className="fa-solid fa-envelope email-icon "></i>
                                    <input type="email" placeholder="Enter Your Email" className='input-field' />
                                </div>
                            </div>

                        </Form.Group>
                        <Form.Group className="p-4 form-group w-100 ">
                            <Button className='btn btn-primary subs-btn' variant="primary" type="submit">
                                Subscribe
                            </Button>
                        </Form.Group>
                    </Form>



                </div>


                <div className='col-lg-4 bg-primary text-light subscribe-ctr'>

                    <Form>
                        <Form.Group className="mb-3">
                            <div className='d-flex border-bottom'>
                                <span className='border-end p-3'>
                                    <i className="fa-solid fa-paper-plane p-2"></i>
                                </span>
                                <span className='p-3 text-light'> Subscribe Our News </span>
                            </div>

                            <div className='p-2'>
                                <div className='p-3 pb-0 m-0'>
                                    <p className='m-0'>
                                        Subscribe to our newsletter to get the latest jobs posted, candidates and latest news.
                                    </p>
                                </div>
                                <div className="email-input p-3">
                                    <i className="fa-solid fa-envelope email-icon "></i>
                                    <input type="email" placeholder="Enter Your Email" className='input-field' />
                                </div>
                            </div>

                        </Form.Group>
                        <Form.Group className="p-4 form-group w-100 ">
                            <p> 8 hours ago</p>
                        </Form.Group>
                    </Form>



                </div>

            </div>
        </div >
    )
}

export default Info