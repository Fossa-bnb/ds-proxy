import React from 'react';
import ReactDOM from 'react-dom';

const title = 'FossaBnB';
const myId = 2;


const Components = ({myID}) => {
  return (
    <div className = "my-components">
      <Photos myId={myID} />
    </div>
  )
};

// const myId = URL_Library.getParams('myID');

ReactDOM.render(
  <Components myID={myID} />,
  document.getElementById('main-app')
);