import React from 'react'
import {Carousel} from 'antd'
function ImageSlider(props) {
    return (
        <div>
            <Carousel onSelectFocus={true} focusOnSelect>
            {props.images.map((image,index)=>(
                <div key={index}>
                <img style={{ width: '50px', height: '50px' }}
                src={image} alt="productImage" />
            </div>
            ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
