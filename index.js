var structureErrors = require('structured-jayschema-errors');

function getGrammaticlSingular(type){
    switch(type){
        case 'string':
            return 'a string';
        case 'number':
            return 'a number';
        case 'object':
            return 'an object';
        case 'array':
            return 'an array';
        case 'boolean':
            return 'a boolean';
        case 'null':
            return 'null';
        default:
            return 'a ' + type;
    }
}

function getFormatErrorMessage(error){
    switch(error.constraintValue){
        case 'date-time':
            return 'Should be a date';
        case 'email':
            return 'Should be a valid email address';
        case 'ipv4':
            return 'Should be a dotted-quad IPv4 address';
        case 'ipv6':
            return 'Should be a valid IPv6 address';
        case 'uri':
            return 'Should be a valid uri';
        default:
            return JSON.stringify(error);
    }
}

function getValidMessage(error){
    switch(error.constraintName){
        case 'required':
            return 'Required';
        case 'minimum':
            return 'Must be greater than ' + error.constraintValue;
        case 'maximum':
            return 'Must be less than ' + error.constraintValue;
        case 'type':
            return 'Should be ' + getGrammaticlSingular(error.constraintValue);
        case 'minLength':
            return 'Must be longer than ' + error.constraintValue + ' characters';
        case 'maxLength':
            return 'Must be shorter than ' + error.constraintValue + ' characters';
        case 'maxItems':
            return 'Must have no more than ' + error.constraintValue + ' items';
        case 'minItems':
            return 'Must have at least ' + error.constraintValue + ' items';
        case 'format':
            return getFormatErrorMessage(error);
        case 'pattern':
            return 'Invalid format';
        case 'additionalProperties':
            return 'Additional property "' + error.testedValue + '" not allowed';
        default:
            return JSON.stringify(error);
    }
}

function normaliseErrorMessages(errors){
    return structureErrors(errors, getValidMessage);
}

module.exports = normaliseErrorMessages;
