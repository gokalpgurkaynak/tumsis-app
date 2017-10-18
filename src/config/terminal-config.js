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
            component: Modem
        },
        {
            name: 'SSPA',
            component: SSPA
        },
        {
            name: 'Beacon',
            component: Beacon
        },
        {
            name: 'ACU',
            component: ACU
        },
        {
            name: 'MTek Down Converter',
            component: MTekDownConverter
        },
        {
            name: 'MTek Up Converter',
            component: MTekUpConverter
        }
    ]
}

export default terminalConfig