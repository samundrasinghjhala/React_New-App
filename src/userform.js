import React, { useState } from "react";
import { Form } from "react-bootstrap";

function Userform() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [list, setList] = useState([]);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email)
        const date = { name, email }
        if (name && email) {
            setList((ls) => [...ls, date])
            setName("")
            setEmail("")
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <label>Email :</label>
                <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <button type="submit">Submit</button>
            </Form>

            {
                list.map((a) => <div>
                    <li>Name :-{a.name}</li>
                    <li>Email :-{a.email}</li>
                </div>)
            }
        </div>
    );
}
export default Userform;