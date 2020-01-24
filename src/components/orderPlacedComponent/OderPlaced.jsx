import React, { Component } from "react";
import ToolBar from '../headerBarComponent/headerbar';
import "./orderPlaced.scss"
import { Typography } from "@material-ui/core";

class OrderPlaced extends Component {
    render() {
        return (
            <div>
                <ToolBar />
                <div className="orderImage">
                    <img src='src/images/Screenshot.png' />
                </div>
                <Typography className="orderMessage"> hurray!!!your order is confirmed the order id is #123456 save the order id for further communication..</Typography>
            </div>
        )
    }
}

export default OrderPlaced;