import ClipLoader  from 'react-spinners/ClipLoader'
import React from 'react'

const Spinner = ({loading}) => {
const override = {
    display :'block',
    margin : '100px auto'
}
  return (
    <ClipLoader  
    color= 'blue'
    loading={loading}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner