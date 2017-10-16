import React from 'react'
import {
    Modem,
    SSPA,
    Beacon,
    ACU,
    MTekDownConverter,
    MTekUpConverter
} from '../components/devices/devices'

// Terminal Configuration
const terminalConfig = {
    name: 'Gezgin',
    devices: 
    [
        {
            name: 'Modem',
            componentName: 'Modem'
        },
        {
            name: 'SSPA',
            componentName: 'SSPA'
        },
        {
            name: 'Beacon',
            componentName: 'Beacon'
        },
        {
            name: 'ACU',
            componentName: 'ACU'
        },
        {
            name: 'MTek Down Converter',
            componentName: 'MTekDownConverter'
        },
        {
            name: 'MTek Up Converter',
            componentName: 'MTekUpConverter'
        }
    ]
}

export default terminalConfig