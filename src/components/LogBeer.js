import axios from "axios"
import LogBeerForm from "./LogBeerForm"

function LogBeer(props) {

    const [beer, setBeer] = useState({
        username: props.user,
        brewery_name: props.thisBrewery.name,

        name: '',
        style: '',
        rating: ''
    })

    function handleChange(e) {
        setBeer((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/logs/beer', {beer})
    }

    return (
        <LogBeerForm beer={beer} handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default LogBeer