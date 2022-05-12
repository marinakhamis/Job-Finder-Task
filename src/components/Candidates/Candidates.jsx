import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCandidates } from '../../actions/candidatesActions.js'

import PropTypes from 'prop-types'
class Candidates extends Component {
    componentDidMount() {
        this.props.fetchCandidates();
    }

    render() {
        const candidatePosts = this.props.candidates.map(candidate => (

            <h3 key={candidate.id}> {candidate.name} </h3>
        ))
        return (
            <div className='candidates container bg-danger'>
                Candidates
                {candidatePosts}

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