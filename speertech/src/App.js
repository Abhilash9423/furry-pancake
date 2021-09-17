import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from './Image 1/Image1.png'
import image2 from './Image 1/Image2.png'
import "./Slider.css";
import image3 from './Image 1/Image3.png'
import { useEffect, useState } from 'react';
import GradientButton from 'react-linear-gradient-button';
import *  as Falcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import medium17 from './Image 1/White Button Hover on Red/medium17.png'
import medium27 from './Image 1/White Button Hover on Red/medium27.png'
import smallSpeaker1 from './Image 1/Burger Menu open on blue/SmallSpeaker1-03.png'
import smallSpeaker2 from './Image 1/Burger Menu open on blue/SmallSpeaker2-03.png'
import * as AiIcons from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import Pricing from "./src/Pricing";
import LandingPage  from "./src/LandingPage";
import Perks from "./src/Perks";


function App() {

  const [count, setCount] = useState(0)
  const images = [image1, image2, image3]
  const text = "Experience live versions of your \n favourite songs."
  const textTwo = "Experience concerts up close and \n personal."
  const textThree = "Subscription\nPayment\nModel"
  const textFour = "No commitment,\ncancel anytime. Never\nworry about forgetting\na payment again!"
  const textFive = "Subscription\nPayment\nModel"
  const textSix = "No Fee\nCancelation\nPolicy"
  const textSeven = "“Love it, it’s the\nBest.I can’t live\nwithout it!”"
  const emailID = "   support@experienceconcerts.co"
  useEffect(() => {
    const timer = setInterval(() => {
      if (count >= 2) {
        setCount(0)
      }
      else {
        setCount(count + 1)
      }
    }, 10000);
    return () => clearInterval(timer);
  })

  return (
    <Router>
      <Route path='/' exact component={LandingPage} />
    <Route path="/Pricing" exact component={Pricing} />
    <Route path="/Perks" exact component={Perks} />
    </Router>
  );
}

export default App;
