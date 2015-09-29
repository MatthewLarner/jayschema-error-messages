module.exports = [
    {
        instanceContext: '#',
        constraintName: 'required',
        constraintValue: [ 'test1', 'foo', 'bar'],
        desc: 'missing: test1,foo',
        kind: 'ObjectValidationError'
    },
    {
        instanceContext: '#/minimum',
        constraintName: 'minimum',
        constraintValue: 4,
        testedValue: 3,
        kind: 'NumericValidationError'
    },
    {
        instanceContext: '#/maximum',
        constraintName: 'maximum',
        constraintValue: 8,
        testedValue: 10,
        kind: 'NumericValidationError'
    },
    {
        instanceContext: '#/array',
        constraintName: 'type',
        constraintValue: 'array',
        testedValue: 'string'
    },
    {
        instanceContext: '#/object',
        constraintName: 'type',
        constraintValue: 'object',
        testedValue: 'string'
    },
    {
        instanceContext: '#/string',
        constraintName: 'type',
        constraintValue: 'string',
        testedValue: 'object'
    },
    {
        instanceContext: '#/minLength',
        constraintName: 'minLength',
        constraintValue: 7,
        testedValue: 3,
        kind: 'StringValidationError'
    },
    {
        instanceContext: '#/maxLength',
        constraintName: 'maxLength',
        constraintValue: 5,
        testedValue: 8,
        kind: 'StringValidationError'
    },
    {
        instanceContext: '#/datetime',
        constraintName: 'format',
        constraintValue: 'date-time',
        testedValue: 'not a date',
        desc: 'not a valid date-time per RFC 3339 section 5.6 (use "date" for date-only or "time" for time-only)',
        kind: 'FormatValidationError'
    },
    {
        instanceContext: '#/pattern',
        constraintName: 'pattern',
        constraintValue: '/^[0-9a-fA-F]{24}$/',
        testedValue: 'does not match pattern',
        kind: 'StringValidationError'
    },
    {
        instanceContext: '#',
        constraintName: 'additionalProperties',
        testedValue: 'clientId',
        desc: 'property "clientId" not allowed by "properties" or by "patternProperties" and "additionalProperties" is false',
        kind: 'ObjectValidationError'
    },
    {
        instanceContext:'#/email',
        constraintName: 'format',
        constraintValue: 'email',
        testedValue: 'foo',
        kind: 'FormatValidationError'
    },
    {
        instanceContext:'#/ipv4',
        constraintName: 'format',
        constraintValue: 'ipv4',
        testedValue: 'foo',
        kind: 'FormatValidationError'
    },
    {
        instanceContext:'#/ipv6',
        constraintName: 'format',
        constraintValue: 'ipv6',
        testedValue: 'foo',
        kind: 'FormatValidationError'
    },
    {
        instanceContext:'#/uri',
        constraintName: 'format',
        constraintValue: 'uri',
        testedValue: 'foo',
        kind: 'FormatValidationError'
    }
];