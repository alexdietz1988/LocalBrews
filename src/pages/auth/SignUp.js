import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { requestSignup } from '../../apis'

function SignUp(props) {
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
        requestSignup(formData.username, formData.password)
            .then((response) => {
                if (response.data === 'user already exists') {
                    setWarning(true)

                } else if (response.data === 'user created') {
                    props.setUser(formData.username)
                    props.setNewUser(true)
                    props.setLogout(false)
                    navigate('/')
                }
            })
            .catch((error) => console.log(error))
    }

    function warningMessage() {
        return(
            <>
            <p>An account with that username already exists.</p>
            <p>If you already have an account, please <Link to='/login'>log in</Link>; otherwise, try entering a different username.</p>
            </>
        )
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
            {warning ? warningMessage() : null}
        </>
    )
}

export default SignUp