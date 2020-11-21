import React, { Component } from 'react';
import {Accordion,Card,Button} from 'react-bootstrap';
import Axios from 'axios';

export default class   extends Component {

    constructor(){
        super();
        this.state={
            StateData:{}
        }
    }

    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
             this.setState({
                StateData:response.data
            })
        })
    }

    render() {

        let keys=Object.keys(this.state.StateData)

        return (
            <div>
                <div className="row">
                     <div className="col-md-12">
                     <Accordion>


                        {keys.map((itm,ky)=>{
                            let districts=this.state.StateData[itm].districtData;
                            //let district_keys=Object.keys(districts);

                            let total_active=0;
                            let total_confirmed=0;
                            let total_deaths=0;
                            let total_recover=0;

                            let district_list=[]
                            for(let x in districts){
                                total_active+=districts[x].active; 
                                total_confirmed+=districts[x].confirmed;
                                total_deaths+=districts[x].deceased;
                                total_recover+=districts[x].recovered;
                                

                                let ob=districts[x]
                                ob["district_name"]=x;
                                district_list.push(ob);
                            }
                            //console.log(district_keys)

                            return(
                                <Card className=" justify-content-center" >
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="light" eventKey={ky}>
                                        <span className=" mx-7 btn-dark px-4">{itm}</span> <span className=" mx-3">Total cases  {total_confirmed} </span>  <span className=" mx-3">Active  {total_active}</span> <span className="mx-3">Recovered {total_recover}</span> <span className="mx-3">Total death {total_deaths} </span>   
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={ky}>
                                    <Card.Body className=" justify-content-center text-center" >
                                        <table style={{marginLeft:"auto",marginRight:"auto",float:"center"}} className=" col-xl-12 col-lg-12 table table-bordered table-responsive  mx-auto text-center justify-content-center"> 
                                            <thead>
                                                <tr>
                                                    <td>District</td>
                                                    <td>Confirmed Cases</td>
                                                    <td>Active</td>
                                                    <td>Recovered</td>
                                                    <td>Deaths</td>
                                        
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    district_list.map((itm,ky)=>{
                                                        return(
                                                            <tr>
                                                                <td>{itm.district_name}</td>
                                                                <td>{itm.confirmed}</td>
                                                                <td>{itm.active}</td>
                                                                <td>{itm.recovered}</td>
                                                                <td>{itm.deceased}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>    
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                                
                            
                        })

                    }

                
                    </Accordion>
                     </div>
                </div>
            </div>
        )
    }
}
