import React from 'react';
import { FormInputText, FormTextArea } from './styles';

function FormField({ placeholder, type, name, value, onChange }) {
    let input;
    if (type === 'textarea') {
        input = <FormTextArea name={name} value={value} onChange={onChange} placeholder={placeholder} />
    } else {
        input = <FormInputText type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
    }

    return (
        <div>
            {input}
        </div>
    );
}

export default FormField;