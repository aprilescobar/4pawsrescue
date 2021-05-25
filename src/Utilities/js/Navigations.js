import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutUs from '../../Containers/AboutUs'
import Adopt from '../../Containers/Adopt'
import ContactUs from '../../Containers/ContactUs'
import Donate from '../../Containers/Donate'
import FAQ from '../../Containers/FAQ'
import FosterStories from '../../Containers/FosterStories'
import HomePage from '../../Containers/HomePage'
import Locations from '../../Containers/Locations'
import MissionAndValues from '../../Containers/MissionAndValues'
import Volunteer from '../../Containers/Volunteer'

const Navigations = () => {
    return (
        <Switch>
            <Route exact path="/" render={HomePage}/>
            <Route exact path="/about" render={AboutUs}/>
            <Route exact path="/volunteer" render={Volunteer}/>
            <Route exact path="/contact" render={ContactUs}/>
            <Route exact path="/faq" render={FAQ}/>
            <Route exact path="/mission" render={MissionAndValues}/>
            <Route exact path="/adopt" render={Adopt}/>
            <Route exact path="/locations" render={Locations}/>
            <Route exact path="/donate" render={Donate}/>
            <Route exact path="/stories" render={FosterStories}/>
        </Switch>
    )
}

export default Navigations
