import terminalConfig from '../../config/terminal-config'

function terminalReducer(state = terminalConfig, action) {
    return terminalConfig;
}

export {
    terminalReducer
}