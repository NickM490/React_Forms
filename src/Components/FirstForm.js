import React, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");

    const createUser = (e) => {
        e.preventDefault ();
        const newUser = { username, email, password};
        console.log("Welcome ", newUser);
        setUsername("This");
        setEmail("Replaces");
        setPassword("For the onChange");
    };

    return (
        <form onSubmit = { createUser }>
            <div>
                <label>Username: </label>
                <input type="text" onChange= { (e) => setUsername(e.target.value) } value={username} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange = { (e) => setEmail(e.target.value) } value={email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange = { (e) => setPassword(e.target.value) } value={password} />
            </div>
            <div>
                <input type="submit" value = "Create User"/>
            </div>

        </form>
    );
};

export default UserForm;
