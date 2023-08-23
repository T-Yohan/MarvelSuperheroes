import React from 'react'

const InfoHeroes = ({data}) => {
  return (
    <div> Picture : {data.image} <br/> Hero : {data.HeroName} <br/> Name : {data.RealName} </div>
  )
}

export default InfoHeroes