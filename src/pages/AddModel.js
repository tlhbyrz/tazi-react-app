import React, { useState } from 'react'
import PageHeader from 'components/PageHeader/PageHeader'
import { Select, FormControl, FormLabel } from "@chakra-ui/react"
import ConfigModelOne from 'components/ConfigModels/ConfigModelOne'

const AddModel = () => {
    const [configType, setConfigType] = useState("type1")

    function handleConfigType(e){
        setConfigType(e.target.value);
    }

    return (
        <div>
            <PageHeader title="Add new model" lineWidth={100}/>
            
            <FormControl id="config-type" isRequired>
                <FormLabel>Select Config Type</FormLabel>
                <Select variant="filled" onChange={handleConfigType}>
                    <option value="type1">Configuration Type1</option>
                    <option value="type2">Configuration Type2</option>
                </Select>
            </FormControl>

            {
                configType === "type1" ? <ConfigModelOne /> : <p>ConfigModel2</p>
            }
        </div>
    )
}

export default AddModel
