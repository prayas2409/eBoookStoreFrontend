import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import "./card.scss"
import Button from '@material-ui/core/Button';
const image1 = require('../../src/images/dontMakeMeThink.jpg');

require('dotenv').config();

class card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardHover: false
        }
        this.handleOnHoverCard = this.handleOnHoverCard.bind(this)
    }

    handleOnHoverCard = () => {
        console.log("Hovering")
        this.setState({
            cardHover: !this.state.cardHover
        })
    }

    render() {
        return (
            <div onMouseEnter={() => this.handleOnHoverCard()} onMouseLeave={() => this.handleOnHoverCard()}>
                <Card className="card" >
                    <CardActionArea>
                        <div className="divName">
                            <img src={image1} width="100px" height="130px" />
                        </div>

                    </CardActionArea>
                    <div className="BookDetail">
                        <div className="BookTitle">
                            <span>Don't Make Me Think</span>
                        </div>
                        <div className="BookAuthor">
                            <span>By Steven King</span>
                        </div>
                        <div className="BookPrice">
                            <span>Rs.1500</span>
                        </div>
                    </div>

                    <div className="BookButtons">
                        <div className="BookBuyButton">
                            <Button style={{ color: 'white' }}>buynow</Button>

                        </div>
                        <div className="BookWishlist"><Button >wishlist</Button></div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default card;