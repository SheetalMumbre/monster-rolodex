import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          className={`search-box ${this.props.className}`}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
