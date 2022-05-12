import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJobs } from '../../actions/jobActions'

import PropTypes from 'prop-types'
class Jobs extends Component {
    componentDidMount() {
        this.props.fetchJobs();
    }

    render() {
        const jobPosts = this.props.jobs.map(job => (
            <div key={job.id}>
                <h6 className='text-capitalize'> {job.jobtitle} </h6>
            </div>
        ))
        return (
            <div>Jobs

                {jobPosts}
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