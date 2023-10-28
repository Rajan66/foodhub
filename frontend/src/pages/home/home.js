import React, { useState } from 'react'
import Header from '../../components/common/header/header'
import TabOptions from '../../components/common/tabOptions/tabOptions'
import Footer from '../../components/common/footer/footer'
import Delivery from '../../components/delivery/delivery'
import DiningOut from '../../components/diningOut/diningOut'
import Nightlife from '../../components/nightlife/nightlife'



const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
        default:
            return <Delivery/>
    }
}

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
        //     <Router>
        //     <div className="App">
        //       <Header />
        //       <Routes>
        //         <Route path='/' Component={RestaurantList} />
        //         <Route path='/register' Component={Register} />
        //         <Route path='/login' Component={Login} />
        //       </Routes>
        //     </div>
        //   </Router>

        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )

}

export default HomePage