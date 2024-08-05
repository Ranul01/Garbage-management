import {useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom';
import React, {useState} from "react";
import axios from "axios";


export default function AddStaffMember(){

  const [mname, setMName] = useState("");
  const [memail, setMEmail] = useState("");
  const [mphone, setMPhone] = useState("");
  const [maddress, setMAddress] = useState("");
  const [mage, setMAge] = useState("");
  const [mgender, setMGender] = useState("");
  const [mrole, setMRole] = useState("");
  const [mnic, setMNIC] = useState("");
  const [mwdays, setMWDays] = useState("");
  const [msalary, setMSalary] = useState("");
  const [error, setError] = useState("false");
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();
    
    const newStaffMember ={
        mname,
        memail,
        mphone,
        maddress,
        mage,
        mgender,
        mrole,
        mnic,
        mwdays,
        msalary
     
    }

    if(mname.length==0||memail.length==0||mphone.length==0||maddress.length==0||mage.length==0||mgender.length==0||mrole.length==0||mnic.length==0||mwdays.length==0||msalary.length==0)
    setError(true)
    if(mname&&memail&&mphone&&maddress&&mage&&mgender&&mrole&&mnic&&mwdays&&msalary)
    {
      console.log("MName:",mname,"MEmail:",memail,"MPhone:",mphone,"MAddress:",maddress,"MAge:",mage,"MGender:",mgender,"MRole:",mrole,"MNIC:",mnic,"MWDays:",mwdays,"MSalary:",msalary)
    }

    axios.post("http://localhost:8070/staffmember/addsmember",newStaffMember).then(()=>{ 
      alert("Route Added")
      setMName("");
      setMEmail("");
      setMPhone("");
      setMAddress("");
      setMAge("");
      setMGender("");
      setMRole("");
      setMNIC("");
      setMWDays("");
      setMSalary("");

      navigate('/home')
      
    }).catch((err)=>{
      alert(err)
    })

    
    
  
  }

  const hadleSubmit=(e)=>{
    e.preventDefault();
    
  }

 

  

    return(
        //class create form
        
        <div >
          <div class="card bg-dark text-white" >
           <img src="staffbg.png" class="card-img" alt="..." style={{height: '375px', filter: 'brightness(40%)'}}/>
             <div class="card-img-overlay">
              <br></br>
              <br></br>
                <h1 class="card-title" style={{fontSize: '90px'}}><b>ADD NEW</b> <b class="text-success">STAFF</b></h1>
                <br></br>
                <br></br>
                <br></br>

                <div class="btn-group" role="group" aria-label="Basic example" style={{float: 'right'}}>
                <Link to='/randp'>
                <button type="button" class="btn1 btn-success btn-lg" style={{marginRight: '50px'}}>RESEARCH AND PRODUCTS</button>
                </Link>
                <Link to='/requests'>
                <button type="button" class="btn2 btn-success btn-lg" style={{marginRight: '50px'}}>REQUEST PICKUP</button>
                </Link>
                <button type="button" class="btn3 btn-success btn-lg" style={{marginRight: '50px'}}>PAYMENT</button>
                </div>

             </div>
          </div>

          
          <br></br>
          <br></br>

        <div >

        <div class="card text-dark  mb-3" style={{width: '1000px', backgroundColor:'#E0E0E0'}}>
        
        <div class="card-body"> 
        <br></br>
        <h1 class="card-title text-success"><b>ADD NEW MEMBER</b></h1>
        <br></br>

          <form class="row g-3 was-validated">
             <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Name:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMName(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mname.length<=0?<lable class="text" style={{color:'#FF0000'}}>Name can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Email:</b></label>
                  <input type="email" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMEmail(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&memail.length<=0?<lable class="text" style={{color:'#FF0000'}}>Email can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Phone No:</b></label>
                  <input type="tel" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMPhone(e.target.value = e.target.value.slice(0, 10));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mphone.length<=0?<lable class="text" style={{color:'#FF0000'}}>Phone No can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Address:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMAddress(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&maddress.length<=0?<lable class="text" style={{color:'#FF0000'}}>Address can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Age:</b></label>
                  <input type="number" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMAge(e.target.value = e.target.value.slice(0, 2));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mage.length<=0?<lable class="text" style={{color:'#FF0000'}}>Age can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Gender:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMGender(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&mgender.length<=0?<lable class="text" style={{color:'#FF0000'}}>Gender can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Role:</b></label>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMRole(e.target.value);
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mrole.length<=0?<lable class="text" style={{color:'#FF0000'}}>Role can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>NIC:</b></label>
                  <input type="number" class="form-control is-invalid"   id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMNIC(e.target.value = e.target.value.slice(0, 12));
                  
                    }}required/>
                  <div className="invalid-feedback">
                    {error&&mnic.length<=0?<lable class="text" style={{color:'#FF0000'}}>NIC can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Working Days Per Month:</b></label>
                  <select class="form-select is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMWDays(e.target.value);
                  
                    }}required>
                    <option value="">Open this select menu</option>
                    <option value="7 Days">7 Days</option>
                    <option value="14 Days">14 Days</option>
                    <option value="21 Days">21 Days</option>
                    <option value="30 Days">30 Days</option>
                  </select>
                  <div className="invalid-feedback">
                    {error&&mwdays.length<=0?<lable class="text" style={{color:'#FF0000'}}>Working Days can't be empty!</lable>:""}
                  </div>

              </div>
              <div class="col-md-6">
                  <label for="validationServer01" class="form-label" style={{float: 'left'}}><b>Salary:</b></label>
                  <div class="input-group mb-3">
                  <span class="input-group-text">Rs.</span>
                  <input type="text" class="form-control is-invalid" id="validationServer01" aria-label="Default select example"
                  onChange={(e)=>{

                    setMSalary(e.target.value);
                  
                    }}required/>
                  <span class="input-group-text">.00</span>
                  <div className="invalid-feedback">
                    {error&&msalary.length<=0?<lable class="text" style={{color:'#FF0000'}}>Salary can't be empty!</lable>:""}
                  </div>
                  </div>
              </div>
             
              <div class="col-12">
              <br></br>
              <button type="submit" class="btn btn-success" onClick={sendData}>SUBMIT</button>
    
              </div>
  
          </form>
          
        <br></br>

        </div>
        </div>

        

      </div>
      <br></br>
      <br></br>

      <div class="card bg-dark text-white" style={{height: '350px', width:'100%'}}>
           
             <div class="card-img-overlay">
              <br></br>
                <h3 class="card-title" style={{float: 'left'}}><b class="text-success">CONTACT</b></h3>
                <br></br>
                <i class="fa-brands fa-facebook fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-instagram fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <i class="fa-brands fa-linkedin fa-2xl" style={{float: 'right', marginRight: '20px'}}></i>
                <br></br>
                <br></br>
                

                <div style={{float: 'left'}}>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp;ecowaste@gmail.com</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-phone-volume"></i> &nbsp;&nbsp;&nbsp;071 159 0580</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}><i class="fa-solid fa-location-dot"></i> &nbsp;&nbsp;&nbsp;168/7/4b,tranquil terrace,new kandy road,malabe</h5>
                
                </div>

                <div style={{float: 'right',width: '50%'}}>
                <h5 style={{textAlign: 'left'}}>HOME</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>ABOUT US</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>WORKING DAYS</h5>
                <br></br>
                <h5 style={{textAlign: 'left'}}>SERVICES</h5>

                
                </div>
                <br></br>
                <br></br>
                <br></br>
                
                <h style={{float: 'left', marginLeft:'80%'}}>privacy policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; terms & conditions</h>

                
               
                
                

             </div>
          </div>



      
      </div>
      
      
    )
    
}