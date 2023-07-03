import React, { Component } from 'react'
import Sectionone from './Sectionone'
import AbouteUs from './AbouteUs'
import Services from './Services'
import ContactUs from './ContactUs'
import BasicExample from './BasicExample'


export default class Index extends Component {
  render() {
    return (
      <div>
<Sectionone/>
<AbouteUs/>
<Services/>
<ContactUs/>
      </div>
    )
  }
}
