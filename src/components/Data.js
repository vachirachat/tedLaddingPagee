import React, {useState} from 'react'
import '../style/DataStyle.css'
import Slide from 'react-reveal/Slide';

export default function Data() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768 )
    return (
        <div class="dev">
            <Slide left={true}>
            <div>
                {
                    isMobile ? <h3 class="header1">What’s meant to be <br /> will always find a way.</h3>:
                    <h3 class="header1">What’s meant <br /> to be will always<br /> find a way.</h3>
                }
                
                {/* <span class="short-text">Sat</span> */}
            {/* <span class="header1">What’s meant to be will always find a way.</span> */}
            
            </div>
            </Slide>
            <Slide left={true} duration={3000}>
            <div class="devBodyWord">
            <p class="bodyWordData">PawsUp help you to find the best<br /> partner for your dearest fluffy friend</p>
            </div>
            </Slide>
            <Slide left={true} duration={5000}>
            <div>
            <button type="button" class='btnData btn btn-primary'>Find A Match</button>
            </div>
            </Slide>
        </div>
    )
}
