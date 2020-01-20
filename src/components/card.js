import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import "./card.scss"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getMethod } from './httpService.js';
const image1 = require('../../src/images/dontMakeMeThink.jpg');

require('dotenv').config();

class card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardHover: false,
            books: []
        }
        this.handleOnHoverCard = this.handleOnHoverCard.bind(this)
    }


    componentDidMount() {
        this.getAllBooks();
    }

    getAllBooks = () => {
        getMethod().then((res) => {
            this.setState({ books: res.data.data });
            console.log("books", this.state.books);
        }).catch((err) => {
            console.log(err);
        })
    }

    handleOnHoverCard = () => {
        this.setState({
            cardHover: !this.state.cardHover
        })
    }

    render() {
        return (
            <div onMouseEnter={() => this.handleOnHoverCard()} onMouseLeave={() => this.handleOnHoverCard()}>
                <Card className="card" id="info" variant="outlined">
                    {/* <Tooltip title="book"> */}

                    <CardActionArea >
                        <div className="divName">
                            <img src={image1} width="100px" height="130px" />
                        </div>

                    </CardActionArea>
                    {/* </Tooltip> */}

                    <div className="BookDetail">
                        <div className="BookTitle">
                            <span>Don't Make Me Think</span>
                            {/* {this.state.books.map(data => (
                                <span>{data.title}</span>
                            ))} */}
                            {/* <span></span> */}
                        </div>
                        <div className="BookAuthor">
                            <span>By Steven King</span>
                        </div>
                        <div className="BookPrice">
                            <span>Rs. 1500</span>
                            <span>Qty: 15</span>
                        </div>
                    </div>

                    <div className="BookButtons">
                        <Button variant="outlined" style={{ backgroundColor: '#A03037', color: 'white', width: '40%', height: '10%', fontSize: '10px' }}>buynow</Button>
                        <Button variant="outlined" style={{ width: '40%', height: '10%', fontSize: '10px' }}>wishlist</Button>
                    </div>
                    <Card id="bookInfo" variant="outlined">
                        <CardContent>
                            <Typography color="textPrimary" style={{ fontFamily: 'Arial', fontSize: 16, fontWeight: 600 }} gutterBottom>
                                Book Detail
                            </Typography>
                            <Typography color="textSecondary" style={{ fontSize: 12, textAlign: 'initial' }} gutterBottom>
                                Here are many examples of short stories for you to read online. Online has become another leg in our life. WE have to take that into account so that we will go along the growth of the science and technology. Computer has revolutionalised our world. The people have started to see another world. What we were has become history. The twentieth century has become remote history. The IT companies and other computer-based companies have outperformed other traditional companies which have been there for a long time. Accuracy has become the most used word among the people. Telecommunication has become very very cheap affair all over the world. All these achievements are possible because of Computer and the Internet. Reading short stories online has become our favorite pastime.
                            </Typography>
                        </CardContent>
                    </Card>
                </Card>

            </div>
        )
    }
}

export default card;