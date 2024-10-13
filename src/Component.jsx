import React from 'react'

export default function Component() {
  const AJOI=()=>{
    alert("OOOO")
  };
  
    return (
    <div>
        <input type="text" placeholder='User'/> <br />
        <button   onClick={AJOI}  >da click</button>
    </div>
  )
}
