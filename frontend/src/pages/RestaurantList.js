import React from 'react'
import { useState, useEffect } from 'react'
import ListShop from '../components/ListShop'

const RestaurantList = () => {
    const [shops, setShop] = useState([])

    useEffect(() => {
        getShop()
    }, [])

    let getShop = async () => {
        let response = await fetch('/api/')
        let data = await response.json()
        console.log(data)
        setShop(data)
    }

    return (
        <div>
            <h2>&#9782; Shops</h2>
            <p>{shops.length}</p>
            {
                shops.map((shop, index) => (
                    <ListShop key={index} shop={shop} />
                ))
            }
        </div >
    )
}

export default RestaurantList