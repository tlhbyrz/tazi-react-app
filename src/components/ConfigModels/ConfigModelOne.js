import React, { useState, useEffect } from 'react'
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
    useToast 
  } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { addNewModel, editModel, setError } from 'store/actions/modelsActions'
import { ComponentMode, ConfigType } from 'data/constants'

const ConfigModelOne = ({ mode, model }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const toast = useToast()

    const [name, setName] = useState(mode === ComponentMode.Edit ? (model.name ?? "") : "")
    const [param1, setParam1] = useState(mode === ComponentMode.Edit ? (model.schema.nameSpace1.subNameSpace1.parameter1 ?? "") : "")
    const [param2, setParam2] = useState(mode === ComponentMode.Edit ? (model.schema.nameSpace1.subNameSpace1.parameter2 ?? "5") : "5")
    const [param3, setParam3] = useState(mode === ComponentMode.Edit ? (model.schema.nameSpace1.parameter3 ?? false) : false)
    const [param4, setParam4] = useState(mode === ComponentMode.Edit ? (model.schema.nameSpace2.subNameSpace2.parameter4 ?? "-2") : "-2")
    const [param8, setParam8] = useState(mode === ComponentMode.Edit ? (model.schema.nameSpace2.parameter8 ?? "") : "")

    function gotoHome(){
        history.push("/")
    }

    useEffect(() => {
        dispatch(setError([]))
    }, [])

    function sendModel(){
        let errors = [];

        if(!param1){
            errors.push("Param1 field is required!")
        }
        if(!name){
            errors.push("Model name field is required!")
        }
        if(errors.length > 0){
            dispatch(setError(errors))
            return
        }

        const configModel = {
            type: ConfigType.Type1,
            name: name,
            slug: name.toLowerCase().replaceAll(" ", "-"),
            schema: {
                nameSpace1:{
                    subNameSpace1:{
                        parameter1: param1,
                        parameter2: param2
                    },
                    parameter3: param3
                },
                nameSpace2:{
                    subNameSpace2:{
                        parameter4: param4
                    },
                    parameter8: param8
                }
            }
        }

        if(mode === ComponentMode.Edit){
            dispatch(editModel(configModel, toast, history))
        }else{
            dispatch(addNewModel(configModel, toast, history))
        }
    }

    return (
        <section className="config-model-section">
            <form>
                <FormControl id="schema-name" isRequired className="form-control-section">
                    <FormLabel>Config Schema Name</FormLabel>
                    <Input isDisabled={mode === ComponentMode.Edit} variant="filled" type="text" value={name} onChange={e => setName(e.target.value)}/>
                    <FormHelperText>We will use to identify models.</FormHelperText>
                </FormControl>

                <div className="form-control-section section-padding-vertical">
                    <FormLabel>Namespace1</FormLabel>
                    <div className="section-padding-left">
                        <FormLabel>- Sub Namespace1</FormLabel>
                        <div className="section-padding-left">
                            <FormControl id="schema-param1" isRequired className="section-padding-vertical">
                                <FormLabel>parameter1</FormLabel>
                                <Input variant="filled" type="text" value={param1} onChange={e => setParam1(e.target.value)}/>
                            </FormControl>

                            <FormControl id="schema-param2" className="section-padding-vertical">
                                <FormLabel>parameter2</FormLabel>
                                <NumberInput variant="filled" step={1} min={0} max={5} value={param2} onChange={text => setParam2(text)}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                        </div>

                        <FormControl className="section-padding-vertical">
                            <FormLabel htmlFor="namespace1-param3" mb="0">
                                - parameter3
                            </FormLabel>
                            <Switch isChecked={param3} onChange={e => setParam3(e.target.checked)} id="namespace1-param3" />
                        </FormControl> 
                    </div>
                </div>

                <div className="form-control-section">
                    <FormLabel>Namespace2</FormLabel>
                    <div className="section-padding-left">
                        <FormLabel>- Sub Namespace2</FormLabel>
                        <div className="section-padding-left">
                            <FormControl id="schema-param2" className="section-padding-vertical">
                                <FormLabel>parameter4</FormLabel>
                                <NumberInput variant="filled" step={1} min={-10} max={10} value={param4} onChange={text => setParam4(text)}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </FormControl>
                        </div>

                        <FormControl id="schema-param1" className="section-padding-vertical">
                            <FormLabel>- parameter8</FormLabel>
                            <Input variant="filled" type="text" value={param8} onChange={e => setParam8(e.target.value)}/>
                        </FormControl>
                    </div>
                </div>
            </form>
            <Flex>
                <Spacer />
                <Box>
                    <Button colorScheme="red" mr="3" onClick={gotoHome}>Cancel</Button>
                    <Button colorScheme="green" onClick={sendModel}>{ mode === ComponentMode.Edit ? "Save" : "Add" }</Button>
                </Box>
            </Flex>
        </section>
    )
}

ConfigModelOne.defaultProps = {
    mode: ComponentMode.Add
}

export default ConfigModelOne
