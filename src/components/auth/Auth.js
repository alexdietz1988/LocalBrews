import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginUI from './AuthUI'
import { login } from '../../actions/auth'

function Auth(props) {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {if (props.isSignedIn) navigate('/')}, [props.isSignedIn])
    const title = props.page === 'login' ? 'Log In' : 'Sign Up'

    return(
        <>
        <h4 className='mb-4'>{title}</h4>
        { submitted && !props.errorMessage ?
            <div>Loading...</div> : 
            <>
            <LoginUI
                onSubmit={(formData) => {props.login(props.page, formData); setSubmitted(true)}}
            />
            {props.errorMessage}
            </>
        }
        </>
    )
}

function mapStateToProps(state) {
    return { 
        isSignedIn: state.auth.isSignedIn,
        errorMessage: state.auth.errorMessage
    }
}

export default connect(mapStateToProps, { login })(Auth)