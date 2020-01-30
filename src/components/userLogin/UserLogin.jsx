import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getMethod } from '../../service/httpService';
import ToolBar from '../headerBarComponent/headerbar';
import Footer from "../footerComponent/Footer";
import Snackbar from '@material-ui/core/Snackbar';

class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
        this.loginFunction = this.loginFunction.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }
    loginFunction() {
        let path = {
            path: `userLogin?username=${this.state.fields.username}&password=${this.state.fields.password}`,
        }
        getMethod(path).then((res) => {
            console.log("login : ->", res);
        }).catch(err => {
            console.log(err);
        })
    }

    Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    render() {
        return (
            <div>
                <ToolBar />
                <div style={{ marginLeft: '470px', marginTop: '150px' }}>
                    <div style={{ marginLeft: '55px' }}>
                        <h1 >Sign In</h1>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <TextField id="outlined-basic" label="UserName" variant="outlined" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    </div>
                    <div style={{ marginTop: '15px', marginLeft: '60px' }}>
                        <Button variant="contained" onClick={this.loginFunction}>Login</Button>
                    </div>
                </div>
                {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This is a success message!
        </Alert>
                </Snackbar>
                <div style={{ marginTop: '192px' }} >
                    <Footer />
                </div>
            </div>
        )
    }
}

export default UserLogin;