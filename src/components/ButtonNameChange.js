import React, { useState } from "react";

export const ButtonNameChange = (props) => {
    let myName = props.name;
    const [name, setName] = useState(myName)
    const handleForm = (event) => {
        event.preventDefault();
        console.log(event)
        const newName = event.target.newName.value;
        console.log(newName)
        props.changeName(newName);
    }
    return (
        <form onSubmit={handleForm}>
            <div className="mb-3">
                <label htmlFor="newName" className="form-label">New Name</label>
                <input type="text" className="form-control" id="newName"  />
            </div>
            <input type='submit' value='Submit' className='btn btn-secondary' value={name} onChange={(e) => setName(e.target.value)} />
        </form>
    )
}