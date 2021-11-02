import React, {useState} from 'react'
import "./ModelsList.css"
import { useSelector, useDispatch } from 'react-redux'
import { Alert, AlertIcon, IconButton, Tag, useToast } from "@chakra-ui/react"
import { ConfigType } from 'data/constants'
import { deleteModel } from 'store/actions/modelsActions'
import AlertDialog from 'components/AlertDialog'

const ModelsList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [item, setItem] = useState(null)
    const toast = useToast()
    const dispatch = useDispatch()
    const { models } = useSelector(state => state.modelsStore);

    function onClose() {
        setIsOpen(false)
    } 

    function confirmDelete(item){
        setItem(item)
        setIsOpen(true)
    }

    function handleDelete(item){
        dispatch(deleteModel(item, toast))
        onClose()
    }

    return (
        <div>
            <AlertDialog onClose={onClose} isOpen={isOpen} actionFunc={() => handleDelete(item)}/>
            {
                models.length === 0 ? (
                    <Alert status="info">
                        <AlertIcon />
                        No configuration model found!
                    </Alert>
                ) : (
                    <div className="models-list-section">
                        {
                            models.map(item => (
                                <div className="config-model-box" key={item.slug}>
                                    <div className="model-infos">
                                        <h3>{item.name}</h3>
                                        <Tag colorScheme={`${item.type === ConfigType.Type1 ? "teal" : "red"}`}>{item.type}</Tag>
                                    </div>
                                    <div className="model-actions">
                                        <IconButton icon={ <box-icon name='edit' type='solid' ></box-icon> } isRound={true} />
                                        <IconButton icon={ <box-icon type='solid' name='trash'></box-icon> } isRound={true} onClick={() => confirmDelete(item)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) 
            }
        </div>
    )
}

export default ModelsList
