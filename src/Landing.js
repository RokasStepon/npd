import React from 'react';
import './Landing.scss';
import { IconScan, IconHome2, IconUser } from '@tabler/icons';
import { useLocation, Link } from 'react-router-dom';
import Modal from 'react-modal';
import qs from 'qs';

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
      price: '600€',
      sizes: ["38", "40", "42", "44"],
      description: "This alluring, elegant Sheath dress is made of stretch jersey, a fabric with a soft, silky feel. Elegant minimalist design is combined with an innovative material in this style that embodies the brand's dual soul and its desire to re-elaborate the past from a modern perspective."
    },
    {
      name: 'Pizza lover painting',
      subtitle: 'Pizza is Life / Paintings',
      images: [
        '/images/pizza/1.png',
        '/images/pizza/2.png',
        '/images/pizza/3.png',
        '/images/pizza/4.png',
        '/images/pizza/5.png',
      ],
      price: '1200€',
      sizes: ["20x25", "30x45", "45x60", "60x75"],
      description: "Need a splash of color in your kitchen, dining, or restaurant? Need a fun unique gift for a pizza lover? This Pizza Art Print is exactly what you are looking for!"
    }
  ];
  const location = useLocation();
  const [product, setProduct] = React.useState(products[0]);
  const [currentSize, setCurrentSize] = React.useState(0);
  const [activePicture, setaAtivePicture] = React.useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const queryParams = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
  
    if (queryParams && typeof queryParams.product === 'string') {
      let index = parseInt(queryParams.product)-1;
      if (products[index] !== product)  setProduct(products[index]);
    }
    }, [location.search]);

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setIsOpen(false)}
        contentLabel="Are you ready?"
        className="modal"
      >
        <div className='container'>
      <img className="pablo" src="https://media3.giphy.com/media/jc2PkKKr3clTBekMzn/giphy.gif?cid=ecf05e47w2lbhmj3rjlfhbwfkx9my1nsrtk9yn64bi93gkd0&rid=giphy.gif&ct=g" />
      <p>
        Please confirm your details below, sit back and relax, <b>while we do the rest!</b> <br /><br />
        Your address: <b>Hogwarts School of Witchcraft and Wizardry, Scottish Highlands, United Kingdom</b><br /><br />
        Estimated delivery: <b>Dec. 20th - 22nd</b>
      </p>
      {getMobileOperatingSystem() != "Android" && <Link to="/thank-you"><img src="https://developer.apple.com/design/human-interface-guidelines/technologies/apple-pay/images/button-pay-with_2x.png" /></Link>}
      {getMobileOperatingSystem() == "Android" && <Link to="/thank-you"><img src="https://www.ccbank.bg/web/files/richeditor/fizicheski-lica/bankovi-karti/kartovi-uslugi/Add_to_GPay.png" /></Link>}
      </div>
      </Modal>
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
        <button onClick={()=>setIsOpen(true)} class="button-27">BUY NOW</button>
       
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
