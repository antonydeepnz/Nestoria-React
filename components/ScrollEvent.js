import React, { Component } from 'react'

export default class ScrollEvents extends Component {
  construstor(){
    super();

    this.handleScroll = this.handleScroll.bind(this);
  }

   componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
  var scrollPos = 0;

  if ((document.body.getBoundingClientRect()).top > scrollPos) {
    console.log("up")
  }
  else {
    console.log("down")
  }
  scrollPos = (document.body.getBoundingClientRect()).top;  
  }
}


