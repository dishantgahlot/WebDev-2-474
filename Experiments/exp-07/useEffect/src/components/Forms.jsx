import React, { useState } from 'react'

const Forms = ({ name, email, id }) => {

  const [formData, setFormData] = useState({
    name: name,
    email: email,
    password: "12345678"
  })

  const [errors, setErrors] = useState({})

  const [submittedData, setSubmittedData] = useState(null)

  function handleChange(e) {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function validate() {

    let newErrors = {}

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required"
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required"
    }
    else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters"
    }

    return newErrors
  }

  function handleSubmit(e) {

    e.preventDefault()

    const validationErrors = validate()

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {

      console.log("Registered Successfully")
      console.log(formData)

      setSubmittedData(formData)
    }
  }

  return (
    <div className='main'>

      <form onSubmit={handleSubmit} className='form'>

        <h1>Registration Form</h1>

        <input
          type="text"
          placeholder='Enter Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />

        {errors.name && <p>{errors.name}</p>}

        <input
          type="email"
          placeholder='Enter Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && <p>{errors.email}</p>}

        <input
          type="password"
          placeholder='Enter Password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />

        {errors.password && <p>{errors.password}</p>}

        <button type='submit'>Register</button>

      </form>

      {submittedData && (

        <div>

          <h2>Registered Successfully ✅</h2>

          <p>Name: {submittedData.name}</p>

          <p>Email: {submittedData.email}</p>

        </div>
      )}

    </div>
  )
}

export default Forms