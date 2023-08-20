import React from 'react'
import ScoreContainer from './ScoreContainer';

const MatchContianer = (props) => {
 
    const {  name,status,dateTimeGM}=props.matchData;
    const data=props.matchData.score;
   
    
    

  
    
  return (
    <div className='bg-slate-200 rounded-lg p-4 my-2 w-[450px] '>
    <h1 className='text-xl font-semibold text-red-500'>Name: {name}</h1>
    <h2 className='text-lg text-gray-600'>Status: {status}</h2>
    <h3 className='text-sm text-gray-500'>Date: {dateTimeGM}</h3>
    <div className='mt-3'>
        {data.map((score) => (
            <ScoreContainer key={score.id} score={score} />
        ))}
    </div>
</div>

  )
}

export default MatchContianer