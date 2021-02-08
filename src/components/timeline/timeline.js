import React, { useState, useEffect } from 'react';
import wexperience from '../../data/wexperience.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './timeline.scss'

export default function Timeline() {

  
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPageIndex(currentPageIndex => {
                let nprojects = wexperience.length;
                if(currentPageIndex === nprojects-1)
                    return 0;
                else
                    return currentPageIndex + 1
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);


    let size = 5;
    let years = wexperience.map((year) => year.year).filter((v, i, a) => a.indexOf(v) === i);

    let currentyear = wexperience[currentPageIndex].year;
    let curretyearposition = 0;

    for (var i=0;i<years.length;i++){
        if(years[i]===currentyear){
            curretyearposition=i
            break;
        }         
    }

    var index = Math.floor(curretyearposition /size);
    years = years.slice((index*5), ((index*5)+5))
    
    return (
     
    <div className="timeline">
        <div className="carousel">
            
            <ul className="page">
                {

                   <li>
                        <h1>{wexperience[currentPageIndex].name} - {wexperience[currentPageIndex].company}</h1>
                        <p>{wexperience[currentPageIndex].description}</p>
                        <p className="toolsets">Toolsets: 
                        {
                            wexperience[currentPageIndex].technologies.map((tech, index) => <span className="tech" key={index}>  {tech}  | </span>)
                        }    
                        </p> 
                    </li> 
                }
            </ul>
            
        </div>
        <div className="swiper">
            <a href="#" onClick={(e)=>{e.preventDefault();}}><FontAwesomeIcon
                className="icon-active"
                icon={["fas", "caret-up"]}
                key={2}
                size="lg" />
            </a>
            <ul className="swiperd">
                {
                    years.map((year, index) => <li key={index}>
                        {
                            wexperience[currentPageIndex].year === year ?
                            <a href="#" className="selected" >{year}</a>
                            :
                            <a href="#" >{year}</a>
                        }
                        
                    </li>)
                }
            </ul>
            <a href="#" onClick={(e)=>{e.preventDefault();}}><FontAwesomeIcon
                className="icon-active"
                icon={["fas", "caret-down"]}
                key={2}
                size="lg" />
            </a>
        </div>
        
    </div>
    
    
    )
}
