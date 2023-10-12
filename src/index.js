import React from 'react';
import ReactDOM from 'react-dom/client';


function MyThing() {
  return (
    <div>
      Hello, World!
    </div>
  )
}

function Book() {
  return (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
         The Author
      </div>
      <ul className='stats'>
         <li className='rating'>
           5 stars
         </li>
         <li className='isbn'>
           12-345678-22
         </li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <div>
    <MyThing /> <Book/>
  </div>
)