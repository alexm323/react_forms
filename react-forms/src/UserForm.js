import React, { useState } from 'react';

const UserForm = () => {
    const initialState = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        // using spread to copy everything, but then we are going to add in some new keys 
        // and we can destructure name and value so we dont have to write e.target.name 
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData

        alert(`Created user: ${username} with email: ${email} & password: ${password}`)
        setFormData(initialState)
    }
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input
                id="username"
                type='text'
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                placeholder="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
            />


            <button >Add me to the List!</button>

        </form>
    )
}
export default UserForm;