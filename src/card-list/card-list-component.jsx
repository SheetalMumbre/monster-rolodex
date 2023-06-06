import React, { Component } from 'react'
import Card from '../card/card-component';

class CardList extends Component {
  render() {
    
    //console.log(this.props);

    //destructing (to use in other places too)
    const {monsters} = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster)=>{
           
            return(
            <Card monster={monster}/>
        )}
        ) }
      </div>
    )
  }
}
export default CardList;