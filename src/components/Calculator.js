import React from 'react'

const Calculator = () => {
  return (
    <div className='app'>
    <div className='container'>
        <h2 className='center'>BMI Calculator</h2>

        <form>
           
           <div>
              <label>Enter Weight:</label>
              <input type='number' placeholder='Weight...'/>
           </div>

           <div>
              <label>Enter Height:</label>
              <input type='number' placeholder='Height...'/>
           </div>

           <div>
             <button className='btn' type='submit'>Calculate</button>
             <button className='btn btn-reload' type='submit'>Reload</button>
           </div>
        </form>

        <div>
          <h3>Your BMI is:</h3>
          <p className='p-msg'>Message</p>
        </div>
    </div>
    </div>
  )
}

export default Calculator