import { useEffect, useState } from "react";
import Store from "../Redux/Store";
import { useDispatch } from "react-redux";
import { add } from "../Redux/Action";
import Home from "./Home";

function Forms()
{
  const [name,setname]=useState();
  const [dob,setdob]=useState();
  const [email,setemail]=useState();
  const [mobile,setmobile]=useState();
  const state=Store.getState();
  let getusers=state=>state.userdata.users;
  let users=[...getusers(state)];
  const dispatch=useDispatch();
  const [id,setid]=useState();

  const Submit=()=>
  {
    let data={};
    data.username=name;
    data.dob=dob;
    data.email=email;
    data.mobile=mobile;   
    dispatch(add(data));
    setid(0);
    alert("User Added Successfully");
  }

  useEffect(()=>{ },[id]);

  return(
    <div>
    <div className="formcontent">
    <div className="forms">
    <label>Username:</label>
    <input type="text" onChange={(e)=>setname(e.target.value)} />
    <label>Date of Birth:</label>
    <input type="date" onChange={(e)=>setdob(e.target.value)} />
    <label>Email:</label>
    <input type="text" onChange={(e)=>setemail(e.target.value)} />
    <label>Mobile:</label>
    <input type="text" onChange={(e)=>setmobile(e.target.value)} />
    <button className="subbtn" onClick={()=>Submit()}>Submit</button>
    </div>
    </div>
    </div>
  )   
}

export default Forms;