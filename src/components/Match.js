import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Match = () => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const getMatches = async () => {
      const res = await axios.get('../api/matches');
      setMatches(res.data)
    }
    getMatches()
  }, [])

  return (
    <div>
      <h1>Potential Matches</h1>
      {matches.map((match) => (
        <div key={match.id}>
          <h2>{match.name}</h2>
          <p>Age: {match.age}</p>
          <p>Location: {match.location}</p>
        </div>
      ))}
    </div>
  )
}

export default Match;