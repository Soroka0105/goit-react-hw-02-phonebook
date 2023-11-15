import { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
        phone: ''
      }
    reset = () => {
        this.setState({name: '',
        phone: ''})
    }

      handleSubmit = (e) => {
		e.preventDefault()
        this.props.addContact(this.state)
        this.reset()
	}
    handleChange = evt => {
        this.setState({[evt.currentTarget.name]:evt.currentTarget.value})
        
    }

    
    


    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name='name' onChange={this.handleChange} required />
                <input type="tel" name='phone' onChange={this.handleChange}/>
                <button type='submit'>Add Contact</button>
            </form>
        )
    }

}