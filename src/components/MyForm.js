import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Input } from '@mui/material';
import React, { useState } from 'react';

const MyForm = (props) => {
    const { startDate, setStartDate, endDate, setEndDate, setMyData } = props;
    const [selectedStocks, setSelectedStocks] = useState([]);
    
    const [stocks, setStocks] = useState(['HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE', 'HUL', 'TCS', 'LT', 'ZOMATO', 'AFFLE']);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            startDate,
            endDate,
            selectedStocks
        });
        // Fetch data from API and setMyData
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
            <form
                onSubmit={handleSubmit}
                className="p-10 bg-white-400"
            >
                <div
                    className="flex justify-between"
                >
                    <FormGroup
                        className="w-1/2 p-4"
                    >
                        <FormControl>
                            <FormLabel>Start Date</FormLabel>
                            <Input type="date" defaultValue={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>End Date</FormLabel>
                            <Input type="date" defaultValue={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </FormControl>
                    </FormGroup>
                    <FormGroup
                        className="w-1/2 p-4"
                    >
                        <FormLabel>Stocks</FormLabel>
                        <div
                            className="flex flex-wrap"
                            style={{ maxHeight: "150px", overflowY: "scroll" }}
                        >
                            {
                                stocks.map((stock, index) => {
                                    return (
                                        <FormControlLabel key={index} control={<Checkbox value={stock} onChange={handleStockChange} />} label={stock} />
                                    )
                                })
                            }
                        </div>
                    </FormGroup>
                </div>
                <FormGroup
                    className="flex items-center justify-center"
                >
                    <Button className="w-1/2" type="submit" variant="contained" color="success">Submit</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default MyForm