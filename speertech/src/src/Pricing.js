import React from 'react';
import *  as Falcons from 'react-icons/fa';
import "../Slider.css";
import {IoMdMusicalNote} from 'react-icons/io'
import GradientButton from 'react-linear-gradient-button';
import { Link } from 'react-router-dom';
import {IoMdMail} from 'react-icons/io'
import {useHistory} from 'react-router-dom'

function Pricing(props) {
    const textOne= "Test out our app today! Choose from three subscription\nBased payment models."
    const textThree = "Subscription\nPayment\nModel"
    const textFour = "No commitment,\ncancel anytime. Never\nworry about forgetting\na payment again!"
    const textSix = "No Fee\nCancelation\nPolicy"
    const emailID = "   support@experienceconcerts.co"
    const cost_pricing = ['Basic','Advanced','Pro']
    let history = useHistory();
    return (
        <div>
           <div className="main_Pricingfour">
           <div style={{height:"10%"}} >
           <div className='navbar' style={{ position: 'relative' }} >
                <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
              <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
            </div>
            </div>
            <div style={{position:'relative',height:"20%",whiteSpace: 'pre-wrap'}}>

                    <div style={{position:'relative',display: "inline-block",fontSize:'54px',color:'white',left:'10%'}}>
                         PRICING
                    </div>
                    
                    <div style={{position:'relative',fontSize:'34px',color:'white',textAlign:'center'}}>
                        Test out our app today! Choose from three subscription\nBased payment models.
                    </div>
            </div>     
           
            <div style={{position:'relative',height:"68%",whiteSpace: 'pre-wrap'}} >
                <div style={{position:'relative',height:'100%',width:'33%',float:'left'}}>
                <p style={{position:"relative",color:'#D34848',fontSize:"50px",top:"12%",left:"30%"}} >Basic </p>
              <hr style={{position:"relative",width:"80px",borderColor:"#D34848",top:"10%",right:"12%"}} ></hr>
              <div style={{position:"relative",color:"#D34848",fontSize:"50px",top:"10%",left:"30%",whiteSpace:"pre-line"}} >MONTHLY</div>
              
              <div style={{position:"relative",color:"#D34848",fontSize:"60px",top:"10%",left:"30%",whiteSpace:"pre-line"}} > $9</div>

                <div style={{alignItems:'left',position:'relative',justifyContent: "center",top:"12%"}} >  
              <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Very good</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Amazing </span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Perfect job</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Love this</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> It’s so good</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Features</span>
                </div>
                <button style={{ position:'relative',left:"25%",color:"white",width:"15%" ,borderRadius:"10px",backgroundColor:"#D24848" }} onClick={()=>history.push("/Perks")} >Select</button>

                </div>
                </div>

                <div style={{position:'relative',height:'100%',width:'33%',float:'left'}}>
                <p style={{position:"relative",color:'#FFB33F',fontSize:"50px",top:"12%",left:"30%"}} >Advanced </p>
              <hr style={{position:"relative",width:"80px",borderColor:"#FFB33F",top:"10%",right:"12%"}} ></hr>
              <div style={{position:"relative",color:"#FFB33F",fontSize:"50px",top:"10%",left:"30%",whiteSpace:"pre-line"}} >YEARLY</div>
              
              <div style={{position:"relative",color:"#FFB33F",fontSize:"60px",top:"10%",left:"30%",whiteSpace:"pre-line"}} > $99</div>

                <div style={{alignItems:'left',position:'relative',justifyContent: "center",top:"12%"}} >  
              <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Very Very good</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Even Amazing </span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Perfect job</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> Love this more</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span> It’s so so good</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%",right:"15%"}}>
                <IoMdMusicalNote size={20}/><span>More Features</span>
                </div>
                <button style={{ position:'relative',left:"25%",color:"white",width:"15%" ,borderRadius:"10px",backgroundColor:"#FFB33F" }} onClick={()=>history.push("/Perks")} >Select</button>

                </div>

                </div>
                <div style={{position:'relative',height:'100%',width:'33%',float:'left',alignItems:'center'}}>
                <p style={{position:"relative",color:'#1FE1E9',fontSize:"50px",top:"12%",textAlign:'center'}} >Pro </p>
              <hr style={{position:"relative",width:"80px",borderColor:"#1FE1E9",top:"10%"}} ></hr>
              <div style={{position:"relative",color:"#1FE1E9",fontSize:"50px",top:"10%",whiteSpace:"pre-line",textAlign:'center'}} >YEARLY</div>
              
              <div style={{position:"relative",color:"#1FE1E9",fontSize:"60px",top:"10%",whiteSpace:"pre-line",textAlign:'center'}} > $120</div>

                <div style={{alignItems:'left',position:'relative',justifyContent: "center",top:"12%"}} >  
              <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%"}}>
                <IoMdMusicalNote size={20}/><span> Very Very good</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%"}}>
                <IoMdMusicalNote size={20}/><span> Even more </span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%"}}>
                <IoMdMusicalNote size={20}/><span> Perfect job</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%"}}>
                <IoMdMusicalNote size={20}/><span> Love this more</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%"}}>
                <IoMdMusicalNote size={20}/><span> It’s so so good</span>
                </div>
                <div style={{position:'relative',display: "flex", justifyContent: "center",color:'white',fontSize:'20px',top:"12%"}}>
                <IoMdMusicalNote size={20}/><span> more Features</span>
                </div>
                <button style={{ position:'relative',left:"40%",color:"white",width:"15%" ,borderRadius:"10px",backgroundColor:"#1FE1E9",alignSelf:'center' }} onClick={()=>history.push("/Perks")} >Select</button>

                </div>

                </div>
            
            
            </div>
           
           </div>
           
           
           
           <div className="main_PricingOne" >
           <div style={{width:"33%",margin:"0px",float:"left",borderColor:"white",height:"1080px"}} >
              
              <div className='navbar' style={{ position: 'relative' }} >
                <Link to='#' className='menu-bars'  >
                  <Falcons.FaBars style={{ color: 'white', float: 'left', padding: "25px" }} />
                </Link>
                <p style={{ float: 'left', color: 'white', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
              </div>
           
              <p style={{position:"relative",color:'white',fontSize:"50px",top:"10%"}} >PERKS </p>
              <hr style={{position:"relative",width:"50px",borderColor:"white",top:"10%",right:"12%"}} ></hr>
              <div style={{position:"relative",color:"white",fontSize:"50px",top:"10%",left:"30%",whiteSpace:"pre-line"}} > {textThree}</div>
              
              <div style={{position:"relative",color:"black",fontSize:"30px",top:"10%",left:"30%",whiteSpace:"pre-line"}} > {textFour}</div>
              </div>
  
              
              <div style={{width:"33%",margin:"0px",float:"right",borderWidth:"2px",borderColor:"white",height:"1080px"}}>
              {/* <div style={{ position: 'relative', float: 'right', top: "5%" }} >
                  <GradientButton >Try it now</GradientButton>;
                  </div> */}
                 {/* yellow  */}
               <div style={{position:"relative",top:"25%",alignContent:'center',textAlign:'center'}} >
              <hr style={{position:"relative",width:"50px",borderColor:"white",top:"25%",right:"25%"}} ></hr>
              <div style={{position:"relative",color:"white",fontSize:"50px",top:"25%",whiteSpace:"pre-line"}} > {textThree}</div>
              
              <div style={{position:"relative",color:"black",fontSize:"30px",top:"25%",whiteSpace:"pre-line"}} > {textFour}</div>
              </div>  
              </div>
 
              <div style={{width:"33%",margin:"0px",float:"left",borderWidth:"2px",borderColor:"white",height:"1080px"}} >
                {/* blue */}
              
              <hr style={{position:"relative",width:"50px",borderColor:"white",top:"25%",right:"14%"}} ></hr>
              <div style={{position:"relative",color:"white",fontSize:"50px",top:"25%",left:"30%",whiteSpace:"pre-line"}} > {textSix}</div>
              
              <div style={{position:"relative",color:"black",fontSize:"30px",top:"25%",left:"30%",whiteSpace:"pre-line"}} > {textFour}</div>
              </div>

           </div>
           <div className="main_Pricingseven" > 
           <div style={{marginLeft:40,marginTop:50,display: "inline-block"}} >
              <IoMdMail style={{color:'white',paddingTop:50 ,float:'left' }}/>
              <p style={{paddingTop:30,float:'left',color:'white',marginLeft:10,display: "inline-block"}}>  {emailID}</p>
          </div>
          <div style={{position:'relative',display: "inline-block",left:"25%",color:'white',top:'40%'}}>EXP|CON</div>
          < div style={{display: "inline-block",position:'relative',color:'white',left:"10%",top:"50%"}} >2019 © All Rights Reserved | Speer Technologies Incorporated</div>
           </div>
        </div>
    );
}

export default Pricing;