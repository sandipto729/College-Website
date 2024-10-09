import PopUp from './PopUp';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from  './GalleryPresentation.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import required modules

import img1 from '../../assets/dgp1.jpg'
import img2 from '../../assets/dgp2.jpg'
import img3 from '../../assets/dgp3.jpg'
import img4 from '../../assets/dgp4.jpeg'
import img5 from '../../assets/dgp5.jpeg'
import img6 from '../../assets/dgp6.jpeg'
import img7 from '../../assets/dgp7.jpeg'
import img8 from '../../assets/dgp8.jpg'
import img9 from '../../assets/dgp9.jpeg'
import img10 from '../../assets/dgp10.jpg'
import img11 from '../../assets/dgp11.jpeg'
import img12 from '../../assets/dgp12.jpeg'
import Navbar from '../../Layout/Navbar';

import Headroom from 'react-headroom'


function GalleryPresentation(){

  const [popUp,setPopUp]=useState(false)
  const [popUpImage,setPopUpImage]=useState({})
  const imageDetails=[img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
  
function OpenPopUp(){
  setPopUp(true)
}

function ClosePopUp(){
setPopUp(false)
}
function showImage(image){

  setPopUpImage(image)
  setPopUp(true)

}

const ImageDetails=imageDetails;
const  images=ImageDetails


    var randomImages = (images)

    if(randomImages.length>10)randomImages=randomImages.slice(0,10);

    return (

<div className="flex flex-col h-screen  bg-gradient-to-r from-cyan-300 to-white-200">
<div  className={styles.Container}>
<Swiper
 spaceBetween={30}
 centeredSlides={true}
 autoplay={{
   delay: 2500,
   disableOnInteraction: false,
 }}
 pagination={{
   clickable: true,
 }}
 navigation={true}
 modules={[Autoplay, Pagination, Navigation]}
 className={styles.Swiper}        
 style = {{
  display:popUp?'none':'block'
}}

      >
      {randomImages.map((images,index)=>{
      return (
        <SwiperSlide   key={index}
        className={styles.SwiperSlide}>
        <img  src={images} 
        />

        </SwiperSlide>
    )
        })                
       }
</Swiper> 
{/* Create Grid Page */ }
<div className={styles.Gallery}>
{images.map((items,index)=>{
return (
<div key={index} >
<img
className={styles.images}
src={items}
onClick={()=>showImage(items)}
/>
</div>  
)
})
}
{popUp && <PopUp image={popUpImage} OpenPopUp={OpenPopUp} ClosePopUp={ClosePopUp}/>}

</div>


</div>
</div>

    )
  }

export default GalleryPresentation