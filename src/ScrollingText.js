import React from "react";
import Marquee from "react-fast-marquee";
import './ScrollingText.css';

function ScrollingText(){
    return(
        <div className="scrolling__text">
            <Marquee speed='100' direction='right'>
                <strong className="scr1">API's are Expired that's why Products Images are Not Appearing</strong>
                

            </Marquee>
        </div>
        
        

    );
}
export default ScrollingText;