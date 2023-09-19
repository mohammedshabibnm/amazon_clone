
import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css"

import 'swiper/css';
 function Baag(){
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className='slidesimg1'>
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/61w9XoA1edL._AC_SY400_.jpg" alt="" />
    {/* <div className="reds">
        <div className='redscolurss'>
        <span>up to 90% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div>

    <div className='prizes'>
<span >Newly Launched boAt Lunar Vista Smart..</span>

    </div> */}
    </div></SwiperSlide>
      
      <SwiperSlide><div className='slidesimg1'>
        
        
        
      <img width={200} height={240} src="https://m.media-amazon.com/images/I/51+UotA4ExL._AC_SY400_.jpg" alt="" />
    {/* <div className="reds">
        <div className='redscolurss'>
        <span>up to 14% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div>

    <div className='prizes'>
<span >Best offer on oppo</span>

    </div> */}
        
        </div></SwiperSlide>
     
     
     
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/618U3WubKhL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds">
          <div className='redscolurss'>
          <span>up to 14% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Nokia 2660 4G</span>
  
      </div> */}
          
          </div></SwiperSlide>


      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/61egMfcDWlL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds">
          <div className='redscolurss'>
          <span>up to 47% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Best offer on v-guard </span>
  
      </div> */}
          
          </div></SwiperSlide>

      <SwiperSlide><div className='slidesimg1'>
        
        
        
      <img width={200} height={240} src="https://m.media-amazon.com/images/I/51mN-RUnn5L._AC_SY400_.jpg" alt="" />
    {/* <div className="reds">
        <div className='redscolurss'>
        <span>up to 90% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div>

    <div className='prizes'>
<span >Asian footwear</span>

    </div> */}
        
        </div></SwiperSlide>
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/81ha67yYQuL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds">
          <div className='redscolurss'>
          <span>up to 9% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Electronic acceseries</span>
  
      </div> */}
          
          </div></SwiperSlide>
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/61CNGisjWUL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds">
          <div className='redscolurss'>
          <span>up to 90% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
  
      <div className='prizes'>
  <span >Water science</span>
  
      </div> */}
          
          </div></SwiperSlide>
   
    </Swiper>
  );
};
export default Baag