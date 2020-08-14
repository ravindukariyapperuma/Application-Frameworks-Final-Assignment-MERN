import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import NavbarPage from "./NavbarPage";
import Footerpage from "./Footerpage";
import {Link} from "react-router-dom";
const queryString = require('query-string');

const axios = require('axios');
export class Addgame extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            name: "",
            description: "",
            link: "",
            image: null,
        }
    }

    componentDidMount(){
        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
        })
    }

    handleLinkChange = event => {
        this.setState({
            link: event.target.value
        })
    }

    handlenameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleDiscriptionChange = event => {
        this.setState({
            description: event.target.value
        })
    }


    handleRegisterSubmit = async event =>{
        event.preventDefault();

        let data = {
         username : this.state.username,
         name : this.state.name,
         description : this.state.description,
         link : this.state.link,
         image : this.state.image,
    }
    console.log(data)

        let formdata = new FormData();
        formdata.set('username',this.state.username);
        formdata.set('name',this.state.name);
        formdata.set('description',this.state.description);
        formdata.set('link', this.state.link);
        formdata.set('image',this.state.image);

                    console.log(formdata);

                   await axios.post('http://localhost:5000/game/add',formdata)
                        .then((res) =>{
console.log('res',res);
                    this.setState({
                        name: "",
                        description: "",
                        link: "",
                        image: null,
                    });
                        });
                    // window.location = '/';
                    // alert('Product Details Added Successfully')


    };

    OnChangeImage(e){

        console.log(e.target.files,"$$$$");

        let file = e.target.files[0]

        this.setState({
            image : file
        })

    }




    render() {
        return (
            <div>
            <div className="container">
                <div className="row-md" style={{textAlign: "right"}}>
                    <Link to={'/?username='+this.state.username}><i className="fa fa-times icon fa-lg"></i></Link>
                </div>
                <br/><br/><br/>

            <MDBContainer>
            <MDBRow>
            <MDBCol md="" style={{backgroundColor: "#ffffff"}}>
            <form onSubmit={this.handleRegisterSubmit}>
            <p className="h4 text-center mb-4">Add Game</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
            Game Name
        </label>
        <input type="text" id="defaultFormContactNameEx" value={this.state.name} className="form-control" onChange={this.handlenameChange}/>
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
            Link
        </label>
        <input type="text" id="defaultFormContactEmailEx" value={this.state.link} className="form-control" onChange={this.handleLinkChange}/>

            <br />
            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
            Description
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" value={this.state.description} className="form-control" rows="3" onChange={this.handleDiscriptionChange}/>


            <div className="form-group">
            <label for="exampleFormControlFile1">Image</label>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e)=>this.OnChangeImage(e)}/>
            </div>

            <div className="text-center mt-4">
            <MDBBtn color="dark" block type="submit">
            Send
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
            </div>
            </form>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
            </div>

{/*<Footerpage/>*/}

            </div>
    )
    }
}

export default Addgame