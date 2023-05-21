import React, {useState} from 'react'

const Calculator = () => {
    const [weight, setWeight]= useState()
    const [height, setHeight]= useState()
    const [bmi, setBmi]= useState();
    const [msg ,setMsg]= useState('');

    const calcBmi =(e)=> {
         e.preventDefault();
   

    if (weight == 0 || height == 0){
        alert("Hello please enter a valid number")
    }
    else{
        let bmiFormular = (weight/ (height * height) * 703)
        setBmi(bmiFormular.toFixed(2))


    if(bmi < 25) {
         setMsg("Underweight")
      }
      else if(bmi >= 25 || bmi < 30){
           setMsg("You're Healthy ")
      }
      else{
          setMsg("You're Overweight see a Doctor")
      }
  
    }



}

    const reloads =()=>{
      window.location.reload()
    }
  return (
    <div className='app'>
    <div className='container'>
        <h2 className='center'>BMI Calculator</h2>

        <form onSubmit={calcBmi}>
           
           <div>
              <label className='labels'>Enter Weight:</label><br/>
              <input className='bmi-input' type='number' placeholder='Weight...' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
           </div>

           <div>
              <label className='labels'>Enter Height:</label><br/>
              <input className='bmi-input' type='number' placeholder='Height...' value={height} onChange={(e)=>setHeight(e.target.value)}/>
           </div>

           <div>
             <button className='btn' type='submit'>Calculate</button>
             <button className='btn btn-reload' type='submit' onClick={reloads}>Reload</button>
           </div>
        </form>

        <div className='result-container'>
          <h3>Your BMI is: {bmi}</h3>
          <p className='p-msg'>{msg}</p>
        </div>
    </div>
    </div>
  )
}

export default Calculator