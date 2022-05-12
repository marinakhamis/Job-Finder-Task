import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/jobActions'

import PropTypes from 'prop-types'
import JobCell from '../JobCell/JobCell';
class Jobs extends Component {
    componentDidMount() {
        this.props.fetchJobs();
    }

    render() {
        const jobPosts = this.props.jobs.map(job => (
            <JobCell key={job.id} jobtitle={job.jobtitle} />
        ))
        return (
            <div className='jobs container bg-success'>
                Jobs
                {/* {jobPosts} */}

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