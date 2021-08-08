import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.scss'

import auckland from '../../assets/images/auckland.png'
import { bd } from '../../services/firebase';

export default class Contact extends Component {

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log("send message")
        event.preventDefault();
        /*
        try {
            db.ref("chats").on("value", snapshot => {
              let chats = [];
              snapshot.forEach((snap) => {
                chats.push(snap.val());
              });
              this.setState({ chats });
            });
          } catch (error) {
            this.setState({ readError: error.message });
          }
          */
    }

    render() {

        return (
            <section id="contact" className="anchor">

                <div className="page-container">

                    <div className="section-header">
                        <h2 className="dark">Contact</h2>
                        <FontAwesomeIcon icon={["fas", "address-book"]} className="section-logo" />
                    </div>

                    <div className="row">

                        <div className="col contact-page">
                            <p className="dark">I am living in Auckland, New Zealand.</p>
                            <div className="box">
                                <img src={auckland} alt="map" />
                            </div>
                        </div>


                        <div className="col-50 disable">

                            <p className="dark form">
                                To contact me, please fill in the following form and write me a comment and I will be glad to answer you soon.
                            </p>

                            <form method="post"  >

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
                                    <button href="#" className="button" id="contactForm" onClick={this.handleSubmit}>Send Message!</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
        )
    }

}