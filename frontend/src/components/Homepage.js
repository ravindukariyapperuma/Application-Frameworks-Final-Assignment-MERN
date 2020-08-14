import React, { Component } from 'react'
import NavbarPage from "./NavbarPage";
import Footerpage from "./Footerpage";
import './Viewgame.css'
import axios from 'axios'
import { MDBBtn } from "mdbreact";

const queryString = require('query-string');

export class Homepage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            games: [],
        }
    }
    componentDidMount() {

        var values = queryString.parse(this.props.location.search)
        console.log(this.props.location.search)
        console.log(values.username)
        this.setState({
            username: values.username,
        })
        axios.get('http://localhost:5000/game/finds')
            .then(response=>{
                if(response.data.length>0){
                    this.setState({
                        games :  response.data.map(games=>games),
                        //   subcategory : response.data[0].CategoryName
                    })
                }
            })
    }

    // deleteGame(game_id) {
    //     axios.delete('http://localhost:5000/game/delete/'+game_id)
    //         .then(res=>console.log(res.data))
    // }


        render() {
        return (
            <div>
                <NavbarPage username={this.state.username}/>
            <br/><br/><br/>
                <div>
                    <div className="row" style={{textAlign: "center", marginLeft: "1%", marginRight: "1%", marginTop: "1%"}}>
                        {this.state.games.map(games => (
                        <div className="col-md-3">

                            <div className="card1">
                                 {/*<img src= {item} alt="Product" style={{width: "95%" , marginTop: "2.5%" , marginBottom: "2.5%" }} /> */}
                                {/* <img src={products.image}/> */}
                                <img src={'http://localhost:5000/'+games.image} alt="Product" style={{width: "95%", marginTop: "2.5%", marginBottom: "2.5%"}}/>
                                <div className="container1" style={{color: "#000000"}}>
                                    <h4><b></b></h4>

                                    <p>

                                        {/* Product ID : {products.productid}<br/> */}
                                        <div className="raw" style={{backgroundColor: "#ff4444", color: "white"}}>
                                            <h3>{games.name}</h3>
                                        </div>
                                        <div className="raw">
                                            <h5>{games.description}</h5>
                                        </div>
                                        <div className="col" style={{textAlign: "center"}}>




                                                <a href={games.link}>
                                                    <button type="button" className="btn btn-danger btn-sm btn-block"><i
                                                        className="fa fa-download"> </i>Download</button></a>

                                        </div>
                                        <div className="col" style={{textAlign: "center", marginTop: "2.5%"}}>





                                                {/*<button type="button" className="btn btn-danger btn-sm btn-block" onClick={this.deleteGame(games._id)}><i*/}
                                                {/*    className="fa fa-trash"> </i>Delete</button>*/}

                                        </div>

                                    </p>
                                </div>
                            </div>

                        </div>

                            ))}
                    </div>
                </div>
            <Footerpage/>
            </div>
    )
    }
}

export default Homepage