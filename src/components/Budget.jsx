import {React, useState} from 'react';
import { BudgetForm } from './BudgetForm';



export const Budget = () => {
    const [showResults, setShowResults] = useState(false);
    const [incomeType, setIncomeType] = useState("");

    const onChange = (event) => {
        setShowResults(true);
        setIncomeType(event.target.value);
        console.log(incomeType)

    }
    
    return (
        <div className='mx-6 text-xl text-left'>
            <h1 className='text-zinc-400 text-4xl text-center'>Budget Creator</h1>
            <h2 className='text-white my-4'>Calculate budget with:</h2>
            <form className='text-white' onChange={onChange}>
                <label className='mr-4'>Daily
                    <input type="radio" value="Daily" name="incomeType" className='ml-2' ></input>
                </label>
                <label className='mx-4'>Weekly
                    <input type="radio" value="Weekly" name="incomeType" className='ml-2'></input>
                </label>
                <label className='mx-4'>Monthly
                    <input type="radio" value="Monthly" name="incomeType" className='ml-2'></input>
                </label>
            </form>
            {showResults ? <BudgetForm incomeType={incomeType}/> : null}
        </div>
    )
}

export default Budget;
