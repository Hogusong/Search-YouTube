import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(e) {
    if (e.keyCode === 13 || e.which === 13) {
      this.props.search(this.state.term)      
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={e => this.setState({ term: e.target.value })} 
              onKeyPress={this.keyPressed}
              autoFocus={true} />
        <button className="search"
          onClick={()=> this.props.search(this.state.term)} >Search</button>
      </div>
    );
  }
}

export default SearchBar;
