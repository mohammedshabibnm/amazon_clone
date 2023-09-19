import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css"

import 'swiper/css';
 function Swipermethads(){
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className='slidesimg1'>
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/51uYcV5YgEL._AC_SY400_.jpg" alt="" />
    <div className="reds">
        <div className='redscolurss'>
        <span>up to 90% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div>

    <div className='prizes'>
<span >Newly Launched boAt Lunar Vista Smart..</span>

    </div>
    </div></SwiperSlide>
      
      <SwiperSlide><div className='slidesimg1'>
        
        
        
      <img width={200} height={240} src="https://m.media-amazon.com/images/I/41SYHl5edWL._AC_SY400_.jpg" alt="" />
    <div className="reds">
        <div className='redscolurss'>
        <span>up to 14% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div>

    <div className='prizes'>
<span >Best offer on oppo</span>

    </div>
        
        </div></SwiperSlide>
     
     
     
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/41-pE3cKMfL._AC_SY400_.jpg" alt="" />
      <div className="reds">
          <div className='redscolurss'>
          <span>up to 14% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Nokia 2660 4G</span>
  
      </div>
          
          </div></SwiperSlide>


      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/41XljH4YBaL._AC_SY400_.jpg" alt="" />
      <div className="reds">
          <div className='redscolurss'>
          <span>up to 47% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Best offer on v-guard </span>
  
      </div>
          
          </div></SwiperSlide>

      <SwiperSlide><div className='slidesimg1'>
        
        
        
      <img width={200} height={240} src="https://m.media-amazon.com/images/I/51dtEUJ0gbL._AC_SY400_.jpg" alt="" />
    <div className="reds">
        <div className='redscolurss'>
        <span>up to 90% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div>

    <div className='prizes'>
<span >Asian footwear</span>

    </div>
        
        </div></SwiperSlide>
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY400_.jpg" alt="" />
      <div className="reds">
          <div className='redscolurss'>
          <span>up to 9% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Electronic acceseries</span>
  
      </div>
          
          </div></SwiperSlide>
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/31iKAfh6LdL._AC_SY400_.jpg" alt="" />
      <div className="reds">
          <div className='redscolurss'>
          <span>up to 90% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Water science</span>
  
      </div>
          
          </div></SwiperSlide>
   
    </Swiper>
  );
};
export default Swipermethads