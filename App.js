// Todo App , app.js file 
import React from 'react';
import logo from './pjlogo.jpg';
import './App.css';

class App extends React.Component{

  constructor(props){ // props is like function parameter
    super(props);
    this.state = { // here state is object
      newItem: "", // newItem is initially empty
      list:[] // array of list items
    }
  }

   addItem(todoValue){
    if (todoValue !== ""){ // if todoValue isnot empty
        const newItem ={ //  newitem is object 
          id: Date.now(),  // object property
          value: todoValue, // object property
          isDone:false  // object property
        };
        const list = [...this.state.list]; // triple dot means to append all the values to variable list
        list.push(newItem);

        this.setState({
          list, 
          newItem: ""
        }); 
    }
   }

   deleteItem(id){
    const list =[...this.state.list];
    const updatedlist = list.filter(item =>item.id !==id);
     this.setState({list:updatedlist})
   }

    updateInput(input){
      this.setState({newItem:input});
    }

  render() {
    return(
      <div>
        <img src ={logo} width ="100" height ="100" className="logo" />
        <h1 className ="app-title"> pjbtc ToDo App </h1>
        <div className ="container">
          Add an Item ....
          <br />
          
          <input
            type ="text"
            className ="input-text"
            placeholder ="Write a ToDo" 
            required
            value={this.state.newItem}
            onChange ={e =>this.updateInput(e.target.value)}
            />
            <button 
            className ="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            > Add Todo </button> 
            <div className ="list">
              <ul>
                  {this.state.list.map(item =>{
                    return (
                      <li key ={item.id}>
                        <input 
                        type ="checkbox"
                        name ="idDone"
                        checked ={item.isDone}
                        onChange= {()=>{}}
                        />
                        {item.value}
                        <button 
                          className="btn"
                          onClick={()=>this.deleteItem(item.id)}
                          >Delete</button>
                      </li>
                      );
                  })}
                <li>
                  <input type ="checkbox" name="" id ="" />
                  Record youtube videos
                  <button> Delete </button>
                </li>
              </ul> 
            </div>

        </div>
        </div>
      );
  }
}

export default App;
