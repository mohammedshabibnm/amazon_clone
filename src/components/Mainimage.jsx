import React from 'react'
import "../App.css"

function Mainimage() { 
    return (

<div>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className='mainimg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/TOD_1500x600_withoutmock._CB596626071_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='mainimg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img className='mainimg' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Unrec/R1/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200_2._CB597781013_.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev patti" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Previous</span> */}
  </button>
  <button class="carousel-control-next patti" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Next</span> */}
  </button>
</div>




</div>
















      );
}

export default Mainimage;