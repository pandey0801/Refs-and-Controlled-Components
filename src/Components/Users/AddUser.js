import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from "react";
import React, { useRef } from 'react';
import ErrorModal from '../UI/ErrorModules';


const AddUser = (props) =>{


const [error,setError] = useState();

const nameInputRef = useRef();
const ageInputRef = useRef();
const collegeInputRef = useRef();





    const addUserHandler = (event) =>{
        event.preventDefault();

        const enteredname = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enterColege = collegeInputRef.current.value;




        if( enteredname.trim().length === 0 || enteredUserAge.trim().length===0)
        {
            setError({
                title: 'Ivvalid input',
                message: 'please enter a valid name and age'
            })
            return;
        }
        if(+enteredUserAge< 0) 
        {
            setError(
                {
                    title: 'Ivvalid input',
                    message: 'please enter a valid  age(>0)'
                }
            )
            return;
            
        }

        props.onAddUser(enteredname, enteredUserAge, enterColege);

        console.log(enteredname, enteredUserAge, enterColege )

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value ='';

    };

    const errorHandler=()=>
    {
        setError(null);
    }

    return(
        <div>
        { error && (
        <ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler}/>

        )}

        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" 
            type="text" 
             ref={nameInputRef}
             />

            <label htmlFor="age">Age (year)</label>
            <input
             id="age" 
             type="number" 
             ref={ageInputRef}
             />

             <label htmlFor='college'>Enter college name</label>
             <input
             id = 'college'
             type='text'
             ref={collegeInputRef}
             />

            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;

// 

