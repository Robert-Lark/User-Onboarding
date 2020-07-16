import React, { useState } from "react";
import Input from "./Input.js";
import axios from "axios";
import * as yup from "yup";

function Form3() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false,
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: "",
    });
    const [users, setUsers] = useState([]);
    const onSubmit = (event) => {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", { formState })
            .then(res => {
                setUsers(res.data.formState)
                console.log(users);
                console.log("Form Submitted");
            })
            .catch(err => {
                console.log(err)
            })
    };
    const formSchema = yup.object().shape({
        name: yup.string().required("Please provide name."),
        email: yup
            .string()
            .email("Must be a valid email address.")
            .required("Must include email address."),
        password: yup
            .string()
            .min(6, "Passwords must be at least 6 characters long.")
            .required("Password is Required"),
        terms: yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
        // required isn't required for checkboxes.
    });
    const validateChange = (e) => {
        e.persist();
        if (e.target.value.length === 0) {
            setErrors({
                ...errors,
                [e.target.name]: `${e.target.name} field is required`,
            });
        }
    };
    const changeHandler = (event) => {
        const value =
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value,
        });
        validateChange(event);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <Input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    value={formState.name}
                    label="Name"
                    errors={errors}
                />
                <br />
                <br />
                <Input
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    value={formState.email}
                    label="Email"
                    errors={errors}
                />
                <br />
                <br />
                <Input
                    type="text"
                    name="password"
                    onChange={changeHandler}
                    value={formState.password}
                    label="Password"
                    errors={errors}
                />
                <br />
                <br />
                <label className="terms" htmlFor="terms">
                    <input name="terms" type="checkbox" onChange={changeHandler} />
					Terms & Conditions
				</label>
                <br />
                <br />
                <button>Submit</button>
                <pre>
                    USERINFO:{JSON.stringify(users)}
                </pre>
            </form>
        </div>
    );
}

export default Form3;
