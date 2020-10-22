import React from 'react'
export default class PartForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.part ? props.part.type : 'other',
            value: props.part ? props.part.value :  '',
            unit: props.part ? props.part.unit : '',
            quantity: props.part ? props.part.quantity : '',
            location: props.part ? props.part.location : 'Unassigned',
            updating : props.part ? true : false
        }
    
    }
    onTypeChange = (e) => {
        const type = e.target.value
        this.setState(()=>({type}))
    }
    onValueChange = (e) => {
        const value = e.target.value
        this.setState(()=>({value}))
    }
    onUnitChange = (e) => {
        const unit = e.target.value
        this.setState(() => ({unit}))
    }
    onQuantityChange = (e) => {
        const quantity = e.target.value
        if (quantity.match(/^\d*$/))
        this.setState(() => ({quantity}))
    }
    onLocationChange = (e) => {
        const location = e.target.value
        this.setState(() => ({location}))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.value) {
            this.setState(() => ({error: 'Please provide part name or value'}))
        }
        else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                type: this.state.type,
                value: this.state.value,
                unit: this.state.unit,
                quantity: this.state.quantity,
                location: this.state.location
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <select onChange={this.onTypeChange} value={this.state.type}>
                        <option value='resistor'>Resistor</option>
                        <option value='capacitor'>Capacitor</option>
                        <option value='transistor'>Transistor</option>
                        <option value='diode'>Diode</option>
                        <option value='IC'>Transistor</option>
                        <option value='inductor'>Inductor</option>
                        <option value='other'>Other</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Value"
                        value={this.state.value}
                        onChange={this.onValueChange}
                        autoFocus
                    />
                    <select onChange={this.onUnitChange} value={this.state.unit}>
                        <option value=''></option>
                        <option value='Ohm'>Ohm</option>
                        <option value='KOhm'>KOhm</option>
                        <option value='MOhm'>MOhm</option>
                        <option value='pF'>pF</option>
                        <option value='nF'>nF</option>
                        <option value='uF'>uF</option>
                        <option value='uH'>nF</option>
                        <option value='mH'>uF</option>
                    </select>                    
                    <input
                        type="text"
                        placeholder="Quantity"
                        value={this.state.quantity}
                        onChange={this.onQuantityChange}

                    />
                    <input
                        type="text"
                        placeholder="Location"
                        value={this.state.location}
                        onChange={this.onLocationChange}
                    />
                    <button>{this.state.updating ? 'Update part' : 'Add part'}</button>
                </form>
            </div>
        )
    }
}