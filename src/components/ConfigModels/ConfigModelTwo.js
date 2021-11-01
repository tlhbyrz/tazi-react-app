import React, { useState } from 'react'
import "./ConfigModels.css"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Switch,
    Flex,
    Spacer,
    Box,
    Button,
    Select,
    useToast
  } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { addNewModel } from 'store/actions/modelsActions'
import { ConfigType } from 'data/constants'

const ConfigModelTwo = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const toast = useToast()

    const [name, setName] = useState("")
    const [param10, setParam10] = useState(null)
    const [param14, setParam14] = useState(true)
    const [param15, setParam15] = useState("0.35")
    const [param16, setParam16] = useState("0.7")
    const [param17, setParam17] = useState("")
    const [param18, setParam18] = useState("0")

    function gotoHome(){
        history.push("/")
    }

    function handleConfigType(e){
        setParam10(e.target.value);
    }

    function addModel(){
        const configModel = {
            type: ConfigType.Type2,
            name: name,
            slug: name.toLowerCase().replaceAll(" ", "-"),
            schema: {
                parameter10: param10,
                nameSpace3:{
                    subNameSpace4:{
                        parameter14: param14,
                        parameter15: param15
                    },
                    subNameSpace5:{
                        subNameSpace6:{
                            parameter16: param16,
                            parameter17: param17
                        }
                    },
                    parameter18: param18
                }
            }
        }
        dispatch(addNewModel(configModel, toast, history))
    }

    return (
        <section className="config-model-section">
            <form>
                <FormControl id="schema-name" isRequired className="form-control-section">
                    <FormLabel>Config Schema Name</FormLabel>
                    <Input variant="filled" type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <FormHelperText>We will use to identify models.</FormHelperText>
                </FormControl>

                <FormControl id="config-type" isRequired className="section-padding-vertical">
                    <FormLabel>parameter10</FormLabel>
                    <Select variant="filled" onChange={handleConfigType} placeholder="Select option">
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                    </Select>
                </FormControl>

                <div className="form-control-section section-padding-vertical">
                    <FormLabel>Namespace3</FormLabel>
                    <div className="section-padding-left">
                        <FormLabel>- Sub Namespace4</FormLabel>
                        <div className="section-padding-left">
                            <FormControl className="section-padding-vertical">
                                <FormLabel htmlFor="namespace3-param14" mb="0">
                                    parameter14
                                </FormLabel>
                                <Switch value={param14} onChange={e => setParam14(e.target.checked)} id="namespace4-param14" />
                            </FormControl> 

                            <FormControl id="schema-param15" className="section-padding-vertical">
                                <FormLabel>parameter15</FormLabel>
                                <NumberInput variant="filled" step={0.05} min={0} max={1} value={param15} onChange={text => setParam15(text)}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>

                            <div className="section-padding-left section-padding-vertical">
                                <FormLabel>Sub Namespace5</FormLabel>
                                <div className="section-padding-left">
                                    <FormLabel>Sub Namespace6</FormLabel>
                                    <div className="section-padding-left">
                                        <FormControl id="schema-param16" className="section-padding-vertical">
                                            <FormLabel>parameter15</FormLabel>
                                            <NumberInput variant="filled" step={0.1} min={-1} max={1} value={param16} onChange={text => setParam16(text)}>
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </FormControl>
                                        <FormControl id="schema-param17" isRequired className="section-padding-vertical">
                                            <FormLabel>parameter17</FormLabel>
                                            <Input variant="filled" type="text" value={param17} onChange={e => setParam17(e.target.value)}/>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormControl id="schema-param18" className="section-padding-vertical">
                            <FormLabel>- parameter18</FormLabel>
                            <NumberInput variant="filled" value={param18} onChange={text => setParam18(text)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </div>
                </div>
            </form>

            <Flex>
                <Spacer />
                <Box>
                    <Button colorScheme="red" mr="3" onClick={gotoHome}>Cancel</Button>
                    <Button colorScheme="green" onClick={addModel}>Add</Button>
                </Box>
            </Flex>
        </section>
    )
}

export default ConfigModelTwo
