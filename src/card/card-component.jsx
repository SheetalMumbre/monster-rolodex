import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const{id, email, name} = this.props.monster;
    return (
      <div>
        <div className='card-container' key={id}>
                <img alt={`monster ${name}`}
                src={`https://robohash.org/${id}/?set1"`}
                />
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
      </div>
    )
  }
}
