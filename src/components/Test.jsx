import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';

function Test() {
  return (
    <div>hello {location.state.id}</div>
  )
}

export default Test