import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginUI from './LoginUI'
import { login } from '../../actions/auth'

function Login(props) {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {if (submitted) navigate('/')}, [props.fetchCount])

    return(
        <>
        <h4 className='mb-4'>Log In</h4>
        <LoginUI
            onSubmit={() => {props.login(formData); setSubmitted(true)}}
        />

        {warning ? warningMessage() : null}
        </>
    )
}

function mapStateToProps(state) {
    return { fetchCount: state.auth.fetchCount }
}

export default connect(mapStateToProps, { login })(Login)