import { Form, Field } from 'react-final-form'

function renderInput(props) {
    return (
        <div className='mb-2 col-sm'>
            <input {...props.input} className='form-control' required />
        </div>
    )
}

function AuthUI(props) {
    return(
        <Form 
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form className='mb-4 row g-1' onSubmit={handleSubmit}>
                    <Field placeholder='Username' name='user' type="text" render={renderInput} />
                    <Field placeholder='Password' name='password' type='password' render={renderInput} />
                    <div className='mb-2 col-sm'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            )}
        />

    )
}

export default AuthUI