import React, { Component } from 'react';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Contact from './components/contact'
import About from './components/about'
import MyWork from './components/mywork'
import Multiverse from './components/multiverse'
import Nav from './components/nav'
import Footer from './components/footer';
import Home from './components/home'

library.add(fab, far, fas)

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      transform: 0,
      menu: [
        { id: 1, label: "Home", isActive: true, icon: "home", ref: "#home" },
        { id: 2, label: "About", isActive: false, icon: "user-circle", ref: "#about" },
        { id: 3, label: "My Work", isActive: false, icon: "sd-card", ref: "#mywork" },
        { id: 4, label: "Contact", isActive: false, icon: "address-book", ref: "#contact" },
        //{ id: 5, label: "Multiverse", isActive: false, icon: "globe", ref: "#multiverse" },
      ],
      brands: [
        { id: 0, isBrand: false, label: "Location", text: "Auckland, New Zealand", iconFamily: "fas", icon: "home", url: "#" },
        { id: 1, isBrand: true, label: "Github", text: "Github", iconFamily: "fab", icon: "github", url: "https://github.com/andresjpulido" },
        { id: 2, isBrand: true, label: "medium", text: "Medium", iconFamily: "fab", icon: "medium", url: "https://medium.com/@andresjpulido" },
        { id: 3, isBrand: true, label: "Mail", text: "Mail me", iconFamily: "far", icon: "envelope", url: "mailto:andresjpulido@gmail.com" },
        { id: 4, isBrand: true, label: "linkedin", text: "CV", iconFamily: "fab", icon: "linkedin", url: "https://www.linkedin.com/in/andresjpulido/" },


      ],
      projects: [
        { id: 1, title: "Shop", description: "Web application that manages the inventory, the creation of purchase orders, the registration of hours you work and the creation of the weekly payslip ", tags: ["Javascript", "PostgreSQl", "Nodejs"], url: "https://github.com/andresjpulido/shop", image: "timeline1.png" },
        { id: 2, title: "Recipes", description: "Description of the Application", tags: ["Javascript", "Firebase"], url: "https://github.com/andresjpulido/recipe", image: "recipes.png" },
        { id: 3, title: "Puzzle", description: "Description of the Application", tags: ["typescript"], url: "https://github.com/andresjpulido/puzzle", image: "puzzle.png" }
      ],

      contactItems: [
        { id: 0, isBrand: false, label: "Location", text: "Auckland, New Zealand", iconFamily: "fas", icon: "home", url: "#" },
        { id: 1, isBrand: true, label: "Github", text: "Github", iconFamily: "fab", icon: "github", url: "https://github.com/andresjpulido" },
        { id: 2, isBrand: true, label: "medium", text: "Medium", iconFamily: "fab", icon: "medium", url: "https://medium.com/@andresjpulido" },
        { id: 3, isBrand: true, label: "Mail", text: "Mail me", iconFamily: "far", icon: "envelope", url: "mailto:andresjpulido@gmail.com" },
        { id: 4, isBrand: true, label: "linkedin", text: "CV", iconFamily: "fab", icon: "linkedin", url: "https://www.linkedin.com/in/andresjpulido/" },

      ]

    };

    this.handler = this.handlerItemMenu.bind(this)

  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop;
    let itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({ transform: window.scrollY })

    var aboutTop = document.getElementById("about").offsetTop;
    var contactTop = document.getElementById("contact").offsetTop;
    var myworkTop = document.getElementById("mywork").offsetTop;
    //var multiverseTop = document.getElementById("multiverse").offsetTop;
    let id = 0;
    let scrollY = parseInt(window.scrollY);

    if (scrollY < aboutTop)
      id = 1

    if (scrollY >= aboutTop - 5 && scrollY < myworkTop)
      id = 2

    if (scrollY >= myworkTop - 5 && scrollY < contactTop)
      id = 3

      if (scrollY >= contactTop)
      id = 4

    // if (scrollY >= contactTop - 5 && scrollY < multiverseTop)
    //   id = 4

    // if (scrollY >= multiverseTop)
    //   id = 5

    this.handlerItemMenu(null, id)
    
  }

  handlerItemMenu = (e, id) => {

    let oldList = this.state.menu;

    const newList = oldList.map((item) => {
      if (item.id === id) {
        let updatedItem = {
          ...item,
          isActive: true,
        };

        return updatedItem;

      } else {
        let updatedItem = {
          ...item,
          isActive: false,
        };

        return updatedItem;
      }


    });

    this.setState({ menu: newList })

  }

  render() {




    return (
      <div>

        <Nav menu={this.state.menu} t={this.state.transform} handler={this.handlerItemMenu} />

        <article>

          <Home contactItems={this.state.contactItems} />

          <About />

          <MyWork projects={this.state.projects} />

          <Contact contactItems={this.state.contactItems} />

          

        </article>

        <Footer />

      </div>
    )
  };
}
