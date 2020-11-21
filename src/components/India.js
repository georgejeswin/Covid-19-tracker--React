import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
//import Footer from './Footer'
import Axios from 'axios';


class India extends Component {

    constructor(){
        super();
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({
                data:response.data
            })
        })
    }


    render() {
        return (
            <div>
                <div className="row text-center ">
                    <div className="col-md-12 text-center " >
                        <br/>
                        <h4 className="text-secondary col-md-12 font-weight-bold ">COVID-19 CORONA VIRUS PANDEMIC</h4>
                        <br/>
                        
                        
                        <h1 style={{color: "#e74e0d",fontFamily:"Impact, Charcoal, sans-serif"}} className="text-center ">INDIA <img src="https://www.countryflags.io/IN/shiny/64.png" alt="India"/></h1>
                    </div>
                    <div className="col-md-12 font-weight-bold " >
                        <div className="text-center mx-auto" >
                            <div className="col-md-12 text-center justify-content-center">
                            <Card className="text-dark font-weight-bold" style={{border:"none",backgroundColor:"#eaeaea"}} >
                            <Card.Body className="text-center ">
                                <Card.Title className="font-weight-bold">Total Cases</Card.Title>
                                <h1 className="font-weight-bold">{this.state.data.cases}</h1>
                                <Card.Text>
                                <h6 className="font-weight-bold"> Today Cases :{this.state.data.todayCases}</h6>
                                </Card.Text>
                                
                                
                                
                                
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-md-12">
                            <Card className="" style={{border:"none",}}>
                            <Card.Body className="text-center">
                                <Card.Title className="font-weight-bold">Active Cases</Card.Title>
                                <h1 className="font-weight-bold">{this.state.data.active}</h1>
                                
                                
                                
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-md-12" style={{border:"none"}}>
                            <Card className="" style={{border:"none",backgroundColor:"#eaeaea"}}>
                            <Card.Body className="text-center">
                                <Card.Title className="font-weight-bold">Total Recocery</Card.Title>
                                <h1 className="font-weight-bold">{this.state.data.recovered}</h1>
                                <Card.Text>
                                <h6 className="font-weight-bold">Today Recovered :{this.state.data.todayRecovered}</h6>
                                </Card.Text>
                                
                                
                            </Card.Body>
                            </Card>
                            </div>
                            <div className="col-md-12" >
                            <Card className="" style={{border:"none"}}>
                            <Card.Body className="text-center">
                                <Card.Title className="font-weight-bold">Total Deaths</Card.Title>
                                <h1 className="font-weight-bold">{this.state.data.deaths}</h1>
                                <Card.Text>
                                <h6 className="font-weight-bold"> Today Death :{this.state.data.todayDeaths}</h6>
                                </Card.Text>
                                
                                
                            </Card.Body>
                            </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Statedata/>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default India;
