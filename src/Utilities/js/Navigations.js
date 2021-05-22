import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutUs from '../../Containers/AboutUs'
import ContactUs from '../../Containers/ContactUs'
import FAQ from '../../Containers/FAQ'
import HomePage from '../../Containers/HomePage'
import Volunteer from '../../Containers/Volunteer'

const Navigations = () => {
    return (
        <Switch>
            <Route exact path="/" render={HomePage}/>
            <Route exact path="/about" render={AboutUs}/>
            <Route exact path="/volunteer" render={Volunteer}/>
            <Route exact path="/contact" render={ContactUs}/>
            <Route exact path="/faq" render={FAQ}/>
        </Switch>
    )
}

export default Navigations
