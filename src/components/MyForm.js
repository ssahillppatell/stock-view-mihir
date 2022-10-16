import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input } from '@mui/material';
import React, { useState } from 'react';

const MyForm = (props) => {
    const { startDate, setStartDate, endDate, setEndDate } = props;
    const [selectedStocks, setSelectedStocks] = useState([]);
    
    const [stocks, setStocks] = useState(['HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE']);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            startDate,
            endDate,
            selectedStocks
        });
        console.log("Submit button clicked");
    }

    const handleStockChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedStocks([...selectedStocks, value]);
        } else {
            setSelectedStocks(selectedStocks.filter((stock) => stock !== value));
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormControl>
                        <FormLabel>Start Date</FormLabel>
                        <Input type="date" defaultValue={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>End Date</FormLabel>
                        <Input type="date" defaultValue={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel>Stocks</FormLabel>
                        {
                            stocks.map((stock, index) => {
                                return (
                                    <FormControlLabel key={index} control={<Checkbox value={stock} onChange={handleStockChange} />} label={stock} />
                                )
                            })
                        }
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <Button type="submit" variant="contained" color="success">Submit</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default MyForm