import React, { Component } from 'react';
import Selector from './components/Selector';
import './App.css';

import API from './utils/API';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      setId: 0,
      data: []
    }
  }

  componentDidMount(){
    // this.pullItems();

  }
  
  pullItems = () => {
      console.log(this.state.setId)
      API.getItems(this.state.setId)
          .then(result => {
            const list = result.data
            let data = []
            list.map(item => {
              const object = {
                title: item.description,
                link: item.link
              }
              data.push(object)
            })
  
            this.setState( {data: data} )
          })
  }

  handleGo = (e) => {
    e.preventDefault();
    console.log('SELECTED COURSE')
    console.log(e.target[e.target.options['selectedIndex']].id)
    this.setState( {setId: e.target[e.target.options['selectedIndex']].id} )
    this.pullItems();
  }

  render() {
    return (
      <div className="App">
      <Selector function={this.handleGo}/>
        {this.state.data.map(item => {
          return <h1><a href={item.link} target="_blank">{item.title}</a></h1>
        })}
      </div>
    );
  }
}

export default App;
