import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import StockAlpha from './StockAlpha'
function Newsfeed() {
    return (
        <div className = "newsfeed">
            <div className = "newsfeed__container">
                <div className = "newsfeed__chartSection">
                    <div className = "newsfeed__portfolio">
                        <h1></h1>
                        <p></p>
                    </div>
                    <div className = "newsfeed__chart">
                        <StockAlpha />
                        {/*<LineGraph />*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
