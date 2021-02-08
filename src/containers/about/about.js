import React, { Component } from 'react';
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default class About extends Component {

    render() {

        return (
            <section id="about" className="anchor">
                <div className="page-container">

                    <div className="section-header">
                        <h2 className="">About</h2>
                        <FontAwesomeIcon icon={["fas", "user-circle"]} className="section-logo" />
                    </div>


                    <p className="">Software developer, walker, passionate about technology, interested in learning and creating fantastic things. Systems Engineer expert in business applications J2ee, SOA, web applications and single-page applications.</p>

                    <div className="columns">
                        <p className="">GIS school</p>
                        <p className="solid-left-side width80">I started developing geographic information systems, working with mapserver, Oracle Spatial, PostGis, ArcIms, geographic metadata, etc, this world is cool !!! It was a great learning experience; this kind of projects allow you to experiment and learn new things, also graphically they are striking and are very useful.</p>
                    </div>
                    <div className="columns">
                        <p className="width20">Enterprise</p>
                        <p className="solid-left-side width80">Then I worked for several years in the development of J2EE enterprise applications for intranet over Websphere Application Server and SQL Server in public and private entities. In my last project, our team built an internet application that encourages digital sales in a bank, in this project I learned a lot about user interface and architecture oriented to microservices.</p>
                    </div>
                    <div className="columns">
                        <p className="width20">Future</p>
                        <p className="solid-left-side width80">Then I worked for several years in the development of J2EE enterprise applications for intranet over Websphere Application Server and SQL Server in public and private entities. In my last project, our team built an internet application that encourages digital sales in a bank, in this project I learned a lot about user interface and architecture oriented to microservices.</p>
                    </div>
                    <div className="columns">
                        <p className="width20">Interes</p>
                        <p className="solid-left-side width80">Hiking, arduino Uno and learning python.</p>
                    </div>
                </div>
            </section>
        )
    }
}