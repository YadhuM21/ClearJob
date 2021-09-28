import React from 'react'
import './BodyImage.css'

function BodyImage() {
    return (
        <div>
            <div className="container_image">
                <img src="clearJob_Logo.jpg" className="image_clearjob d-block w-100" alt="..."/>
                {/* <div className="centered  d-none d-md-block">
                    <h2>Learn and Grow with Us</h2>
                </div> */}
            </div>
            {/* <div class="container">
                <img className="image_clearjob" src="clearJob_Logo.jpg" alt="Snow"/>
                <div className="centered  d-none d-md-block">
                    <h2>Learn and Grow with Us</h2>
                </div>
            </div> */}


            <div className="container_imagetwo">
                <h1>ROAD MAP</h1>
                <img src="roadmap.jpeg" className="image_two img-fluid d-block w-100" alt="..."/>
            </div>

            {/* <div className="product">
                <div className="product_info">
                    <h2>ROAD MAP</h2>
                </div>
                <img
                    src="clearJob_Logo.jpg"
                    alt=""
                />
            </div> */}
                        
        </div>
    )
}

export default BodyImage
