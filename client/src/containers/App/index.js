import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

import Login from '../Login';
import { updateUsr } from '../../actions';

class App extends Component {
	switcher = _ => {
		switch(this.props.page) {
			case 'login': return (<Login />); break;
			case 'welcome': return (<p>sanity</p>); break;
		}
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-title">HackSU</p>
        </header>
        <div className="body">
				{this.switcher()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		usr: state.data.usr,
		page: state.page.page
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onUpdateUsr: usr => dispatch(updateUsr(usr))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
