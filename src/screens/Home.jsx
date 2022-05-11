import React from 'react'
import Map from '../components/Map/Map';
import SearchTabs from '../components/SearchTabs/SearchTabs';
// import { TabPane, Tabs } from '../components/Tab/Tab';
import './Home.css'
const Home = () => {
    return (
        <>
            <div className='home'>
                <Map />
                <SearchTabs />
            </div>
        </>
    )
}

export default Home;