import React from 'react'

export default function Home(props) {
    // console.log("Home Compontes",props)
  return (
    <div>
        <div className='add-to-cart img'>
            <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png'/>
        </div>
        <h1>Home</h1>
        <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://media.croma.com/image/upload/v1664009499/Croma%20Assets/Communication/Mobiles/Images/243460_13_wlihld.png"/>
        </div>
        <div className='text-wrapper item'>
            <span>
                IPhone
            </span>
            <span>
                Price:$1000.00
            </span>
        </div>
        <div className='btn-wrapper item'>
        <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
        </div>
        </div>

    </div>
    
  )
}
