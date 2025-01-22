import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import Clear from '../assets/image/Clear.jpg';
import Cloudy from '../assets/image/Cloudy.jpg';
import fog from '../assets/image/fog.png';
import Rainy from '../assets/image/Rainy.jpg';
import Stormy from '../assets/image/Stormy.jpg';
import Sunny from '../assets/image/Sunny.jpg';
import snow from '../assets/image/snow.jpg';


const BackgroundLayout = () => {
  const {weather} = useStateContext()
  const [image, setImage] = useState(Clear);

  useEffect(()=>{
    if(weather.conditions){
      let imageString = weather.conditions;
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear);
      }
      else if(imageString.toLowerCase().includes('cloudy')){
        setImage(Cloudy);
      }
      else if(imageString.toLowerCase().includes('fog')){
        setImage(fog);
      }
      else if(imageString.toLowerCase().includes('rainy') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy);
      }
      else if(imageString.toLowerCase().includes('stormy') || imageString.toLowerCase().includes('thunder')){
        setImage(Stormy);
      }
      if(imageString.toLowerCase().includes('snow')){
        setImage(snow);
      }
      else if(imageString.toLowerCase().includes('sunny')){
        setImage(Sunny);
      }
    }
  }, [weather]);

  return (
    <div>
      <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
    </div>
  )
}

export default BackgroundLayout
