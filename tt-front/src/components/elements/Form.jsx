import React from 'react';
import { useState } from 'react';
import "./form.css"

const Form = ({ fields, onSubmit, txt, marginBottom }) => {
    // `const initialFieldValues = fields.reduce((acc, field) => {
    //     acc[field.name] = '';
    //     return acc;
    // }, {});

    // const [formValues, setFormValues] = useState(initialFieldValues);

    // const handleFieldChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormValues(prevValues => ({ ...prevValues, [name]: value }));
    // };`

    return (
        <form onSubmit={onSubmit} className='fr'>
            {fields.map((field, index) => (
                <><input className='input1'
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                    style={{marginBottom: marginBottom || field.marginBottom }} /><br /></>
            ))}
            <button className="bt" type="submit">{txt}</button>
        </form>
    );
}

export default Form;
