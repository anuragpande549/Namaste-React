import React from 'react'
import { useRouteError } from "react-router-dom";

function Error() {

    const myError =  useRouteError()

  return (

    <div>Error my {myError.status}</div>
  )
}

export default Error