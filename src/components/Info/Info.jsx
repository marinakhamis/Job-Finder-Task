import React from 'react'
import './info.css'
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

            <div className='row p-3 contact-us'>
                <div className='col-lg-4 bg-primary p-4'>
                    hhh
                </div>
                <div className='col-lg-4 bg-info p-4'>
                    hhh
                </div>

            </div>
        </div >
    )
}

export default Info