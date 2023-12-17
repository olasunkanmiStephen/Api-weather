import React, { useState } from 'react';
import Axios from 'axios';

function Excuse() {
  const [GeneratedExcuse, setGeneratedExcuse] = useState("");
  
  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className='Excuse'>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse('party')}>Party</button>
      <button onClick={() => fetchExcuse('family')}>Family</button>
      <button onClick={() => fetchExcuse('office')}>Office</button>

      <p>{GeneratedExcuse}</p>
    </div>
  );
}

export default Excuse;
