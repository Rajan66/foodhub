import React from 'react'

import { Link } from 'react-router-dom'

const ListShop = ({ shop }) => {


    return (
        <Link to={`/restaurant/${shop.id}`}>

            <h3>{shop.name}</h3>
        </Link>
    )
}

export default ListShop