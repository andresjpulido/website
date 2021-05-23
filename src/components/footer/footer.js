import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.scss';
import contactItemsList from '../../data/contactItems.json';

export default function Footer() {

    return (
        <footer id="contact" className="anchor">
 
            <div className="section-header">
                <h2 className="light">Contact</h2>
                <FontAwesomeIcon icon={["fas", "address-book"]} className="section-logo" />
            </div>
            <br /><br />
            <div className="footer-sentence">
                Looking for new challenges and learning
                
            </div>
            <FontAwesomeIcon className="footer-sentence-icon" icon={["fas", "cogs"]} />
            <br /><br />
            <div className="footer-line" />
            <br /><br />
            <div className="footer-networks">
                {
                    contactItemsList.map((item) =>

                        <div className="footer-item-networks" key={item.id.toString()}>

                            <div className="parent">
                                <div className="child">
                                    <a href={item.url} target="_blank" title={item.label} rel="noreferrer">
                                        <FontAwesomeIcon
                                            icon={[item.iconFamily, item.icon]}
                                            key={item.id} />
                                    </a>
                                </div>
                                <div className="child">
                                    <a href={item.url} target="_blank" title={item.label} rel="noreferrer">
                                        {item.text}
                                    </a>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            <br /><br />
            <div className="footer-copy">
                © 2021 Andres Pulido, Auckland New Zealand
                </div>
                <br /><br />
        </footer>
    )
}