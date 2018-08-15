import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';

class App extends Component {
  state = {
    name: '',
    alive: true
  };

  handleChange = ({ target: { type, name, value, checked } }) => {
    this.setState({ [name]: type === 'text' ? value : checked });
  };

  handleSubmit = e => {
    e.preventDefault();
    // dispatch something
    const { name, alive } = this.state;
    this.props.addCat(name, alive);
    this.setState({ name: '', alive: true });
  };
  render() {
    return (
      <div className="App">
        <div>
          <h3>Zam's Cats</h3>
          <ul>
            {this.props.allCats.map(cat => (
              <li key={cat.name}>
                {cat.name} - {cat.alive ? 'Alive' : 'RIP'}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          </div>
          <div>
            <input type="checkbox" name="alive" onChange={this.handleChange} checked={this.state.alive} id="alive" />
            <label htmlFor="alive">is Alive</label>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
// take array of cats and set it to allCats
// this function returns an object. The keys will dictate component
const mapStateToProps = state => {
  return {
    allCats: state.cat.all
  };
};

export default connect(
  mapStateToProps,
  actions
)(App);
