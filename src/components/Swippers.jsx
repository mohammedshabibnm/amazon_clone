import { Swiper, SwiperSlide } from 'swiper/react';
import "../App.css"

import 'swiper/css';
 function Swippers(){
  return (
    
    <div className='aaab'>
    <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

      
    >
      <SwiperSlide><div className='slidesimg1'>
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/5138OY3aTTL._AC_SY400_.jpg" alt="" />
    {/* <div className="reds">
        <div className='redscolurss'>
        <span>up to 90% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div> */}

    <div className='prizes'>
<span >ROADED CYCLES</span>

    </div>
    </div></SwiperSlide>
      
      <SwiperSlide><div className='slidesimg1'>
        
        
        
      <img width={200} height={240} src="https://m.media-amazon.com/images/I/41gMRVHL6JL._AC_SY400_.jpg" alt="" />
    {/* <div className="reds">
        <div className='redscolurss'>
        <span>up to 14% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div> */}

    <div className='prizes'>
<span >HERCULES CYCLE</span>

    </div>
        
        </div></SwiperSlide>
     
     
     
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/71lFL-vussL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds"> */}
          {/* <div className='redscolurss'>
          <span>up to 14% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div>
   */}
      <div className='prizes'>
  <span >STRYDER CYCLE</span>
  
      </div>
          
          </div></SwiperSlide>


      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/81ziL3uUfyL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds">
          <div className='redscolurss'>
          <span>up to 47% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div> */}
  
      <div className='prizes'>
  <span >ROODLE CYCLE</span>
  
      </div>
          
          </div></SwiperSlide>

      <SwiperSlide><div className='slidesimg1'>
        
        
        
      <img width={200} height={240} src="https://m.media-amazon.com/images/I/71-ILafx3LL._AC_SY400_.jpg" alt="" />
    {/* <div className="reds">
        <div className='redscolurss'>
        <span>up to 90% off</span>
        </div>
        <span className='fonnt' >Deal of the day</span>
    </div> */}

    <div className='prizes'>
<span >HERCULES MODELS</span>

    </div>
        
        </div></SwiperSlide>
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/61sykXDMGwS._AC_SY400_.jpg" alt="" />
      {/* <div className="reds">
          <div className='redscolurss'>
          <span>up to 9% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div> */}
  
      <div className='prizes'>
  <span >CHILD CYCLES</span>
  
      </div>
          
          </div></SwiperSlide>
      <SwiperSlide><div className='slidesimg1'>
        
        
        
        <img width={200} height={240} src="https://m.media-amazon.com/images/I/817+y7gb1VL._AC_SY400_.jpg" alt="" />
      {/* <div className="reds"> */}
          {/* <div className='redscolurss'>
          <span>up to 90% off</span>
          </div>
          <span className='fonnt' >Deal of the day</span>
      </div> */}
  
      <div className='prizes'>
  <span >HERO CYCLES</span>
  
      </div>
          
          </div></SwiperSlide>
   
    </Swiper>
    </div>
  );
};
export default Swippers