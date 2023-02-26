import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/postform.css'

export default function PostForm() {
  return (
    <div className='form-container'>
        <form action='/page-layout'>
          <input type="text" placeholder='No file choosen'></input>
          <button>Browse</button><br/>
          <input type='text' placeholder='auther' className='special'></input> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input type="text" placeholder='location' className='special'></input><br/>
          <input type="text" placeholder="Discription"></input><br/>
          <Link to="/page-layout"><button id='postButton' type='submit'>Post</button></Link>
        </form>
    </div>
  )
}
