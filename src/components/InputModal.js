import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'



const InputModal = (props) => {
    const [modalOpen, setModalOpen] = useState(props.modalOpen)
    const [modalCaption, setModalCaption] = useState(props.modalCaption)
    const [inputCaption, setInputCaption] = useState(props.inputCaption)
    const [inputPlaceholder, setInputPlaceholder] = useState(props.inputPlaceholder)
    const [inputValue, setInputValue] = useState(props.inputValue)
       
    Modal.setAppElement('#root');
    useEffect( () => {
            setModalOpen(props.modalOpen)
            setModalCaption(props.modalCaption)
            setInputCaption(props.inputCaption)
            setInputPlaceholder(props.inputPlaceholder)
            setInputValue(props.inputValue)
        }
        , [props])
    const handleSave = () => {
        props.modalUpdaterFn(inputValue)
        setModalOpen(false)
    }
    const handleClose = () => {
        props.modalUpdaterFn(undefined)
        setModalOpen(false)
    }
    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={()=>handleClose()}
            contentLabel={modalCaption}
        >
            <h3>{inputCaption}</h3>
            <input
                type="text"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <button onClick={()=>handleSave()}>Save</button>
            <button onClick={()=>handleClose()}>Close</button>
        </Modal>
    )
}


export default InputModal