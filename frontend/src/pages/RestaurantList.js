import React from 'react'
import { useState, useEffect } from 'react'

const RestaurantList = () => {
    const [shop, setShop] = useState([])

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
            <h2>{shop['0']['name']}</h2>
        </div>
    )
}

export default RestaurantList