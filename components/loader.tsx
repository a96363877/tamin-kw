
import * as React from 'react'
export default function Loader() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'white', zIndex: 99999999999999 }}>
            <div className="site-loader " >
                <span className=" "></span>
            </div>
            <div style={{ margin: 'auto' }}>
                <img style={{ position: 'fixed', bottom: 0, left: '33%', top: '38%' }} src="/loader.png" alt="kicLoader" title="Kuwait Insurance Company" width={140} />
            </div>
        </div>
    )
}




