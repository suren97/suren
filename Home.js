import { jsPanel } from "jspanel4";
import { useEffect, useState } from "react";

function Home()
{
let panel;
const Adduser=()=>
{
  panel=jsPanel.create({
    theme:"dodgerblue",
    closeOnEscape:true,
    headerTitle:"Add Users",
    headerControls:"closeonly",
    contentSize: '600 400',
    position:{
        offsetY:-50
    },
    boxShadow:1,
    contentOverflow: 'hidden',
    dragit:{
        disable:true
    },
    resizeit:{
        disable:true
    },
    content:panel=>
    {
      let frame=document.createElement("iframe");
      frame.src="http://localhost:3000/forms"
      frame.width="100%";
      frame.height="100%";
      frame.style.border="none";
      panel.content.appendChild(frame);
    }
  })
}

const Viewuser=()=>
{
   jsPanel.create({
      theme:"info",
      headerTitle:"AgGrid Viewuser",
      headerControls:"closeonly",
      closeOnEscape:true,
      contentOverflow: 'hidden',
      content:panel=>
      {
        let frame=document.createElement("iframe");
        frame.src="http://localhost:3000/view"
        frame.width="100%";
        frame.height="100%";
        frame.style.border="none";
        panel.content.appendChild(frame); 
      }
   }).maximize();
}

return(
    <div>
        <div className="container">
            <div className="content">
                <div className="regcont">
                    <div onClick={()=>Adduser()}>
                    <span><i class="fa fa-user"></i></span>&nbsp;
                        Add Users
                    </div>
                </div>
                <div className="regcont">
                    <div onClick={()=>Viewuser()}>
                    <span><i class="fa fa-eye"></i></span>&nbsp;
                        View Users
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Home;