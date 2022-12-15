import React from 'react';
import './Landing.scss';
import { IconScan, IconHome2, IconUser } from '@tabler/icons';

function Landing() {
  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

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
    <>
    <div className='wrapper'>
    <div className="Landing">
    <img className="main-photo" src={product.images[activePicture]} />
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
        {product.images.map((image, key) => <img className={key === activePicture ? 'active' : ''} onClick={()=> setaAtivePicture(key)} src={image} />)}
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
      <div className='payments'>
       {getMobileOperatingSystem() != "Android" && <img src="https://developer.apple.com/design/human-interface-guidelines/technologies/apple-pay/images/button-pay-with_2x.png" />}
       {getMobileOperatingSystem() == "Android" && <img src="https://www.ccbank.bg/web/files/richeditor/fizicheski-lica/bankovi-karti/kartovi-uslugi/Add_to_GPay.png" />}

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
    <div className='desktop'>
      <img style={{margin:"0px auto", display:"flex"}} src="https://media1.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif?cid=ecf05e47oiiv9fqsp3rj44thb4jn9w2zvqw2gdtrqkz3zn1b&rid=giphy.gif&ct=g" />
    </div>
    </>
  );
}

export default Landing;
