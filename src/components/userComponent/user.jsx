import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import ToolBar from '../headerBarComponent/headerbar';
import "./user.scss"
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'


class User extends Component {

    render() {
        return (
            <div>
                <ToolBar function={this.setbooks} />
                <div className="mainCart">
                    <Card className="userCard">

                        <div className="myCart">My Cart</div>
                        <div className="cart">
                            <div>
                                <img className="bookImage" src='http://books.google.com/books/content?id=GXznEnKwTdAC&printsec=frontcover&img=1&zoom=5' />
                            </div>
                            <div>
                                <div className="cartTitle">Dont't Make Me Think<br /></div>
                                <div className="cartAuthor">by Steven King<br /></div>
                                <div className="cartPrice">Rs. 1500</div>
                            </div>
                        </div>
                        {/* <div className="cartIcon">
                            <RemoveCircleOutlineIcon />
                            <TextField id="outlined-basic" variant="outlined" style={{ height: 10, width: 20 }} />
                            <AddCircleOutlineIcon />
                        </div> */}
                        <div className="PlaceHolder">
                            <Button variant="contained" color="primary">
                                Place Holder
                                </Button>
                        </div>

                    </Card>
                </div>
                <div>
                    <Card className="customerCard">
                        <div className="customerDetails">customer Details</div>
                        <div className="textFieldRow">
                            <div>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                            </div>
                        </div>
                        <div className="textFieldRow">
                            <div>
                                <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Locality" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <TextField id="outlined-basic" label="Address" variant="outlined" />
                        </div>
                        <div className="textFieldRow">
                            <div>
                                <TextField id="outlined-basic" label="City" variant="outlined" />
                            </div>
                            <div>
                                <TextField id="outlined-basic" label="Landmark" variant="outlined" />
                            </div>
                        </div>
                        <div >
                            <div className="typeRadio">Type</div>
                            <RadioGroup aria-label="Type" name="type" row>
                                <FormControlLabel value="home" control={<Radio />} label="home" />
                                <FormControlLabel value="work" control={<Radio />} label="work" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </div>
                        <div className="PlaceHolder">
                            <Button variant="contained" color="primary">
                                CONTINUE
                                </Button>
                        </div>
                    </Card>
                </div>

                <div className="mainOrderSummary">
                    <Card className="userCard">

                        <div className="myCart">Order Summery</div>
                        <div className="cart">
                            <div>
                                <img className="bookImage" src='http://books.google.com/books/content?id=GXznEnKwTdAC&printsec=frontcover&img=1&zoom=5' />
                            </div>
                            <div>
                                <div className="cartTitle">Dont't Make Me Think<br /></div>
                                <div className="cartAuthor">by Steven King<br /></div>
                                <div className="cartPrice">Rs. 1500</div>
                            </div>
                        </div>
                        <div className="PlaceHolder">
                            <Button variant="contained" color="primary">
                                CHECKOUT
                                </Button>
                        </div>

                    </Card>
                </div>
            </div>
        )
    }
}

export default User;