#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';
import meow from 'meow';

import App from './ui';

const cli = meow(`
	Usage
	  $ cli

	Options
		--name  Your name

	Examples
	  $ cli --name=Jane
	  Hello, Jane
`);

render(<App />, cli.flags)