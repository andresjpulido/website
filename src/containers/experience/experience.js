import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Timeline from '../../components/timeline'
import './experience.scss'

export default class Experience extends Component {

    render() {

        return (
            <section id="experience" className="anchor">
                <div className="page-container">

                    <div className="section-header">
                        <h2 className="light">Experience</h2>
                        <FontAwesomeIcon icon={["fas", "globe"]} className="section-logo" />
                    </div>

                    <p>Desarrollando aplicaciones web en plataformas, lenguajes e infraestructuras diversas.</p>
                    <br />
                    <Timeline />
                    <br /><br /><br />
                </div>
            </section>
        )

    }
}