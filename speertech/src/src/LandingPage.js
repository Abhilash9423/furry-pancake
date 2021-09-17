import React,{useEffect,useState} from 'react';
import "../styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../Image 1/Image1.png'
import image2 from '../Image 1/Image2.png'
import "../Slider.css";
import image3 from '../Image 1/Image3.png'
import GradientButton from 'react-linear-gradient-button';
import *  as Falcons from 'react-icons/fa';
import { Link } from 'react-router-dom'
import medium17 from '../Image 1/White Button Hover on Red/medium17.png'
import medium27 from '../Image 1/White Button Hover on Red/medium27.png'
import smallSpeaker1 from '../Image 1/Burger Menu open on blue/SmallSpeaker1-03.png'
import smallSpeaker2 from '../Image 1/Burger Menu open on blue/SmallSpeaker2-03.png'
import * as AiIcons from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {useHistory} from 'react-router-dom'
function LandingPage(props) {
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
    let history = useHistory();
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
        <div  >
        <div style={{ backgroundImage: `url(${images[count]})`, backgroundSize: 'cover', height: 1080, width: "100%", position: 'relative' }} >
           {/* ONE */}
            <div className='navbar' style={{ position: 'relative' }} >
              {/* <Link to='#' className='menu-bars'  > */}
                <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
              {/* </Link> */}
              <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
            </div>
          
          <div style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 500, textAlign: 'center' }} >INTERACTIVE CONCERT EXPERIENCE</div>
          <div style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }} >Experience your favourite artists like never before and from the comfort of your own home.</div>
          <div className="centered" style={{ marginTop: 10 }}  >
            <GradientButton onClick={()=>history.push("/pricing")} >Try it now</GradientButton>;
          </div>
  
          <div className="container-dots" >
            {Array.from({ length: 3 }).map((item, index) => (
              <div
                onClick={() => setCount(index)}
                className={index === count ? "dot active" : "dot"} ></div>
            ))}
          </div>
        </div>
  
        <div className="main_one" >
            {/* Two */}
          <div style={{ width: "50%", float: 'left', border: "5px", borderWidth: "2px", backgroundColor: "#D34848", height: "1080px", borderColor: 'black' }}  >
                        <div className='navbar' style={{ position: 'relative' }} >
                <Link to='#' className='menu-bars'  >
                  <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
                </Link>
                <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
              </div>
           
            <div style={{ position: 'relative', top: "20%" }} >
              <p style={{ display: "inline-block", color: 'white', fontSize: 55 }} > SUPERIOR SOUND </p>
            </div>
  
            <div style={{ position: 'relative', top: "20%",textAlign:'center' }} >
              <p style={{ display: "inline-block", color: 'black', fontSize: 40, textAlign: 'center', lineHeight: "1.5em", height: "3em", overflow: "hidden", whiteSpace: 'pre-wrap' }} >{text}</p>
            </div>
          </div>
  
  
          <div style={{ width: "49%", float: 'right', border: "5px", borderWidth: "2px", backgroundColor: "#D34848", height: "1080px", borderColor: 'black' }}>
            <div style={{ position: 'relative', float: 'right', right: '5%', top: "5%" }} >
              <GradientButton onClick={()=>history.push("/pricing")}  >Try it now</GradientButton>;
            </div>
            <div style={{ position: 'relative',top:"15%" }} >
            <img src={medium17} ></img>
          </div>
          <div>
            <img style={{ position: 'relative',left:"40%"}} src={medium27}  ></img>
          </div>
          </div>
        </div>
   
        <div className="main_three" >
            {/* Three */}
            <div style={{ width:"38%",float:'left',position:'relative', border: "5px", borderWidth: "2px",height: "1080px", borderColor: 'black' }} >
            <div className='navbar' style={{ position: 'relative' }} >
            <Link to='#' className='menu-bars'  >
            <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
            </Link>
            <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
            </div>
            
                </div>
                <div style={{width:"60%",float:'right',position:'relative', border: "5px", borderWidth: "2px",height: "1080px", borderColor: 'black'}} >
                <div style={{ position: 'relative', float: 'right', right: '5%', top: "5%" }} >
                  <GradientButton  onClick={()=>history.push("/pricing")} >Try it now</GradientButton>;
                  </div>
                  <div style={{color:"white",position:'relative',top:"30%",fontSize:"40px"}} >
                      <h1>FRONT ROW SEATS</h1>
                  </div>
                  <div style={{color:"Black",position:'relative',top:"30%",fontSize:"35px"}} >
                    <p >{textTwo}</p>
                  </div>
                  <div style={{ position: 'relative', top: "30%" }} >
                  <GradientButton   >See Demo</GradientButton>;
                  </div>
                </div>
          </div>

          <div className="main_four" >
              {/* Four */}
              <div style={{width:"33%",margin:"0px",float:"left",borderColor:"white",height:"1080px"}} >
              
              <div className='navbar' style={{ position: 'relative' }} >
                <Link to='#' className='menu-bars'  >
                  <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
                </Link>
                <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
              </div>
           
              <p style={{position:"relative",color:'white',fontSize:"50px",top:"10%"}} >PERKS </p>
              <hr style={{position:"relative",width:"50px",borderColor:"#D34848",top:"10%",right:"12%"}} ></hr>
              <div style={{position:"relative",color:"#D34848",fontSize:"50px",top:"10%",left:"30%",whiteSpace:"pre-line"}} > {textThree}</div>
              
              <div style={{position:"relative",color:"white",fontSize:"30px",top:"10%",left:"30%",whiteSpace:"pre-line"}} > {textFour}</div>
              </div>
  
              
              <div style={{width:"33%",margin:"0px",float:"right",borderWidth:"2px",borderColor:"white",height:"1080px"}}>
              <div style={{ position: 'relative', float: 'right', top: "5%" }} >
                  <GradientButton onClick={()=>history.push("/pricing")}  >Try it now</GradientButton>;
                  </div>
                 {/* yellow  */}
               <div style={{position:"relative",top:"25%",alignContent:'center',textAlign:'center'}} >
              <hr style={{position:"relative",width:"50px",borderColor:"#FFB33F",top:"25%",right:"25%"}} ></hr>
              <div style={{position:"relative",color:"#FFB33F",fontSize:"50px",top:"25%",whiteSpace:"pre-line"}} > {textThree}</div>
              
              <div style={{position:"relative",color:"white",fontSize:"30px",top:"25%",whiteSpace:"pre-line"}} > {textFour}</div>
              </div>  
              </div>
 
              <div style={{width:"33%",margin:"0px",float:"left",borderWidth:"2px",borderColor:"white",height:"1080px"}} >
                {/* blue */}
              
              <hr style={{position:"relative",width:"50px",borderColor:"#1FE1E9",top:"25%",right:"14%"}} ></hr>
              <div style={{position:"relative",color:"#1FE1E9",fontSize:"50px",top:"25%",left:"30%",whiteSpace:"pre-line"}} > {textSix}</div>
              
              <div style={{position:"relative",color:"white",fontSize:"30px",top:"25%",left:"30%",whiteSpace:"pre-line"}} > {textFour}</div>
              </div>

          </div>
          <div className="main_five"> 
                  {/* {/* Five */}
                 <div style={{width:"30%",margin:"0px",float:"left",borderWidth:"2px",borderColor:"white",height:"1080px"}} >
               
                   <div className='navbar' style={{ position: 'relative' }} >
                    <Link to='#' className='menu-bars'  >
                   <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
                  </Link>
                  <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
               </div>
              
              <div style={{ position: 'relative',top:"15%",right:"15%" }} >
                  <img src={smallSpeaker1} ></img>
                 </div>
                 <div style={{ position: 'relative',bottom:"10%", right:"15%"}} >
                  <img src={smallSpeaker2} ></img>
                 </div>
                </div>
                <div style={{width:"20%",margin:"0px",float:"left",borderWidth:"2px",borderColor:"white",height:"1080px"}} >
                  <p style={{position:'relative',top:'25%',color:'white',fontSize:"60px"}} >REVIEWS</p>
                  <div style={{position:'relative',top:"20%" ,fontSize:'33px'}} >
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  </div>
                  <p style={{position:'relative',top:'18%',color:'white',fontSize:"40px"}} >ARTIST</p>
  
                 <div style={{position:"relative",color:"black",fontSize:"20px",top:"15%",left:"5%",whiteSpace:"pre-line"}}>{textSeven}</div>
  
  
                </div>
                <div style={{width:"20%",margin:"0px",float:"left",borderWidth:"2px",borderColor:"white",height:"1080px"}}>
                <div style={{position:'relative',top:"38%" ,fontSize:'33px'}} >
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  </div>
                  <p style={{position:'relative',top:'36%',color:'white',fontSize:"40px"}} >PRODUCER</p>
                  <div style={{position:"relative",color:"black",fontSize:"20px",top:"33%",left:"5%",whiteSpace:"pre-line"}}>{textSeven}</div>
  
  
                </div>
                <div style={{width:"28%",margin:"0px",float:"left",borderWidth:"2px",borderColor:"white",height:"1080px"}}>
                <div style={{ position: 'relative', float: 'right', right: '5%', top: "5%" }} >
                  <GradientButton onClick={()=>history.push("/pricing")}  >Try it now</GradientButton>;
                  </div>
                  <div style={{position:'relative',top:"38%" ,fontSize:'33px'}} >
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  <AiIcons.AiFillStar/>
                  </div>
                  <p style={{position:'relative',top:'36%',color:'white',fontSize:"40px"}} >MUSIC FAN</p>
                  <div style={{position:"relative",color:"black",fontSize:"20px",top:"33%",left:"5%",whiteSpace:"pre-line"}}>{textSeven}</div>
                </div>
              </div>
  
        <div className="main_six" >
            {/* Six */}
              <div style={{width:"70%",float:'left' ,borderWidth:"2px",borderColor:"white",height:'814px'}} >
  
            <div className='navbar' style={{ position: 'relative' }} >
              <Link to='#' className='menu-bars'  >
                <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
              </Link>
              <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
            </div>
   
          <div style={{position:"relative",color:"#D34848",fontSize:"54px",top:"33%",right:"9%"}} >  GET EXP|CON NOW</div>
                <div style={{position:"relative",color:"#FFFFFF",fontSize:"54px",top:"33%",left:"5%"}} >  Purchase and download the app.</div>
  
              </div>
              <div style={{width:"28%",float:'left',borderWidth:"2px",borderColor:"white",height:'814px'}}>
              <div style={{ position: 'relative', float: 'right', right: '50%', top: "40%" }} >
                  <GradientButton  onClick={()=>history.push("/pricing")} >Try it now</GradientButton>;
                  </div>
              </div>
        </div>
  
  
  
        <div className="main_seven" >

          <div style={{marginLeft:40,marginTop:50,display: "inline-block"}} >
              <IoMdMail style={{color:'white',paddingTop:50 ,float:'left' }}/>
              <p style={{paddingTop:30,float:'left',color:'white',marginLeft:10,display: "inline-block"}}>  {emailID}</p>
          </div>
          <div style={{position:'relative',display: "inline-block",left:"25%",color:'white',top:'50%'}}>EXP|CON</div>
          < div style={{display: "inline-block",position:'relative',color:'white',left:"10%",top:"60%"}} >2019 © All Rights Reserved | Speer Technologies Incorporated</div>
        </div>       

      </div>
    );
}

export default LandingPage;