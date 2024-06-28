import React from 'react'

const Greeting = (props) => {
//console.log(props);
    const{fullName,age}=props;
  return (
   <h1> {fullName}hello ibtihel,And I'am {age}</h1>
  )
}

export default Greeting