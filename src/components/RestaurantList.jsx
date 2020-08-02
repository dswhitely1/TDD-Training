import React, {useEffect} from 'react';

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

export default RestaurantList;
