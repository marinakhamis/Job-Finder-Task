import React from 'react'
import './info.css'
import { Form } from 'react-bootstrap'
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
        <div className='info-ctr container'>
            {/*Start: Open posisions container */}
            <div className='open-positions'>
                {infoData.map(info => (
                    <div className='border' key={info.id}>
                        <div className='info d-flex flex-row  p-3 m-0'>
                            <div className="icon">
                                <i className={info.icon}></i>
                            </div>
                            <div className='details d-flex flex-column'>
                                <h6> {info.name} </h6>
                                <p> {info.openPos} open posisions </p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            {/*End: Open posisions container */}


            {/*Start: contact us container */}
            <div className='contact-us'>
                <div className='bg-primary text-light subscribe-ctr'>
                    <Form>
                        <Form.Group>
                            <div className='d-flex border-bottom '>
                                <span className='border-end p-3'>
                                    <i className="fa-solid fa-paper-plane "></i>
                                </span>
                                <span className='p-3 text-light'> Subscribe Our News </span>
                            </div>

                            <div className='border-end p-3'>
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
                            <button className='btn btn-primary subs-btn' variant="primary" type="submit">
                                Subscribe
                            </button>
                        </Form.Group>
                    </Form>
                </div>

                {/* End: Open posisions container */}
                <div className='twtr-ctr'>
                    <Form>
                        <Form.Group>
                            <div className='d-flex border-bottom'>
                                <span className='border-end p-3'>
                                    <i className="fa-brands fa-twitter"></i>
                                </span>
                                <span className='p-3 text-light'> Latest tweets </span>
                            </div>

                            <div className='p-2'>
                                <div className='p-3 pb-0 m-0'>
                                    <p className='mx-1'>
                                        <span className='bg-primary px-2'>  @tielabs</span>
                                    </p>
                                    <p className='mx-1'>
                                        We have released a major update for instaNOW plugin (formaly instagramy)
                                        v2.0 http/www.insta-now
                                    </p>
                                </div>
                            </div>

                        </Form.Group>
                        <Form.Group className="p-4">
                            <p><i className="fa-solid fa-clock-rotate-left"></i>  8 hours ago</p>
                        </Form.Group>
                    </Form>

                </div>
            </div>

            {/*Start slider */}
            <div className='feat-jobs-slider'>
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
    )
}

export default Info