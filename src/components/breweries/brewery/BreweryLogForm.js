import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { addBeer } from '../../../actions/beers'

function BreweryLogForm(props) {
    return(
        <section className='mb-5'>
            <h4 className='mb-4'>Log a Beer from This Brewery</h4>
            <Form
                onSubmit={(formData => props.addBeer(formData))}
                render={({ handleSubmit }) => (
                    <form className='mb-4 row g-1' onSubmit={handleSubmit}>
                        <div className='mb-2 col-sm'>
                            <Field component='input' placeholder='Beer Name'  name='name' type='text' className='form-control'/>
                        </div>
        
                        <div className='mb-2 col-sm'>
                            <Field component='input' placeholder='Beer Style'  name='style' type='text' className='form-control'/>
                        </div>
        
                        <div className='mb-2 col-sm'>
                            <Field component='select' placeholder='Rating' name='rating' className='form-select'>
                                <option>Rating</option>
                                <option value='5'>5</option>
                                <option value='4'>4</option>
                                <option value='3'>3</option>
                                <option value='2'>2</option>
                                <option value='1'>1</option>
                            </Field>
                        </div>
        
                        <div className='mb-2 col-sm'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                )}
            />
        </section>
    )
}

export default connect(null, { addBeer })(BreweryLogForm)