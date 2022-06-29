import React from 'react'
import './styles.css'

const InputField: React.FC = () => {
  return (
    <form className='input'>
      <input type='text' placeholder='Enter a task' className='input__box' />
      <button className='input_submit' type='submit'>
        Demo
      </button>
    </form>
  )
}

export default InputField
