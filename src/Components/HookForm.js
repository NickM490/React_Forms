import React, { useState } from 'react';

const ThisUserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    const [isSubmitted, setisSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpass };
        console.log("Welcome ", newUser);
        setisSubmitted(true);
        console.log(isSubmitted);
    };

    // const formMessage = () => {
    //     if( isSubmitted ) {
    //         return "Thank you for submitting the form"
    //     } else {
    //         return "Please submit the form"
    //     }
    // };

    return (
        <>
            <div>
                {
                    isSubmitted ?
                        <h1>Thank you for submitting the form!</h1>
                        :
                        <h1>Welcome, please submit the form.</h1>

                }
            </div>

            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmpass(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h1>{firstname}</h1>
                <h1>{lastname}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
                <h1>{confirmpass}</h1>
            </div>
        </>
    );
}

export default ThisUserForm;