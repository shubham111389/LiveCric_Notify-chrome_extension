import React from 'react'

const ScoreContainer = (props) => {
    const { r,w ,o,inning}=props.score;
  return (
    <div className='bg-gray-100 rounded-lg p-3'>
    <h3 className='text-lg font-semibold'>Score at Inning : {inning}</h3>
    <p className='text-base text-gray-700'>Runs: {r}</p>
    <p className='text-base text-gray-700'>Wickets: {w}</p>
    <p className='text-base text-gray-700'>Overs: {o}</p>
</div>
  )
}

export default ScoreContainer