import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import "./user.scss"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class User extends Component {

    render() {

        return (
            <div>
                <div className="mainCart">
                    <Card className="userCard">
                        <div className="myCart">My Cart (2)</div>
                        <div className="cart">
                            <div>
                                <img className="bookImages" src='http://books.google.com/books/content?id=GXznEnKwTdAC&printsec=frontcover&img=1&zoom=5' />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <Typography className="cartTitle" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '450' }}>Don't Make Me Think</Typography>
                                <Typography className="cartAuthor" style={{ fontSize: '10px' }}>by Steven King</Typography>
                                <Typography className="cartPrice" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600' }}>Rs. 1500</Typography>
                            </div>
                            <div className="orderButton">
                                <Button variant="contained" color="primary">
                                    Place order
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card className="customerCard">
                        <div className="CustomerPage">
                            <Typography className="customerDetails" style={{ fontSize: '18px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600' }}>Customer Details</Typography>
                            <Typography style={{ fontSize: '12px', fontFamily: 'Arial, Helvetica, sans-serif' }}>Edit</Typography>
                        </div>

                        <div className="textFieldRow">
                            <div>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            </div>
                        </div><br></br>

                        <div className="textFieldRow">
                            <div>
                                <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Locality" variant="outlined" />
                            </div>
                        </div><br></br>

                        <div className="textFieldAddress">
                            <TextField id="outlined-multiline-static" label="Address" multiline
                                rows="3" variant="outlined" style={{ width: '463px' }} InputProps={{ disableUnderline: true }} />
                        </div><br></br>

                        <div className="textFieldRow">
                            <div>
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Landmark" variant="outlined" />
                            </div>
                        </div><br></br>

                        <div style={{ width: '92%', margin: 'auto' }}>
                            <div >
                                <div className="typeRadio">Type</div>
                                <RadioGroup aria-label="Type" name="type" row>
                                    <FormControlLabel value="home" control={<Radio />} label="home" />
                                    <FormControlLabel value="work" control={<Radio />} label="work" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                            <div className="placeHolder">
                                <Button variant="contained" color="primary">
                                    CONTINUE
                                </Button>
                            </div>
                        </div>

                    </Card>
                </div>

                <div className="mainOrderSummary">
                    <Card className="userCard">
                        <div className="myCart">Order Summery</div>
                        <div className="cart">
                            <div>
                                <img className="bookImages" src='http://books.google.com/books/content?id=GXznEnKwTdAC&printsec=frontcover&img=1&zoom=5' />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <Typography className="cartTitle" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '450' }}>Don't Make Me Think</Typography>
                                <Typography className="cartAuthor" style={{ fontSize: '10px' }}>by Steven King</Typography>
                                <Typography className="cartPrice" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600' }}>Rs. 1500</Typography>
                            </div>
                            <div className="chekoutButton">
                                <Button variant="contained" color="primary">
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default User;