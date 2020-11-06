import React from 'react'
export default class PartForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.part ? props.part.type : '',
            value: props.part ? props.part.value :  '',
            unit: props.part ? props.part.unit : '',
            quantity: props.part ? props.part.quantity : '',
            container: props.part ? props.part.container : '',
            updating : props.part ? true : false,
            typeOptions : props.options.type,
            unitOptions: props.options.unit,
            containerOptions: props.options.container
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
    onContainerChange = (e) => {
        const container = e.target.value
        this.setState(() => ({container}))
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
                quantity: parseInt(this.state.quantity),
                container: this.state.container
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <select onChange={this.onTypeChange} value={this.state.type}>
                        {this.state.typeOptions.map((el_typeOption)=><option value={el_typeOption}>{el_typeOption}</option>)}
                    </select>
                    <input
                        type="text"
                        placeholder="Value"
                        value={this.state.value}
                        onChange={this.onValueChange}
                        autoFocus
                    />
                    <select onChange={this.onUnitChange} value={this.state.unit}>
                        {this.state.unitOptions.map((el_unitOption)=><option value={el_unitOption}>{el_unitOption}</option>)}
                    </select>                    
                    <input
                        type="text"
                        placeholder="Quantity"
                        value={this.state.quantity}
                        onChange={this.onQuantityChange}

                    />
                    <select onChange={this.onContainerChange} value={this.state.container}>
                        {this.state.containerOptions.map((el_containerOption)=><option value={el_containerOption}>{el_containerOption}</option>)}
                    </select>
                    <button>{this.state.updating ? 'Update part' : 'Add part'}</button>
                </form>
            </div>
        )
    }
}