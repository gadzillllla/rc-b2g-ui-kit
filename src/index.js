import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from './components/Title';

const title = 'HELLO!';

ReactDOM.render(
  <div>
    {title}
    {/* <Container color="#333"> */}
    <Title>Hello world</Title>
    {/* </Container> */}/>
  </div>,
  document.getElementById('app')
);

module.hot.accept();
