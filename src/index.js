//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function () {

	function getButtonText() {
		return 'Click Me!'
	}
	return (
		<div>
			<label for="name" className="label">Enter name:</label>
			<input id="name" type="text"/>
			<button style={{ backgroundColor: 'blue', color: 'white'}}>
				{getButtonText()}
			</button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'))

