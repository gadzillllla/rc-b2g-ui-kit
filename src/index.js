import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'react-emotion';
import Button from './components/Button/Button.js';

const title = 'DEMO PAGE';

const gradient =
  'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)';

ReactDOM.render(
  <div
    className={css`
      display: flex;
      flex-direction: column;
    `}
  >
    {title}
    <Button> BUTTON </Button>
    <Button disabled> DISABLED </Button>
    <Button danger> DANGER </Button>
    <Button inverted> INVERTED </Button>
    <Button ghost> GHOST </Button>
    <Button pseudoLink> PSEUDO LINK </Button>
    <Button splash>SPLASH</Button>
    <Button> VERY VERY BIG BIG BUTTON </Button>
    <Button customColor={'green'} inverted>
      CUSTOM COLOR
    </Button>
    <Button customColor={'pink'} customBackground={gradient} splash>
      CUSTOM BG
    </Button>
  </div>,
  document.getElementById('app')
);
