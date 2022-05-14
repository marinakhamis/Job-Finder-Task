import React from 'react'
import './info.css'
import { Form, Button } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from 'swiper';
import frontendjob from '../../assets/frontend-job.webp'
import tie from '../../assets/tie.webp'
import JobSlideContent from '../JobSlideContent/JobSlideContent';


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
            <div className='row mb-3'>
                {/*Start: Open posisions container */}
                <div className='col-lg-8 p-3 m-0'>
                    <div className='row'>
                        <div className='open-positions border'>
                            {infoData.map(info => (
                                <>
                                    <div className='info d-flex flex-row border p-3 m-0'>
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
                </div>
                {/* End: Open posisions container */}


                {/*Start slider */}

                <div className='col-lg-4'>
                    <h2 className='text-primary fw-bold'> Featured Jobs</h2>
                    <div className='border-secondary'>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            slidesPerGroup={1}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                {/* 
                                If I had more time I would've added props 
                                to the component to display different jobs 
                                just like i did in the positions part
                             */}
                                <JobSlideContent />
                            </SwiperSlide>
                            <SwiperSlide>
                                <JobSlideContent />
                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>

                {/*End slider */}
            </div>


        </div>
    )
}

export default Info