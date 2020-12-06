import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {

    render() {

        const mainContactItems = this.props.contactItems.filter(function (element) {
            return element.isBrand;
          }).map((item) =>
      
            <li key={item.id.toString()} className="main-networks">
              <a href={item.url} target="_blank" title={item.label}>
                <FontAwesomeIcon
                  className="icon-active"
                  icon={[item.iconFamily, item.icon]}
                  key={item.id}
                  size="lg" />
              </a></li>
      
      
          );

        return <Fragment>

            <section id="home" class="anchor">
                <div>
                    <p className="title">
                        Hi, <br />
                  I'm Andres Pulido,<br />
                  Software developer<br />
                        <span className="home-h2">Web developement / J2EE / SPA Applications</span>
                    </p>
                </div>
                <div id="social-networks">
                    <ul>
                        {mainContactItems}
                    </ul>
                </div>

            </section>

        </Fragment>
    }
}