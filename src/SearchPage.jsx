import React from 'react'
import { Link ,Route} from 'react-router-dom'


export default function SearchPage(){
  return (
    <div className="open-search">
      <Link to="/search"><button>Add a book</button></Link>
    </div>
  )
}

