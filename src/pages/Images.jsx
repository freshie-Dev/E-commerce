import React from 'react'
import FormatPrice from '../helpers/FormatPrice';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpg';
import pic3 from '../assets/pic-3.jpg';
import pic4 from '../assets/pic-4.jpg';



export default function Images(props) {
    const {image, price} = props;

    const [mainImage, setMainImage] = React.useState(image);


  return (
    <div className='flex flex-col justify-between'>
        <figure className=''>
            <img src={mainImage} alt="shirt image" className='max-h-[30vh]  md:max-h-[50vh] mx-auto' />
        </figure>
        <div className='grid grid-cols-4 gap-1 mt-2 '>
            <img src={image} alt="shirt image"  className=' h-[70px] mx-auto rounded-2xl'  onClick={() => setMainImage(image)}/>
            <img src={pic1} alt="shirt image"  className='w-[70px] h-[70px] mx-auto rounded-2xl'  onClick={() => setMainImage(pic1)}/>
            <img src={pic2} alt="shirt image"  className='w-[70px] h-[70px] mx-auto rounded-2xl'  onClick={() => setMainImage(pic2)}/>
            <img src={pic3} alt="shirt image"  className='w-[70px] h-[70px] mx-auto rounded-2xl'  onClick={() => setMainImage(pic3)}/>
        </div>
    </div>
  )
}
