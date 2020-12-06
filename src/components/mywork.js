import React, { Component, Fragment } from 'react';

export default class MyWork extends Component {

    render() {

        const projectsItems = this.props.projects.map((item) =>

            <div className="project-card" key={item.id.toString()}>
                <h1>{item.title}</h1>                
                <p>{item.description}</p>
                <p>
                    <a href={item.url} target="_blank" title="go Github">go Github</a>
                </p>

            </div>

        );

        return <Fragment>
            <section id="mywork" class="anchor">

                <div>
                    <h2 className="light">My work</h2>
                    <div className="project-card-container">
                        {projectsItems}
                    </div>
                </div>

            </section>
        </Fragment>
    }
}