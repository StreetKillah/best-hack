
import React from "react";
import '../App.js';
import * as axios from 'axios';
import {NavLink} from 'react-router-dom';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleClick = this.handleClick.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }

     styles = {
        complete: {
            textDecoration: "none",
            color: 'white',
          },
    }

     companies = ['IBM','DAI.DEX','SHOP.TRT','TSCO.LON' ];
    //  this.handleSubmit = this.handleSubmit.bind(this);


    //   handleSubmit = (event) => {
    //     if(event) {
    //     axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${event.target.value}&apikey=demo`).then(response => {
    //            console.log(response.data);
    //         });
    //     }
    // }
    handleClick = (e) =>{
        this.setState({value: e.target.value});
        console.log(this.state.value);
    }

  render(){
    return (
    
    
    <div className="main">
        <div className="main_container" id="container">
            <ul className="columns" id="columns">
                Список акций:
            {this.companies.map((item) =>
                    <li key={item.toString()} value={item} onClick={this.handleClick} className="company_name"
                  >
                      <NavLink style={this.styles.complete} to='/stock'>
                      <div value={item} >
                             {item}   
                     </div>
                     </NavLink>
                     </li>
                     )}


            </ul> 
              
           </div>
    </div>
    );
  }
}

export default Main;



