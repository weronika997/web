import React, { Component } from 'react';
import Select from 'react-select';

const options_scenario = [
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' }
]

const options_mobility = [
    { value: 'car', label: 'car' },
    { value: 'public transport', label: 'public transport' },
    { value: 'bike', label: 'bike' },
    { value: 'pedestrian', label: 'pedestrian' }
]

const options_time = [
    { value: 'morning', label: 'morning' },
    { value: 'afternoon', label: 'afternoon' },
    { value: 'evening', label: 'evening' }
]

const SelectorComponent = () => (
<div style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
    <div style={{
        width: '30%',
        display: 'inline-block'}}>
    <Select options={options_scenario} 
            placeholder={"Scenario"}/>
    </div>
    <div style={{
        width: '30%',
        display: 'inline-block'
        }}>
    <Select options={options_mobility}
            placeholder={"Mobility"} />
    </div>
    <div style={{
        width: '30%',
        display: 'inline-block'
       }}>
    <Select options={options_time}
            placeholder={ "Time" } />
    </div>
</div>
)
export default SelectorComponent;