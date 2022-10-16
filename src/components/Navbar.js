import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// Creates a simple navbar
const Navbar = () => {
  const [stocks, setStocks] = useState(['HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE']);

  const navigate = useNavigate();

  return (
    <div
      className="flex justify-between items-center p-4"
    >
        <h1
          className="text-center text-3xl w-10/12"
        >
          Stock View
        </h1>
        <Autocomplete
          className='w-2/12'
          options={stocks}
          renderInput={(params) => <TextField {...params} label="Stocks" />}
          onChange={(e, value) => {
            navigate(`/${value}`);
          }}
        />
    </div>
  )
}

export default Navbar