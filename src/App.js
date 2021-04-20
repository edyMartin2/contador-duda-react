import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import { themes } from "./service";
import axios from 'axios';
import {Card,CardContent,Typography} from '@material-ui/core';
const { string, bool, oneOf } = PropTypes;



export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      visits:0
    };


  }
  static propTypes = {
    title:string
  };

  static defaultProps = {
    title: "Parques"
  };

  componentDidMount() {
    var params = new URLSearchParams();
    params.append("id",1);
    var ctx = this;
    axios.get('https://webservices.bilda.bar/',params)
        .then(res => {
          ctx.state.count  = res.data.length
        })
        .catch( e => console.log(e));
    document.title = `You clicked ${this.state.visits} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.visits} times`;
  }
  x = setInterval(()=>{
    if (this.state.visits < this.state.count){
      this.setState({visits: this.state.visits + 1 })
    }
  }, 200);

  render() {
    const root = ['root','container','title'];

    return (
        <Card className={root[0]}>
          <CardContent >
            <Typography className={root[2]}>
              Numero de {this.props.title}
            </Typography>
            <Typography className={root[1]}>
              {this.state.visits}
            </Typography>
          </CardContent>
        </Card>
    );
  }
};
