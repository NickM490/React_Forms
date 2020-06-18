import React, { useState } from 'react';

const ValUserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfpass] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confpass };
        console.log("Welcome ", newUser)
    };


    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                {
                    firstname.length < 1 ?
                    ""
                    :
                    firstname.length < 2 ?
                    <p>First name must be over 2 characters</p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
                {
                    lastname.length < 1 ?
                    ""
                    :
                    lastname.length < 2 ?
                    <p>Last name must be over 2 characters</p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {
                    email.length < 1 ?
                    ""
                    :
                    email.length < 5 ?
                    <p>Email must be over 5 characters</p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {
                    password.length < 1 ?
                    ""
                    :
                    password.length < 8 ?
                    <p>Make sure the password is over 8 characters</p>
                    :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setConfpass(e.target.value)} />
                {
                    confpass.length < 1 ?
                    ""
                    :
                    confpass === password ?
                    ""
                    :
                    <p>Passwords gotta match buddy</p>
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default ValUserForm;