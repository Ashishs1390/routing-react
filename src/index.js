import React from 'react';
import ReactDOM from 'react-dom';
import { hello , goodbye } from './lib'

ReactDOM.render(
	<div>
		{hello}
		{goodbye}
	</div>,
	document.getElementById('react-container')

)