// @flow

import React from 'react';
import { render } from 'react-dom';
import Index from './pages/index';
import 'typeface-roboto'
import 'url-search-params-polyfill';
import 'grommet/grommet.min.css'


render(<Index />, document.querySelector('#root'));
