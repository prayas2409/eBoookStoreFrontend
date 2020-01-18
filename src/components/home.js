import React from 'react';
import headerbar from "./headerbar"
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import RecipeReviewCard from "./note.jsx"
import LowerBar from './LowerBar'

require('dotenv').config();

class home extends React.Component {

    constructor(props) {
        super(props);        

        this.state = {
            books:[],
            }
    }

    render(){

    return(
            <RecipeReviewCard/>,
            <LowerBar/>

       );
    }

}

export default home;