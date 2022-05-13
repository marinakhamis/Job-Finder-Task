import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCandidates } from '../../actions/candidatesActions.js'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './candidates.css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from 'swiper';

class Candidates extends Component {
    componentDidMount() {
        this.props.fetchCandidates();
    }

    render() {

        const candidatePosts = this.props.candidates.map(candidate => (

            <SwiperSlide key={candidate.id}>
                <img alt={candidate.name} src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_400x400.jpg" />
                {/* <img alt={candidate.name} src={candidate.avatar} /> */}

            </SwiperSlide>
        ))
        return (
            // <div className='candidates container bg-danger'>
            //     Candidates


            //     {candidatePosts}

            // </div>

            <div className="candidates">
                <div className="candidates-header">
                    <span className="candidates-find">
                        find top talents
                    </span>
                    <h1 className="candidates-title">
                        Explore Our Latest Candidates
                    </h1>
                    <span className="hr"></span>
                    <p className="candidates-desc">
                        Work wityh someone perfect for your team & get
                        amazing results working with the best employees .
                        hire talents with confidence
                    </p>
                </div>
                <div className="candidates-carousel container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        modules={[Navigation]}
                        navigation={true}
                    >
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide> */}

                        {candidatePosts}
                    </Swiper>

                </div>
                <div className="explore-all">
                    <a href="#">explore all</a>
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