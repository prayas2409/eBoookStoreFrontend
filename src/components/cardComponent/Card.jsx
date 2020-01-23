import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import "./card.scss"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';

require('dotenv').config();

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardHover: false,
        }
        this.handleOnHoverCard = this.handleOnHoverCard.bind(this)
    }

    handleOnHoverCard = () => {
        this.setState({
            cardHover: !this.state.cardHover
        })
    }

    //  [anchorEl, setAnchorEl] = React.useState(null);

    //  handleClick = event => {
    //   setAnchorEl(anchorEl ? null : event.currentTarget);
    // };
  
    //  open = Boolean(anchorEl);
    //  id = open ? 'simple-popper' : undefined;

    render() {

        return (
            <div onMouseEnter={() => this.handleOnHoverCard()} onMouseLeave={() => this.handleOnHoverCard()}>
                <Card className="card" id="info" variant="outlined">

                    <CardActionArea >
                        <div className="bookImage">
                            <img alt="" src={this.props.data.image} width="100px" height="130px" />
                        </div>
                    </CardActionArea>

                    <div className="bookDetail">
                        <div className="bookTitle">
                            <span>{this.props.data.title}</span>
                        </div>
                        <div className="bookAuthor">
                            <span>by {this.props.data.author}</span>
                        </div>
                        <div className="bookPrice">
                            <span>Rs. {this.props.data.price}</span>
                            <span>Qty: {this.props.data.quantity}</span>
                        </div>
                    </div>

                    <div className="bookButtons">
                        <Button variant="outlined" style={{ backgroundColor: '#A03037', color: 'white', width: '40%', height: '10%', fontSize: '10px' }}>buynow</Button>
                        {/* <Button variant="outlined" style={{ width: '40%', height: '10%', fontSize: '10px' }}>wishlist</Button> */}
                    </div>
                    {/* <Popper id={id} open={open} anchorEl={anchorEl}> */}
                        <Card id="bookInfo" variant="outlined">
                            <CardContent>
                                <Typography color="textPrimary" style={{ fontFamily: 'Arial', fontSize: 16, fontWeight: 600 }} gutterBottom>
                                    Book Detail
                            </Typography>
                                <Typography color="textSecondary" style={{ fontSize: 12, textAlign: 'initial' }} gutterBottom>
                                    {this.props.data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    {/* </Popper> */}
                </Card>
            </div>
        )
    }
}

export default Cards;