import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        
<div className='relative'>



    <Carousel
    autoPlay
    infiniteLoop
    showStatus={false}
    showIndicators={false}
    showThumbs={false}
    interval={3000}
    >
<div>
  
    <img loading='lazy' src="/one.png" alt="" />
</div>
<div>
<img loading='lazy' src="/two.png" alt="" />
</div>
<div>
<img loading='lazy' src="/one.png" alt="" />
</div>

    </Carousel>
</div>
  
    )
}

export default Banner
