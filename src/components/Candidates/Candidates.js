import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCandidates } from '../../actions/candidatesActions.js'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './candidates.css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import notFound from '../../assets/not-found.jpg'
SwiperCore.use([Navigation, Pagination]);

class Candidates extends Component {
    componentDidMount() {
        this.props.fetchCandidates();
    }

    render() {

        const candidatePosts = this.props.candidates.map(candidate => (
            <SwiperSlide key={candidate.id}>
                {/* Candidates API is broken (All avatar links are broken) */}
                {/* <img alt={candidate.name} src={candidate.avatar} /> */}


                <div className="slide-content">
                    <img alt={candidate.name}
                        src={candidate.avatar === null ? candidate.avatar : notFound} />
                    <h1>{candidate.name}</h1>
                    <span>{candidate.title}</span>
                </div>
            </SwiperSlide>
        ))
        return (
            <div className="candidates">
                <div className="candidates-header">
                    <p>
                        Find top talents
                    </p>
                    <h1 className="text-capitalize text-light">
                        Explore Our Latest Candidates
                    </h1>
                    <hr style={{ color: "#000", width: "50px", height: "2px", opacity: 1 }} />
                    <p className="candidates-desc w-50">
                        Work with someone perfect for your team & get
                        amazing results working with the best employees .
                        hire talents with confidence
                    </p>
                </div>
                <div className="candidates-carousel">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={20}
                        pagination={true}
                        navigation={true}
                        loop={false}
                        modules={[Pagination, Navigation]}
                        className="candidates-slider"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            800: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        {candidatePosts}
                    </Swiper>

                </div>
                <div className="explore-all">
                    <button className='btn btn-primary exp-all'>explore all</button>
                </div>
            </div>
        )
    }
}

Candidates.propTypes = {
    fetchCandidates: PropTypes.func.isRequired,
    candidates: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    candidates: state.candidates.items
})

export default connect(mapStateToProps, { fetchCandidates })(Candidates)