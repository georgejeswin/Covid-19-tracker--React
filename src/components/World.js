import React, { Component } from 'react'
import Axios from 'axios'
//import Footer from './Footer'

class World extends Component {

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{

        this.setState({data:response.data});
    })
    }

    render() {
        return (
            <div className="row">
                 <div className="col-md-12">
                 <h4 className="text-secondary col-md-12 font-weight-bold text-center mt-3 mb-4">COVID-19 CORONA VIRUS PANDEMIC</h4>
                      <table style={{marginLeft:"auto",marginRight:"auto",backgroundColor:"#eaeaea"}} className="table text-dark table-bordered ">
                          <thead>
                              <tr>
                                  <td>Country</td>
                                  <td>Total cases</td>
                                  <td>Recovered</td>
                                  <td>Death</td>
                              </tr>
                          </thead>
                          <tbody>
                                {
                                    this.state.data.map((itm,ky)=>{
                                        return(
                                            <tr>
                                                <td>{itm.country}
                                                <br/>
                                                <img style={{width:'40px'}} src={itm.countryInfo.flag} alt=""/></td>
                                                <td>{itm.cases}</td>
                                                <td>{itm.recovered}</td>
                                                <td>{itm.deaths}</td>
                                            </tr>
                            
                                        )
                                    })
                                }
                          </tbody>
                      </table>
                 </div>
                 
            </div>
        )
    }
}

export default World;