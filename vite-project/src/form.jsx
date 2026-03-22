import { useState } from "react";

export default function Form(){
    let [formData, setformData]= useState({
        fullname: "",
        username: "",

    });

    let Eventhandler = (event)=>{
        let fieldname= event.target.name;
        let newvalue=event.target.value;
    
        setformData((currdata)=>{
            return { ...currdata,[fieldname]  :newvalue};

        });
       
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
       console.log(formData);
        setformData({
            fullname: "",
            username: "",
        });
    }


    return(
        <div>
         <form onSubmit={handleSubmit}> 
            <label htmlFor="fullname">Full Name</label><br></br>
          <input type="text" id="fullname" 
          placeholder="enter name" 
           name="fullname" 
          value={formData.fullname} 
          onChange={Eventhandler}
          ></input>
          <br></br>
          <br></br>

          <label htmlFor="username">User Name</label><br></br>
          <input type="text" id="username" 
          placeholder="enter name" 
          name="username" 
          value={formData.username} 
          onChange={Eventhandler}
          ></input><br></br>
          <button>submit</button>

        </form>
        </div>
       
    )
}