import React from 'react'

const Docs = ({params}) => {
    console.log(params)
  return (
    <div>This is {params.id} docs</div>
  )
}

export default Docs