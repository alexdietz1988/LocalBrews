import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LogIn(props) {
    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [warning, setWarning] = useState(false)

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(props.backend + 'auth/login', {
            username: formData.username,
            password: formData.password
            })
            .then((response) => {
                console.log(response.data)
                if (response.data === 'invalid username or password') {
                    setWarning(true)

                } else if (response.data === 'successfully logged in') {
                    props.setUser(formData.username)
                    navigate('/search')
                }
            })
            .catch((error) => console.log(error))
    }

    function warningMessage() {
        return <p>Invalid username or password. Please try again.</p>
    }

    return(
        <>
            <h4 className='mb-4'>Log In</h4>
            
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

            {warning ? warningMessage() : null}
        </>
    )
}

export default LogIn