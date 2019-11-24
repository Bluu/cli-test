import React from 'react';
import {Text, Color, render} from 'ink';

const App = ({name}) => (
	<Text>
		Hello, <Color green>{name}</Color>
	</Text>
);

export default App
