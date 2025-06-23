import { useState,useEffect } from 'react'
import Index from './Index'
import Section1 from './Section1'
import Slider from './Slider'
import Contact from './Contact'
import Footer from './Footer'
import Model from './Model'
import Effect from './effect'


function App() {
  const [isTrue, setIsTrue] = useState(false)
 

  console.log(isTrue)
  const backgroundColor = isTrue ? 'white' : "#101010"
  const textcolor=isTrue?"black":"white"

  useEffect(() => {
    // Disable scrolling on the body and html elements
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling when the component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const enableScrolling = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  return (
    <div className="overflow-hidden " style={{ backgroundColor }}>
      <div className='relative overflow-hidden h-screen w-screen' >
      <Index  className='h-full w-full ' isTrue={isTrue} setIsTrue={setIsTrue} textcolor={textcolor} bg={backgroundColor} enableScrolling={enableScrolling} />
      </div>
      <Section1 textcolor={textcolor} bg={backgroundColor} />
      <Slider />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App