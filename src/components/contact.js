import React, { Component, Fragment } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Contact extends Component {

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);

        event.preventDefault();

    }

    render() {

        const contactItems = this.props.contactItems.map((item) =>

            <li className="contact-networks" key={item.id.toString()}>
                <a href={item.url} target="_blank" title={item.label}>
                    <FontAwesomeIcon
                        className="icon-active"
                        icon={[item.iconFamily, item.icon]}
                        key={item.id}
                        size="lg" />
                    <span className="dark">{item.text}</span>
                </a> </li>


        );

        return <Fragment>
            <section id="contact" class="anchor">
                <div className="f">
                    <h2 className="dark">Contact</h2>
                    <p className="dark">To contact me, please fill in the following form and write me a comment and I will be glad to answer you soon.</p>

                    <div className="row">
                        <div className="col-50">
                            <form method="post" onSubmit={this.handleSubmit} >
                                <div className="rddow">
                                    <div>
                                        <div>
                                            <input type="text" name="name" id="name" placeholder="Name" />
                                            <input type="email" name="email" id="email" placeholder="Email" />
                                        </div>
                                        <div>
                                            <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <a href="#" className="button" id="contactForm">Send Message!</a>
                                </div>
                            </form>
                        </div>
                        <div className="col-50">
                            <ul className="networks">
                                {contactItems}

                            </ul>
                        </div>

                    </div>

                </div>

            </section>
        </Fragment>
    }

}