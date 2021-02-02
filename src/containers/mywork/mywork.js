import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import projects from '../../data/projects.json'
import './mywork.scss'

export default class MyWork extends Component {

    render() {

        const projectsItems = projects.map((item, index) => {

            let imgurl = "../../assets/images/projects/" + item.image;
            
            return(
            <div className="project-card" 
            style={
                { 
                    backgroundImage: 'url('+process.env.PUBLIC_URL + `/images/projects/${item.image}`+')' 
                }
            }
                key={item.id.toString()}>
                <h1>{item.title}</h1>                
                <p>{item.description}</p>
                 
                <p>
                    <a href={item.url} target="_blank" title="go Github">go Github</a>
                </p>
            </div>

        )});

        return ( 
            <section id="mywork" className="anchor">

                <div className="page-container">

                <div className="section-header">
                        <h2 className="light">My work</h2>
                        <FontAwesomeIcon icon={["fas", "sd-card"]} className="section-logo" />
                    </div>
                    
                    <div className="project-card-container">
                        {projectsItems}
                    </div>
                    <br /><br /><br />
                </div>

            </section>
        )
    }
}