import React from 'react'
import frontendjob from '../../assets/frontend-job.webp'
import tie from '../../assets/tie.webp'


const JobSlideContent = () => {
    return (
        <>
            <div>
                <div style={{ width: "100%", height: "100%" }}>
                    <img alt="frontend web developer job" src={frontendjob} style={{ width: "100%", height: "50%" }} />
                </div>
                <div className="row p-3">
                    <div className='d-flex flex-row '>
                        <div>
                            <img className='job-img' src={tie} alt="job" style={{ width: "50px", height: "50px" }} />
                        </div>
                        <div>
                            <h6 className='ps-3'> Frontend web developer</h6>
                            <p> <span className='purple-text fw-bold ps-3'> TieLabs</span> | Beautiful WP themes  </p>
                            <p className='p-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                            <p className='p-3 d-flex justify-content-between'>
                                <span> <i className="fa-solid fa-location-dot"></i> Moscow, Russia</span>
                                <span> <i className="fa-regular fa-clock"></i> 2 days ago</span>

                            </p>
                            <div>
                                <div className='apply-for-job'>
                                    <button className='btn apply-for-job-btn'>Apply for this job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default JobSlideContent