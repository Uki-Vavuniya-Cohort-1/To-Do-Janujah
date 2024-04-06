import React from 'react';
import Button from '../components/button';
import Dropdown from '../components/Dropdown';
import FForm from '../components/Form'
// import img from '../img/bac.png'
// style={{  backgroundImage: `url(${img})`, backgroundRepeat:"no-repeat"}} 
function Form() {
    return (
        <div className='form'       >
            <div className='App2'>
                <FForm label='Title' type='text'/>
                <FForm label='Created By' type='text' />
                <FForm label='Created On' type='text' />
                <FForm label='Contant' type='text' />
                <FForm label='Deadline' type='date' />
                <Dropdown />
                <Button name='Create'/><br></br><br></br>
            </div>
        </div>
    )
};

export default Form;
