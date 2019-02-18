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
    const that = this
    e.preventDefault();

    console.log(e.target[e.target.options['selectedIndex']].id)
    
    let setSetId = new Promise(function(resolve, reject) {

     resolve(that.setState( {setId: e.target[e.target.options['selectedIndex']].id} ))
      
    });

    setSetId.then(() => this.pullItems())
  }

  render() {
    return (
      <div className="App">
      <Selector function={this.handleGo}/>
        {this.state.data.map(item => {
          return <h2><a href={item.link} target="_blank">{item.title}</a></h2>
        })}
      </div>
    );
  }
}

export default App;
