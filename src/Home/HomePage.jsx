import React from 'react'
import { Link , Route} from 'react-router-dom'


export default function HomePage(props){
  return (
    <Link to="/"><button className="close-search" onClick={props.resetSearch} >Close</button></Link>
  )
}
