import React from 'react';
import GradientButton from 'react-linear-gradient-button';
import "../Slider.css";
import *  as Falcons from 'react-icons/fa';
import {TextField} from '@mui/material'
import {IoMdMail} from 'react-icons/io'

function Perks(props) {
    const emailID = "   support@experienceconcerts.co"
    const textTwo = " \nBy continuing, I achnowledge that I've read and agree \n to the Terms of Service &  Privacy Policy."
    return (
        <div>
            <div className="perks_one" >
            
            <div className='navbar' style={{ position: 'relative' }} >
                <Falcons.FaBars style={{ color: 'black', float: 'left', padding: "25px" }} />
              <p style={{ float: 'left', color: 'black', marginLeft: '10px', display: "inline-block", fontSize: 20 }}>EXP|CON</p>
            </div>
              <div style={{fontSize:"74px",color:'black',padding:"50px"}} >PAYMENT</div> 
              <div style={{fontSize:"25px",color:'black',marginLeft:"10%"}} >1.Select your plan</div>
              
              <div style={{marginLeft:"10%"}} >
              <input type="radio"  id="htmlone"/>
              <label for="htmlone" style={{color:"#D24848"}} >BASIC</label>
              
              <input type="radio"  id="htmltwo"/>
              <label for="htmltwo" style={{color:"#FFB33F"}}  >ADVANCED</label>

              <input type="radio"  id="htmlthree"/>
              <label for="htmlthree" style={{color:"#1FE1E9"}}  >PRO</label>
              </div>
               <div style={{width:"80%",height:"40%",margin:"5%"}} >
                <div style={{width:"28%",height:"80%",margin:"10%",float:'left'}} >
                    <h3>Billing Information</h3>
                    <div style={{marginLeft:'20px'}} >
                    <p> Full Name </p>
                    <TextField id="outlined-basic"  variant="outlined" />
                    </div>
                    <div style={{marginLeft:'20px'}}>
                    <p> Billing Address </p>
                    <TextField id="outlined-basic"  variant="outlined" />
                    </div>
                    <div style={{height:"15%"}} >
                        
                        <div style={{float:'left',width:"40%",marginLeft:'20px'}} >
                        <p> City </p>
                        <TextField id="outlined-basic" style={{width:"90%",float:'left'}} variant="outlined"  />
                        </div>

                        <div style={{float:'left',width:"50%"}} >
                        <p> Postal code </p>
                        <TextField id="outlined-basic" style={{width:"80%",float:'left'}} variant="outlined" />
                        </div>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                    <p> COUNTRY </p>
                    <select  style={{width:"80%",height:"34px"}} id="outlined-basic"  variant="outlined" />
                    </div>
                </div>
                <div style={{width:"28%",height:"80%",margin:"10%",float:'right'}} >
                <h3>Credit Card Information</h3>
                    <div style={{marginLeft:'20px'}} >
                    <p> CARDHOLDERS'S NAME </p>
                    <TextField id="outlined-basic"  variant="outlined" />
                    </div>
                    <div style={{marginLeft:'20px'}}>
                    <p> CARD NUMBER </p>
                    <TextField id="outlined-basic"  variant="outlined" />
                    </div>
                    <div style={{height:"15%"}} >
                        
                        <div style={{float:'left',width:"40%",marginLeft:'20px'}} >
                        <p> EXPIRY MONTH </p>
                        <TextField id="outlined-basic" style={{width:"90%",float:'left'}} variant="outlined"  />
                        </div>

                        <div style={{float:'left',width:"50%"}} >
                        <p> EXPIRY YEAR </p>
                        <TextField id="outlined-basic" style={{width:"80%",float:'left'}} variant="outlined" />
                        </div>
                    </div>
                    <div style={{marginLeft:'20px'}}>
                    <p> COUNTRY </p>
                     <TextField id="outlined-basic" style={{width:"90%",float:'left'}} variant="outlined"  />
                    </div>

                </div>
                </div>
                <div style={{width:"80%",height:"15%",margin:"5%"}} >
                    <p></p>
                <div style={{position:"relative",color:"black",fontSize:"30px",whiteSpace:"pre-line",textAlign:'left'}} >
                 {textTwo}
                </div>
                <div  style={{ marginTop: 10 }}  >
                <GradientButton  >Download</GradientButton>;
          </div>
                </div>




            </div>
            <div className="perks_two" >
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

export default Perks;