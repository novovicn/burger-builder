import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

import classes from "./NavigationItems.css"

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    )
}

export default NavigationItems
