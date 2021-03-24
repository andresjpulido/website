import React from 'react';
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {

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
                    <p className="solid-left-side width80">I stay hungry! I seek to be part of a great team with which we achieve a high quality in the development and an agile publication in production of products that serve and generate value to society.
This year I will create content on the internet to share knowledge and share experiences with developers from all over the world. </p>
                </div>
                <div className="columns">
                    <p className="width20">Interest</p>
                    <p className="solid-left-side width80">Hiking, arduino Uno and learning python.</p>
                </div>
            </div>
        </section>
    )

}