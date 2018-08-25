import './main.scss';
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Mainlayout extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Mainlayout extends React.Component: ', props);
  }
  render() {
    return (
      <div>
        <Header />
        <div>
         { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}
