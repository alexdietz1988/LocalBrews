function LogBeerForm(props) {
    return(
        <form className='mb-4 row g-1' onSubmit={props.handleSubmit}>

            <div className='mb-2 col-sm'>
            <input placeholder='Beer Name'  name='name' type='text' className='form-control' value={props.beer.name} onChange={props.handleChange}></input>
            </div>

            <div className='mb-2 col-sm'>
            <input placeholder='Beer Style'  name='style' type='text' className='form-control' value={props.beer.style} onChange={props.handleChange}></input>
            </div>

            <div className='mb-2 col-sm'>
            <select placeholder='Rating' id='rating' name='rating' className='form-select' value={props.beer.rating} onChange={props.handleChange}>
                <option>Rating</option>
                <option value='5'>5</option>
                <option value='4'>4</option>
                <option value='3'>3</option>
                <option value='2'>2</option>
                <option value='1'>1</option>
            </select>
            </div>

            <div className='mb-2 col-sm'>
            <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

export default LogBeerForm