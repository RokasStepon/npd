import React from 'react';
import './Landing.scss';
import { IconScan, IconHome2, IconUser } from '@tabler/icons';

function Landing() {
  const products = [
    {
      name: 'Stretch jersey dress',
      subtitle: 'Women / Dresses',
      images: [
        '/images/dress/1.png',
        '/images/dress/2.png',
        '/images/dress/3.png',
        '/images/dress/4.png',
        '/images/dress/5.png',
      ],
      price: '1€',
      sizes: ["38", "40", "42", "44"],
      description: "This alluring, elegant Sheath dress is made of stretch jersey, a fabric with a soft, silky feel. Elegant minimalist design is combined with an innovative material in this style that embodies the brand's dual soul and its desire to re-elaborate the past from a modern perspective."
    }
  ];

  const [product, setProduct] = React.useState(products[0]);
  const [currentSize, setCurrentSize] = React.useState(0);
  const [activePicture, setaAtivePicture] = React.useState(0);

  // React.useEffect(() => {
  //   if (!!getEmail(location.search) || (!!email && email != '')) {
  //     updateGeneralState({ email });

  //     trackEvent(email, TrackEventTypes.purchasePageViewed, {});
  //   }
  // }, [location.search, email]);

  return (
    <div className='wrapper'>
    <div className="Landing">
    <img className="main-photo" src={product.images[0]} />
    <div className='product-container'>
      <div className='subtitle'>
        <span>{product.subtitle}</span>
        <span>Price</span>
      </div>
      <div className='heading'>
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <div className='pictures'>
        {product.images.map((image, key) => <img src={image} />)}
      </div>

      {!!product.sizes && <div className='sizes'>
        <div className='titles'>
        <span>Size</span>
        <span>Size guide</span>
        </div>
        <div className='size-selection'>
        {product.sizes.map((size, key) => <span className={key === currentSize ? 'active' : ''} onClick={()=> setCurrentSize(key)}>{size}</span>)}
        </div>
        
      </div>}

      <div className='description'>
        <span>Description</span>
        <p>{product.description}</p>
      </div>
    </div>

    </div>
    <div className='footer'>
      <div className='buttons'>
        <IconHome2 />
        <IconScan className='scan' />
        <IconUser />
      </div>
    </div>
    </div>
  );
}

export default Landing;
