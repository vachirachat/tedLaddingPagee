import React from 'react'
import '../style/LogoBarStyle.css'
import Icon1 from '../pic/icon-1.png'
import Icon2 from '../pic/icon-2.png'
import Icon3 from '../pic/icon-3.png'
import Icon4 from '../pic/icon-4.png'
import Icon5 from '../pic/icon-5.png'

export default function LogoBar() {

    const data = [{icon: Icon1, title: 'Confident'},{icon: Icon2, title: 'Shy'},{icon: Icon3, title: 'Independent'},{icon: Icon4, title: 'Laidback'},{icon: Icon5, title: 'Adaptable'}]
    return (
        <div class='container'>
        <div class="LogoDev">
            {
                data.map((item) => (
                    <div class="col" style={{marginLeft: '10px', marginRight: '10px'}}>
                <img class="IconLogo" src={item.icon} />
                <p class="Desc">{item.title}</p>
            </div>
                ))
            }
            
            
        </div>
            <button type="button" class='btn-primary btn learn'>Learn More</button>
        </div>
    )
}
