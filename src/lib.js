import React from 'react';
import text from './titles.json';
import stylesheets from './stylesheets/hello.css';
export const hello = (
	<h1 id="title"
		className="hello">
		{text.hello}
	</h1>
)


export const goodbye = (
	<h1 id= 'title'
		className="header">
		{text.goodbye}
	</h1>

)