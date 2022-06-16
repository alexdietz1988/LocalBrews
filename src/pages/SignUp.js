import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(props.backend + 'auth', {
            username: formData.username,
            password: formData.password
            })
            .then((response) => {
                if (response.data === 'user already exists') {
                    navigate('/login')

                } else if (response.data === 'user created') {
                    props.setUser(formData.username)
                    navigate('/search')
                }
            })
            .catch((error) => console.log(error))
    }

    return(
        <>
            <h4 className='mb-4'>Sign Up</h4>
            <form className='mb-4 row g-1' onSubmit={handleSubmit}>
                <div className='mb-2 col-sm'>
                    <input placeholder='Username' name='username' type="text" className='form-control' onChange={handleChange} required />
                </div>
                <div className='mb-2 col-sm'>
                    <input placeholder='Password' name='password' type='password' className='form-control' onChange={handleChange} required />
                </div>
                <div className='mb-2 col-sm'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default SignUp