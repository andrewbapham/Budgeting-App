import React from 'react'

export const BudgetForm = (props) => {
    return (
        <div>
            <form className='text-white'>
                <details className='my-2'>
                    <summary> {props.incomeType} Income</summary>
                    <label className='block my-5'>Net income: <br></br>
                        <input type="text" id="income" className='text-black rounded'></input>
                    </label>

                    <label className='block my-5'>Other: <br></br>
                        <input type="text" id="incomeOther" className='text-black rounded'></input>
                    </label>
                </details>
                <details className='my-2'>
                    <summary>{props.incomeType} Expenses</summary>
                    <label className='block my-5'>Rent <br></br>
                        <input type="text" id="expRent" className='text-black rounded'></input>
                    </label>
                    <label className='block my-5'>Groceries <br></br>
                        <input type="text" id="expGroceries" className='text-black rounded'></input>
                    </label>
                    <label className='block my-5'>Restaurants <br></br>
                        <input type="text" id="expRestaurants" className='text-black rounded'></input>
                    </label>
                    <label className='block my-5'>Phone/Utilities <br></br>
                        <input type="text" id="expUtils" className='text-black rounded'></input>
                    </label>
                    <label className='block my-5'>Education <br></br>
                        <input type="text" id="expEducation" className='text-black rounded'></input>
                    </label>
                    <label className='block my-5'>Other: <br></br>
                        <input type="text" id="expOther" className='text-black rounded'></input>
                    </label>
                </details>

            </form>
        </div>
    )
}
