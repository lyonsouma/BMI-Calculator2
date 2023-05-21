import React, {usestate} from 'react'

const Calculator = () => {
    const[weight ,setWeight]=usestate()
    const[height ,setHeight]=usestate()
    const[bmi ,setBmi]=usestate('')
    const[msg ,setMsg]=usestate('')

    const calcBmi =(e)=>{
         e.preventDefault();
   

    if (weight === 0 || height === 0){
        alert("Hello please enter a valid number")
    }
    else{
        let bmiFormular = (weight/ (height * height))
        setBmi(bmiFormular)
    }

    if(bmi < 25) {
        setMsg("Underweight")
    }
    else if(bmi >25 && bmi < 30){
         setMsg("You're Healthy ")
    }
    else{
        setMsg("You're Overweight see a Doctor")
    }
}

  return (
    <div className='app'>
    <div className='container'>
        <h2 className='center'>BMI Calculator</h2>

        <form onSubmit={calcBmi}>
           
           <div>
              <label>Enter Weight:</label>
              <input className='bmi-input' type='number' placeholder='Weight...' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
           </div>

           <div>
              <label>Enter Height:</label>
              <input className='bmi-input' type='number' placeholder='Height...' value={height} onChange={(e)=>setHeight(e.target.value)}/>
           </div>

           <div>
             <button className='btn' type='submit'>Calculate</button>
             {/* <button className='btn btn-reload' type='submit' onClick={reload}>Reload</button> */}
           </div>
        </form>

        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p className='p-msg'>{msg}</p>
        </div>
    </div>
    </div>
  )
}

export default Calculator