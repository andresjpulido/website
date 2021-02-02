import React, { useState, useEffect, Fragment } from 'react';
import wexperience from '../../data/wexperience.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './timeline.scss'

export default function Timeline() {

    const timeline = wexperience.map((item) => <div>time line</div>)

    const [currentPageIndex, setCurrentPageIndex] = useState(0);


    let years = wexperience.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj["year"]).indexOf(obj["year"]) === pos;
    })

    years = wexperience.map((year) => year.year).filter((v, i, a) => a.indexOf(v) === i);

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
            <a href="#" ><FontAwesomeIcon
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
            <a href="#" ><FontAwesomeIcon
                className="icon-active"
                icon={["fas", "caret-down"]}
                key={2}
                size="lg" />
            </a>
        </div>
        
    </div>
    
    
    )
}
