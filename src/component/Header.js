import React, { useState } from 'react'
import  '../style/Header.css'

const Header = () => {
    const[focus ,setFocus]=useState(false)
    // flag for hoving or not 
    const[position,setPosition]=useState("top")
    // position select using this hook 
    const hoverIn=()=>{
      setFocus(true)

    }
    // hoving case 
    const hoverOut=()=>{
      setFocus(false)
      
    } 
    // not hoving
    const visible = {display:focus?"block":"none"}
    function handleClick(event){
      // setting the position of the tip 
      setPosition(prevPosition=>{
        return prevPosition = event.target.value
      })
    }
    
  return (
    <div className='header'>
            <h1> ToolKit</h1>
    <div  className="buttons ">
      {/* the four various button decide which position to select  */}
       
        <div className='btn1'><button onClick={handleClick} value='top' >TOP</button></div>
        
        <div className='btn1'><button value='bottom' onClick={handleClick} >BOTTOM</button></div>
        

        <div className='btn1'><button  value='left' onClick={handleClick}>LEFT</button></div>
        

        <div className='btn1'><button value='right' onClick={handleClick}>RIGHT</button></div>

        <div>
          <div className='hovertext'><button  onMouseOver={hoverIn} onMouseOut={hoverOut}>Hover over me</button>
          {/* hover button  */}
          <div className={position}  style={visible}> Thanks for hovering!, Iam {position} tootltip </div>
          {/* hoving div when mouseoer it display the div  */}
          </div>
        </div>

      
    </div>

    </div>
  )
}

export default Header
