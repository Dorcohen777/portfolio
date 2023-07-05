import lottie from 'lottie-web';
// import animationData from '../path/to/your/animation.json';
import { useEffect, useRef} from 'react';

export function Contact() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../assets/img/animateBox.json'),
    })
  }, [])

  return (
    <section className='contact-main'>
      <div className='contact-container'>
        <h2>Contact</h2>
        <p>
          <span className='bold'>phone:</span> 053-7171650
        </p>
        <p>
          <span className='bold'>mail:</span> dorcohen1337@gmail.com
        </p>
      </div>
      <div ref={animationContainer} className='lottie-container'></div>
    </section>
  );
}
