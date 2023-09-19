import React from 'react'
import "../App.css"
import amz from "./vidios/amzvd.mp4"

function Vidioamz() {
    return ( 
<div>

<div className="heds">
<h4>Amazon Live | Watch, Chat & Shop LIVE</h4>

<a className='linkspadd' href="">See more from Amazon Live</a>

</div>

<div className="vidioamz">

<div className="vidiocont">

<video  className='vdsize' autoPlay muted src={amz}></video>

</div>

<div className="slicard">

<div className="slicard1">
    <div className="sliimg">
<img width={100} height={130} src="https://images-na.ssl-images-amazon.com/images/I/41g1pQr8xUL._SX240_QL100_AC_SCLZZZZZZZ_.jpg" alt="" />

    </div>

    <div className="nameph">
<span className='sizefon'>OnePlus 11R 5G (Sonic Black,<br /> 8GB RAM, 128GB Storage)</span>

    </div>

    <div className="prizetag">
<span className='textdecs'>₹39000</span>
<span className='textdec'>₹47000</span>

    </div>


</div>

<div className="slicard1">
    <div className="sliimg">
<img width={100} height={130} src="https://images-na.ssl-images-amazon.com/images/I/3144jXPtX4L._SX240_QL100_AC_SCLZZZZZZZ_.jpg" alt="" />

    </div>

    <div className="nameph">
<span className='sizefon'>Apple iPhone 14 (128 GB) - Starlight</span>

    </div>

    <div className="prizetag">
<span className='textdecs'>₹65900</span>
<span className='textdec'>₹79000</span>

    </div>


</div>


<div className="slicard1">
    <div className="sliimg">
<img width={100} height={130} src="https://images-na.ssl-images-amazon.com/images/I/41V4aNRci3L._SX240_QL100_AC_SCLZZZZZZZ_.jpg" alt="" />

    </div>

    <div className="nameph">
<span className='sizefon'>Samsung Galaxy S23 5G (Green, 8GB, 128GB</span>

    </div>

    <div className="prizetag">
<span className='textdecs'>₹74000</span>
<span className='textdec'>₹89000</span>

    </div>


</div>


<div className="slicard1">
    <div className="sliimg">
<img width={100} height={130} src="https://images-na.ssl-images-amazon.com/images/I/31laW9Ex46L._SX240_QL100_AC_SCLZZZZZZZ_.jpg" alt="" />

    </div>

    <div className="nameph">
<span className='sizefon'>Apple iPhone 14 Plus (128 GB) - Blue</span>

    </div>

    <div className="prizetag">
<span className='textdecs'>₹75000</span>
<span className='textdec'>₹89900</span>

    </div>


</div>






















































</div>































</div>





































</div>
     );
}

export default Vidioamz;