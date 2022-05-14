import React from 'react'
import companyLogo from '../../assets/building.webp'
import './JobCell.css'
import convertDate from '../../helpers/dateConverter';

const JobCell = (props) => {
    return (
        <div className='job-cell  border border-top-0 p-3'>
            <div className='job-info-ctr'>
                <div className='company-img d-flex'>
                    <img alt={props.companyName} src={companyLogo} style={{ height: "50px", width: "50px" }} />
                    <div className="px-3">
                        <h5 style={{ letterSpacing: "1px" }} className='text-capitalize bold-font' > {props.jobtitle} </h5>
                        <span className='purple-text font-weight-bold'>
                            {props.companyName}</span>
                        <span> | {props.jobType}</span>
                    </div>
                </div>

                <div className='job-cell-lock'>
                    <p> <i className="fa-solid fa-location-dot"></i> {props.jobType}</p>
                </div>

                <div className='.job-cell-time'>
                    <p> <i className="fa-regular fa-clock"></i>  {convertDate(`${props.createdAt}`)} days ago</p>
                </div>
                <div className='d-flex job-type'>
                    <p> {props.jobType}</p>
                </div>
                <div className='job-cell-menu'>
                    <p className='text-right'><i className="fa-solid fa-ellipsis"></i> </p>
                </div>
            </div>
        </div>
    )
}

export default JobCell;