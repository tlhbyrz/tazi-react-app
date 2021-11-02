import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from 'components/PageHeader/PageHeader'
import { ComponentMode, ConfigType } from 'data/constants'
import ConfigModelOne from 'components/ConfigModels/ConfigModelOne'
import ConfigModelTwo from 'components/ConfigModels/ConfigModelTwo'
import { Alert, AlertIcon, Box } from '@chakra-ui/react'
import AlertMessages from 'components/AlertMessages'

const EditModelPage = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { models } = useSelector(state => state.modelsStore);
    const [configModel, setConfigModel] = useState(null)

    useEffect(() => {
        const item = models.filter(item => item.slug === slug);
        if(item.length > 0){
            setConfigModel(item[0])
        }
    }, [models])

    return (
        <div>
            <PageHeader title="Edit model" lineWidth={70}/>
            
            <Box w="100%" mb={8}>
                <AlertMessages />
            </Box>

            {
                configModel ? configModel.type == ConfigType.Type1 ?  <ConfigModelOne mode={ComponentMode.Edit} model={configModel} />  : (
                    <ConfigModelTwo mode={ComponentMode.Edit} model={configModel}/>
                ) : (
                        <Alert status="info">
                            <AlertIcon />
                            Model not found!
                        </Alert>
                    )
            }
        </div>
    )
}

export default EditModelPage
