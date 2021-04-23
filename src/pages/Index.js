import React, { useEffect, useState } from 'react'
import PicMainComp from '../components/PicMainComp'
import Data from '../components/Data'
import LogoBar from '../components/LogoBar'
import Navbar from '../components/Navbar'
import NewPic from '../components/NewPic'
import Group118 from '../pic/Group-118.png'
import '../style/PageStyle.css'

export default function Index() {

    const [isMobile, setIsMobile] = useState(window.innerWidth > 789)

    console.log('This is mobile ', isMobile)
    console.log('window size', window.innerWidth > 789)

    useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            console.log('this is ', window.innerHeight)
            window.innerWidth > 789 && setIsMobile(false)
          }
        window.addEventListener("resize", handleResize);
        console.log(!isMobile)
    }, [])
    return (
        <div style={{width: '100%'}}>
            
            {/* <div class="row" style={{width: '100%'}}> */}
            {/* <div class="container-fluid container-md container-sm"> */}
            <Navbar/>
            
        
            
            <div style={{ display: 'flex', width: '100%', flexDirection: !isMobile ? 'column-reverse':'row'}}>
                <Data class='col-12 col-md-5 data1' style={{width: '5%'}} />
                <PicMainComp class='col-12 col-md-7' />
            </div>
                
            

            {/* </div> */}
            <img class='group118' src={Group118}/>
            
            <h3 class='personal' >Dogs have these 5 major personaity type</h3>
            <LogoBar />
            
        </div>
    )
}
