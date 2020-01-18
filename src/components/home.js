import React from 'react';

import LowerBar from './LowerBar'
import  * as constants from "../Constants"
import Cards from "./card"

require('dotenv').config();

class home extends React.Component {

    constructor(props) {
        super(props);        

        this.state = {
            books:[],
            }
            console.log(constants.URL);
    }

    render(){

    return(
            <LowerBar/>,
            <Cards/>
            
            
       );
    }

}

export default home;