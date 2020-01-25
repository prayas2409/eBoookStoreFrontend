import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import "./user.scss"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { borderRight } from '@material-ui/system';
import OrderPlaced from '../orderPlacedComponent/OderPlaced'

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customerDetails: false,
            orderSummery: false,
            placeOrder: true,
            editbutton: false,
            continue: true,
            checkout:true,
            fields: {},
            errors: {},
            disabled: false
        }
        this.changeEvent = this.changeEvent.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkout = this.checkout.bind(this);
        this.setEdiable= this.setEdiable.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    setEdiable(){
        this.setState({
            disabled:false,
            continue: true,
        })
    }

    orderPlaced(){
        this.setState({
            checkout:false
        })
    }

    checkout() {
        
        if (this.validateForm()) {
            // let fields = {};
            // fields["username"] = "";
            // fields["emailId"] = "";
            // fields["mobile"] = "";
            // fields["landmark"] = "";
            // fields["city"] = "";
            // fields["address"] = "";
            // fields["pincode"] = "";
            // fields["locality"] = "";
            // this.setState({ fields: fields });
            console.log("form submitted");
            this.setState({
                orderSummery: !this.state.orderSummery,
                continue: !this.state.continue,
                editbutton: !this.state.editbutton
            })
            this.setState({
                disabled:true

            })
        }
    }

    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["mobile"]) {
            formIsValid = false;
            errors["mobile"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobile"] !== "undefined") {
            if (!fields["mobile"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobile"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["landmark"]) {
            formIsValid = false;
            errors["landmark"] = "*Please enter your landmark.";
        }

        if (typeof fields["landmark"] !== "undefined") {
            if (!fields["landmark"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["landmark"] = "*Please enter valid landmark.";
            }
        }

        if (!fields["emailId"]) {
            formIsValid = false;
            errors["emailId"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailId"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailId"])) {
                formIsValid = false;
                errors["emailId"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "*Please enter your city.";
        }

        if (typeof fields["city"] !== "undefined") {
            if (!fields["city"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["city"] = "*Please enter valid city.";
            }
        }

        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "*Please enter your address.";
        }

        if (typeof fields["address"] !== "undefined") {
            if (!fields["address"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["address"] = "*Please enter valid address.";
            }
        }

        if (!fields["locality"]) {
            formIsValid = false;
            errors["locality"] = "*Please enter your locality.";
        }

        if (typeof fields["locality"] !== "undefined") {
            if (!fields["locality"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["locality"] = "*Please enter valid locality.";
            }
        }

        if (!fields["pincode"]) {
            formIsValid = false;
            errors["pincode"] = "*Please enter your pincode.";
        }

        if (typeof fields["pincode"] !== "undefined") {
            if (!fields["pincode"].match(/^[0-9]{6}$/)) {
                formIsValid = false;
                errors["pincode"] = "*Please enter valid pincode.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }

    changeEvent() {
        this.setState({
            customerDetails: !this.state.customerDetails,
            placeOrder: !this.state.placeOrder,
        })
    }

    render() {

        return (
            <div>
                <div className="mainCart">
                    <Card className="userCard">
                        <div className="myCart">My Cart (1)</div>
                        <div className="cart">
                            <div>
                                <img className="bookImages" src={this.props.data.image} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <Typography className="cartTitle" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '450' }}>{this.props.data.title}</Typography>
                                <Typography className="cartAuthor" style={{ fontSize: '10px' }}>by {this.props.data.author}</Typography>
                                <Typography className="cartPrice" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600' }}>Rs. {this.props.data.price}</Typography>
                            </div>
                            <div className="orderButton">
                                <Button variant="contained" color="primary" onClick={() => this.changeEvent()} style={this.state.placeOrder ? { display: 'block' } : { display: 'none' }}>
                                    Place order
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <fieldset disabled={this.state.disabled}>
                    <Card className="customerCard" style={this.state.customerDetails ? { minHeight: '630px' } : { height: '60px' }}>
                        <div className="CustomerPage">
                            <Typography className="customerDetails" style={{ fontSize: '15px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Customer Details</Typography>
                            <Button onClick={()=>this.setState({disabled:false})} style={{ fontSize: '12px', fontFamily: 'Arial, Helvetica, sans-serif' }} style={this.state.editbutton ? { display: 'block' } : { display: 'none' }}>Edit</Button>
                        </div>

                        <div className="textFieldRow">
                            <div>
                                <TextField label="Name" name="username" variant="outlined" value={this.state.fields.username} onChange={this.handleChange} style={{ outlineColor: 'coral' }} />
                                <div className="errorMsg">{this.state.errors.username}</div>
                            </div>
                            <div>
                                <TextField label="Phone Number" name="mobile" variant="outlined" value={this.state.fields.mobile} onChange={this.handleChange} />
                                <div className="errorMsg">{this.state.errors.mobile}</div>
                            </div>
                        </div><br></br>

                        <div className="textFieldRow">
                            <div>
                                <TextField label="Pincode" name="pincode" value={this.state.fields.pincode} onChange={this.handleChange} variant="outlined" />
                                <div className="errorMsg">{this.state.errors.pincode}</div>
                            </div>
                            <div>
                                <TextField label="Locality" name="locality" value={this.state.fields.locality} onChange={this.handleChange} variant="outlined" />
                                <div className="errorMsg">{this.state.errors.locality}</div>
                            </div>
                        </div><br></br>

                        <div className="textFieldAddress">
                            <TextField label="Email ID" multiline name="emailId" value={this.state.fields.emailId} onChange={this.handleChange} variant="outlined" style={{ width: '432px' }} InputProps={{ disableUnderline: true }} />
                        </div><div className="errorMsg">{this.state.errors.emailId}</div><br></br>

                        <div className="textFieldAddress">
                            <TextField label="Address" multiline name="address" value={this.state.fields.address} onChange={this.handleChange}
                                rows="3" variant="outlined" style={{ width: '432px'}} InputProps={{ disableUnderline: true }} />
                        </div><div className="errorMsg">{this.state.errors.address}</div><br></br>

                        <div className="textFieldRow">
                            <div>
                                <TextField label="City/Town" name="city" value={this.state.fields.city} onChange={this.handleChange} variant="outlined" />
                                <div className="errorMsg">{this.state.errors.city}</div>
                            </div>
                            <div>
                                <TextField label="Landmark" name="landmark" value={this.state.fields.landmark} onChange={this.handleChange} variant="outlined" />
                                <div className="errorMsg">{this.state.errors.landmark}</div>
                            </div>
                        </div><br></br>

                        <div style={{ width: '92%', margin: 'auto', paddingBottom: '20px' }}>
                            <div >
                                <div className="typeRadio">Type</div>
                                <RadioGroup aria-label="Type" name="type" row>
                                    <FormControlLabel value="home" control={<Radio />} label="Home" />
                                    <FormControlLabel value="work" control={<Radio />} label="Work" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </div>
                            <div className="placeHolder">
                                <Button variant="contained" color="primary" onClick={() => this.checkout()} style={this.state.continue ? { display: 'block' } : { display: 'none' }}>
                                    CONTINUE
                                </Button>
                            </div>
                        </div>
                    </Card>
                    </fieldset>
                </div>

                <div className="mainOrderSummary" style={this.state.orderSummery ? { height: '210px' } : { height: '60px' }}>
                    <Card className="userCard">
                        <div className="myCart">Order Summery</div>
                        <div className="cart">
                            <div>
                                <img className="bookImages" src={this.props.data.image} />
                            </div>
                            <div style={{ marginLeft: '5%' }}>
                                <Typography className="cartTitle" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '450' }}>{this.props.data.title}</Typography>
                                <Typography className="cartAuthor" style={{ fontSize: '10px' }}>by {this.props.data.author}</Typography>
                                <Typography className="cartPrice" style={{ fontSize: '14px', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '600' }}>Rs. {this.props.data.price}</Typography>
                            </div>
                            <div className="chekoutButton">
                                <Button variant="contained" color="primary"  onClick={() => this.orderPlaced()} >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <div style={this.state.checkout ? { display: 'none' } : { display: 'display' }}>
                    <OrderPlaced />
                </div>
            </div>
        )
    }
}


export default User;