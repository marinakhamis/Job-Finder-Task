import React from 'react'
import Map from '../components/Map/Map';
import SearchTabs from '../components/SearchTabs/SearchTabs';
import Jobs from '../components/Jobs/Jobs';
// import { TabPane, Tabs } from '../components/Tab/Tab';
import './Home.css'
import Candidates from '../components/Candidates/Candidates';
const Home = () => {
    return (
        <>
            <div className='home'>
                {/* <Map /> */}
                {/* <SearchTabs /> */}
                <Jobs />

                <Candidates />

            </div>
        </>
    )
}

export default Home;