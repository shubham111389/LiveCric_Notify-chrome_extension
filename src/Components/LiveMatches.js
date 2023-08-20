import React from 'react'
import { MATCHES_API } from '../constant';
import { useEffect,useState } from 'react';
import MatchContianer from './MatchContianer';

const LiveMatches = () => {
    const [matchData,setMatchData]=useState([]);
    useEffect(()=>{
        getMatchData();
    },[] );

    const getMatchData = async () => {
        const data = await fetch(MATCHES_API);
        const json = await data.json();
      
        setMatchData(json.data);
      }
       console.log(matchData)
    
  return (
    <div className='flex flex-col'>
        { matchData.map((match)=>
        <MatchContianer matchData={match} key={match.id}/>
        )
        }

    </div>
  )
}

export default LiveMatches
