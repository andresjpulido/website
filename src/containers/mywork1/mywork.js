import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import projects from '../../data/projects.json'
import './mywork1.scss'

export default class MyWork extends Component {

    render() {

        const projectsItems = projects.map((item, index) => {
            
            let u = process.env.PUBLIC_URL + `/images/projects/${item.image}`

            return (
                <div className="project" key={index}>

                    <div className="project-preview" >
                        <img src={u} alt={item.title}/>

                    </div>

                    <div className="project-description">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>

                        <div className="project-tech">
                            {
                                item.tags.map((tag, indextag)=>(
                                    <div className="project-tech-item" key={indextag}>{tag}</div>
                                ))
                            }
                        </div>

                        <p>
                            <a href={item.url} target="_blank" rel="noreferrer" title="go Github">go Github</a>
                        </p>

                    </div>

                </div>

            )
        });

        return (
            <section id="mywork" className="anchor">

                <div className="page-container">

                    <div className="section-header">
                        <h2 className="dark">Samples</h2>
                        <FontAwesomeIcon icon={["fas", "sd-card"]} className="section-logo" />
                    </div>

                    <div className="project-container">
                        {projectsItems}
                    </div>
                    <br /><br /><br />
                </div>

            </section>
        )
    }
}