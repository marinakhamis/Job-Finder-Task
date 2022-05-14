import React from 'react'
import companyLogo from '../../assets/building.webp'
import './JobCell.css'
const JobCell = (props) => {
    return (
        <div className='job-cell  border border-top-0 p-3'>
            <div className='job-info-ctr'>
                <div className='company-img d-flex'>
                    <img alt={props.companyName} src={companyLogo} style={{ height: "50px" }} />

                    <div className="px-3">
                        <h5 style={{ letterSpacing: "1px" }} className='text-capitalize'> {props.jobtitle} </h5>
                        <span className='purple-text font-weight-bold'> {props.companyName}</span>
                        <span> {props.jobType}</span>
                    </div>
                </div>

                <div>
                    <p> <i className="fa-solid fa-location-dot"></i> {props.jobType}</p>
                </div>

                <div>
                    <p> <i className="fa-regular fa-clock"></i> {props.jobType}</p>
                </div>
                <div className='d-flex'>
                    <p> {props.jobType}</p>
                </div>
                <div>
                    <p><i className="fa-solid fa-ellipsis"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default JobCell;