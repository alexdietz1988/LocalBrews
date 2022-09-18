import { Field, Form } from 'react-final-form'

function renderStates() {
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
        'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
        'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
        'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'
    ]
    return states.map((state) => {
        return (
            <option value={state.toLowerCase()}>{state}</option>
        )
    })
}

function SearchBreweriesForm(props) {
    return(
        <Form 
            onChange={props.onChange}
            render={({ handleSubmit }) => (
                <form className='mb-4 row g-1' onSubmit={handleSubmit}>
                <div className='mb-2 col-sm'>
                <Field placeholder='City' name='city' type='text' className='form-control' component='input'/>
                </div>

                <div className='mb-2 col-sm'>
                <select placeholder='State' name='state' className='form-select' component='select' >
                    <option>State</option>
                    {renderStates()}
                </select>
                </div>

                <div className='mb-2 col-sm'>
                <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )}/>

    )
}

export default SearchBreweriesForm