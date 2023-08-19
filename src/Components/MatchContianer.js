import React from 'react'

const MatchContianer = (matchData) => {
    console.log( matchData);
    const {status,t1,t2} = matchData;
  return (
    <div className='bg-slate-200 w-56 m-1 p-5'>
        <h1>{t1} </h1>;
        <h1> {t2}</h1>;
        <h3>{status}</h3>;
        
    </div>
  )
}

export default MatchContianer