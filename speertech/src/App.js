import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import image1 from './Image 1/Image1.png'
import image2 from './Image 1/Image2.png'
import image3 from './Image 1/Image3.png'
import { useEffect,useState } from 'react';
import GradientButton from 'react-linear-gradient-button';

function App() {
  
  const [count,setCount] = useState(0)
  const images = [image1,image2,image3]
  
  useEffect(()=>{
    const timer  = setInterval(()=>{
      if(count>=2){
      setCount(0)
      }
      else{
        setCount(count+1)
      }
    },10000 );
    return ()=> clearInterval(timer);
  })

  return (
    <div >
      
      {/* <div className="main_two" >
        <img  className="main_two" src={images[count]} alt=""/>  
      </div> */}
       
      
      <div  style={{ backgroundImage:`url(${images[count]})`,backgroundSize:'cover',height:1080,width:"100%",textAlign:'center',justifyContent:'center',alignItems:'center'}} >
       <p style={{color:'white',fontSize:20,fontWeight:'bold',paddingTop:500}} >INTERACTIVE CONCERT EXPERIENCE</p>
       <p style={{color:'white',fontSize:20,fontWeight:'bold'}} >Experience your favourite artists like never before and from the comfort of your own home.</p>
       <div className="centered" >
        <GradientButton   >BUTTON</GradientButton>;
        </div>
       </div>

       <div className="main_one" >
        {/* <p style={{color:'white'}} >  {count}</p>
        <p style={{color:'white'}} >screeen workked</p> */}
      </div>


      <div className="main_three" >
        {/* <p style={{color:'white'}} >  {count}</p>
        <p style={{color:'white'}} >screeen workked</p> */}
      </div>
      
      <div className="main_four" >
        {/* <p style={{color:'white'}} >  {count}</p>
        <p style={{color:'white'}} >screeen workked</p> */}
      </div>
      
      <div className="main_five" >
        {/* <p style={{color:'white'}} >  {count}</p>
        <p style={{color:'white'}} >screeen workked</p> */}
      </div>
      
      <div className="main_six" >
        {/* <p style={{color:'white'}} >  {count}</p>
        <p style={{color:'white'}} >screeen workked</p> */}
      </div>
      
      <div className="main_seven" >
        {/* <p style={{color:'white'}} >  {count}</p>
        <p style={{color:'white'}} >screeen workked</p> */}
      </div>
      

    </div>

  );
}

export default App;
