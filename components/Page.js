import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
