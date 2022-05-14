import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/jobActions'

import PropTypes from 'prop-types'
import JobCell from '../JobCell/JobCell';
// import { Tab, Tabs } from 'react-bootstrap';
import './Jobs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SearchTogglers from '../SearchToggles/SearchTogglers';
import convertDate from '../../helpers/dateConverter';

class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            key: "alljobs",
            visible: 3
        }
        this.loadMore = this.loadMore.bind(this);

    }
    loadMore() {
        this.setState((prev) => {
            return { visible: prev.visible + 4 };
        });
    }
    componentDidMount() {
        this.props.fetchJobs();
    }

    handleClick() {
        this.setState({ showMore: true })
    }

    setKey(k) {
        this.setState({ key: k })
    }
    render() {

        const jobPosts = this.props.jobs.slice(0, this.state.visible).map(job => (
            <JobCell
                key={job.id}
                createdAt={job.createdAt}
                jobtitle={job.jobtitle}
                companyName={job.companyName}
                location={job.location}
                jobType={job.jobType}
            />
        ))

        return (
            <div className='jobs container'>
                <div className='row mb-5'>
                    <div className='col-lg-8 p-3'>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold'> We have <span className='purple-text fw-bold'> {this.props.jobs.length} </span> Potential Jobs for you.</p>
                            <p>Sort by <span className='purple-text'>price</span> </p>
                        </div>
                        <Tabs>
                            <div className='jobs-tabs-ctr container'>
                                <TabList>
                                    <Tab>ALL JOBS</Tab>
                                    <Tab>FULL TIME</Tab>
                                    <Tab>TEMPORARY</Tab>
                                    <Tab>INTERNSHIP</Tab>
                                    <Tab>PART TIME</Tab>
                                    <Tab>FREELANCE</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                {jobPosts}
                                <div className='border-secondary text-center mx-center py-3'>
                                    {this.state.visible < this.props.jobs.length &&
                                        <button onClick={this.loadMore} type="button" className="load-more btn btn-outline-secondary">Load more listings</button>
                                    }
                                </div>
                            </TabPanel>
                            

                            <TabPanel>
                                <p>No Available Jobs now </p>
                            </TabPanel>

                            <TabPanel>
                                <p>No Available Jobs now </p>

                            </TabPanel>

                            <TabPanel>
                                <p>No Available Jobs now </p>

                            </TabPanel>

                            <TabPanel>
                                <p>No Available Jobs now </p>

                            </TabPanel>

                            <TabPanel>
                            </TabPanel>
                        </Tabs>



                    </div>
                    <div className='col-lg-4 p-3'>
                        <SearchTogglers />
                    </div>
                </div>
            </div>
        )
    }
}

Jobs.propTypes = {
    fetchJobs: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    jobs: state.jobs.items
})

export default connect(mapStateToProps, { fetchJobs })(Jobs)







{/*
let isoDate = "2013-03-10T02:00:00Z";

let extractedDate = isoDate.split("T")[0];

console.log(extractedDate.toString());


let convertDate = extractedDate.toString().replaceAll('-', '/')

console.log(convertDate)

var today = new Date();
var createdOn = new Date(convertDate);
var msInDay = 24 * 60 * 60 * 1000;

createdOn.setHours(0,0,0,0);
today.setHours(0,0,0,0)

var diff = (+today - +createdOn)/msInDay
console.log(diff)

*/}