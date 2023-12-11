
import React from 'react'
import ReactDOM  from 'react-dom/client'


function MyThing() {
  return (
    <div>
      Hello World!
    </div>
  )
}

function Book() {
  return (
    <div className='book'>
       <div className='title'>
          Title
       </div>
       <div className='author'>
          Author
       </div>
       <ul className='stats'>
         <li className='rating'>
            5 stars
         </li>
         <li className='isbn'>
           12-45673-67
         </li>
       </ul>
    </div>
  )
}

function Greetings() {
  let username = 'root';
  
  return (
    <div>
      {username ? (undefined || null) : "Not Logged In" }
      {username === 'root' ? 'Hello ' + username: 'Not Logged in'}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <MyThing />
    <Book />
    <Greetings />
  </div>
)