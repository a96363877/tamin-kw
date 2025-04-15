
import * as React from 'react'
export default function Loader(){

  return (
    <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'white',zIndex:9999999999999999999}}>
      <div className="site-loader" >
          <span></span>
              <img src="/loader.png" alt="kicLoader" title="Kuwait Insurance Company" width={140}/>
      </div>
      </div>
  )
}




