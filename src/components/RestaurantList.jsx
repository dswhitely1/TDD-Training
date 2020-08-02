import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions.js';

export const RestaurantList = ({loadRestaurants, restaurants}) => {

    useEffect(() => {
        loadRestaurants();
    }, [loadRestaurants])

    return (
        <ul>
            {restaurants.map(({id, name}) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
    )
}

const mapStateToProps = state => ({
    restaurants: state.restaurants.records
})
const mapDispatchToProps = {loadRestaurants}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
