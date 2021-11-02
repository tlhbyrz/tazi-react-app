import React, { useState } from 'react'
import PageHeader from 'components/PageHeader/PageHeader'
import { Select, FormControl, FormLabel, Box } from "@chakra-ui/react"
import ConfigModelOne from 'components/ConfigModels/ConfigModelOne'
import ConfigModelTwo from 'components/ConfigModels/ConfigModelTwo'
import AlertMessages from 'components/AlertMessages'

const AddModel = () => {
    const [configType, setConfigType] = useState("type1")

    function handleConfigType(e){
        setConfigType(e.target.value);
    }

    return (
        <div>
            <PageHeader title="Add new model" lineWidth={100}/>

            <Box w="100%" mb={8}>
                <AlertMessages />
            </Box>
            
            <FormControl id="config-type" isRequired>
                <FormLabel>Select Config Type</FormLabel>
                <Select variant="filled" onChange={handleConfigType}>
                    <option value="type1">Configuration Type1</option>
                    <option value="type2">Configuration Type2</option>
                </Select>
            </FormControl>

            {
                configType === "type1" ? <ConfigModelOne /> : <ConfigModelTwo />
            }
        </div>
    )
}

export default AddModel
