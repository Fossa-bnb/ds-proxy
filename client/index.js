import React from 'react';
import ReactDOM from 'react-dom';

const title = 'FossaBnB';

const Components = ({myID}) => {
  <div className = "my-components">
    <Photos />
  </div>
}

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('main-app')
);