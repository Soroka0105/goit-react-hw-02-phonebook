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
                <input value={this.state.name} type="text" name='name' onChange={this.handleChange} required />
                <input value={this.state.phone} type="tel" name='phone' onChange={this.handleChange} required/>
                <button type='submit'>Add Contact</button>
            </form>
        )
    }

}