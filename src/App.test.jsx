// import { expect, test } from 'vitest'
// import { sum } from './sum.js'


// test('adds 1 + 2 to equal 3', () => {
//       expect(sum(1, 2)).toBe(3)
// })

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { it } from 'vitest';

it('renders without crashing',()=>{
      const div=document.createElement('div');
      ReactDOM.render(<App/>,div);
      ReactDOM.unmountComponentAtNode(div);
})
it('renders without crashing',()=>{
      const div=document.createElement('div');
      ReactDOM.render(<App/>,div);
      ReactDOM.unmountComponentAtNode(div);
})
it('renders without crashing',()=>{
      const div=document.createElement('div');
      ReactDOM.render(<App/>,div);
      ReactDOM.unmountComponentAtNode(div);
})