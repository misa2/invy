import React, { useState } from 'react'
import InputModal from './InputModal'
import { addPartUnit, addPartContainer, addPartType } from '../actions/options'
import {connect} from 'react-redux'

const PartForm = (props) => {
    const [type, setType] = useState(props.part ? props.part.type : '')
    const [value, setValue] = useState( props.part ? props.part.value :  '')
    const [unit, setUnit] = useState( props.part ? props.part.unit : '')
    const [quantity, setQuantity] = useState(props.part ? props.part.quantity : '')
    const [container, setContainer] = useState(props.part ? props.part.container : '')
    const [updating] = useState(props.part ? true : false)
    const [typeOptions, setTypeOptions] = useState(props.options.type)
    const [unitOptions, setUnitOptions] = useState(props.options.unit)
    const [containerOptions, setContainerOptions] = useState(props.options.container)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalCaption, setModalCaption] = useState('')
    const [inputCaption, setInputCaption] = useState('')
    const [inputPlaceholder, setInputPlaceholder] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    
        
    const onTypeChange = (e) => {
        setType(e.target.value)
    }
    const onAddNewTypeClick = () => {
        setModalCaption('New type')
        setInputCaption('Enter new type')
        setInputPlaceholder('Type')
        setInputValue('')
        setModalOpen(true)
    }
    const addNewTypeOptionUpdater = (value) => {
        if(value){
            if(typeOptions.filter((el_typeOption) => el_typeOption === value).length === 0) {
                setTypeOptions(typeOptions.concat(value))
                props.addPartType(value)
            }
        }
        setModalOpen(false)
    }
    
    const onValueChange = (e) => {
        setValue(e.target.value)
    }
    const onUnitChange = (e) => {
        setUnit(e.target.value)
    }
    const onAddNewUnitClick = () => {
        setModalCaption('New unit')
        setInputCaption('Enter new unit')
        setInputPlaceholder('Unit')
        setInputValue('')
        setModalOpen(true)
    }

    const addNewUnitOptionUpdater = (value) => {
        if(value){
            if(unitOptions.filter((el_unitOption) => el_unitOption === value).length === 0) {
                setUnitOptions(unitOptions.concat(value))
                props.addPartUnit(value)
            }
        }
        setModalOpen(false)
    }
    const onQuantityChange = (e) => {
        const quantity = e.target.value
        if (quantity.match(/^\d*$/))
            setQuantity(quantity)
    }
    const onContainerChange = (e) => {
        setContainer(e.target.value)
    }
    const onAddNewContainerClick = () => {
        setModalCaption('New container')
        setInputCaption('Enter new container')
        setInputPlaceholder('Container')
        setInputValue('')
        setModalOpen(true)
    }

    const addNewContainerOptionUpdater = (value) => {
        if(value){
            if(containerOptions.filter((el_containerOption) => el_containerOption === value).length === 0) {
                setContainerOptions(containerOptions.concat(value))
                props.addPartContainer(value)
            }
        }
        setModalOpen(false)
    }
    const updaterFn = (modalType) => {
        switch (modalType) {
            case 'Type':
                return addNewTypeOptionUpdater
            case 'Unit':
                return addNewUnitOptionUpdater
            case 'Container':
                return addNewContainerOptionUpdater
            default:
                return undefined
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            setError('Please provide part name or value')
        }
        else {
            setError('')
            setQuantity(parseInt(quantity))
            props.onSubmit({
                type,
                value,
                unit,
                quantity,
                container
            })
        }
    }
    
    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <InputModal 
                    modalOpen={modalOpen}
                    modalCaption={modalCaption}
                    inputCaption={inputCaption}
                    inputPlaceholder={inputPlaceholder}
                    inputValue={inputValue}
                    modalUpdaterFn={updaterFn(inputPlaceholder)}
                ></InputModal>
                <select onChange={onTypeChange} value={type}>
                    {typeOptions.map((el_typeOption)=><option key={el_typeOption} value={el_typeOption}>{el_typeOption}</option>)}
                </select>
                <button type={"button"} onClick={onAddNewTypeClick}>Add New type</button>
                <input
                    type="text"
                    placeholder="Value"
                    value={value}
                    onChange={onValueChange}
                    autoFocus
                />
                <select onChange={onUnitChange} value={unit}>
                    {unitOptions.map((el_unitOption)=><option key={el_unitOption} value={el_unitOption}>{el_unitOption}</option>)}
                </select>                    
                <button type={"button"} onClick={onAddNewUnitClick}>Add New unit</button>
                <input
                    type="text"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={onQuantityChange}

                />
                <select onChange={onContainerChange} value={container}>
                    {containerOptions.map((el_containerOption)=><option key={el_containerOption} value={el_containerOption}>{el_containerOption}</option>)}
                </select>
                <button type={"button"} onClick={onAddNewContainerClick}>Add New container</button>
                <button type={"submit"}>{updating ? 'Update part' : 'Add part'}</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    addPartType: (partType) => dispatch(addPartType(partType)),
    addPartUnit: (partUnit) => dispatch(addPartUnit(partUnit)),
    addPartContainer: (partContainer) => dispatch(addPartContainer(partContainer)),
})
export default connect(undefined, mapDispatchToProps)(PartForm)