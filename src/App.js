import { Component } from 'react';
import CardList from './card-list/card-list-component.jsx';
import './App.css';
import SearchBox from './search-box/search-box-component.jsx';

class App extends Component {
  constructor(){
    super();
    // this.state = { 
    //   name: 'pooh'
    // };

    this.state = {
      monsters :[],
      searchField : '',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())       //we get whatever from response.json pass to users 
    .then((users) => 
    this.setState(
      () => {
        return {monsters: users};  //monsters point to users
      },
      // () => {
      //   console.log(this.state);
      // },
    )
    )
  }

  onSearchChange = (event) => {
    //console.log(event.target.value); return value enter in searchbox
    const searchField = event.target.value.toLocaleLowerCase();
   
    this.setState(() => {
      return {searchField};
    });
    //console.log(searchField); return value enter in searchbox
  }

  render(){

    //optimization
    const { monsters, searchField } = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
      
    });

    return (
    <div className="App">
      <header>
      {/* <input type='search' placeholder='Search monsters' className='search-box' onChange={onSearchChange} /> */}
          {/* <button onClick={() => {this.setState ({ name:'blue'});
          }}>Click</button> */}
        <div>
          {/* {filteredMonsters.map((monster) => {
              return <h1 key={monster.id}>{monster.name}</h1>
            })
          } */}
        </div>
      </header>
      <SearchBox placeholder ='search monsters' onChangeHandler={onSearchChange} className='monster-search-box'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
    }
}

export default App;
