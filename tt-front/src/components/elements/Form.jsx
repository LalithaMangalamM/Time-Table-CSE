import React from 'react';
import "./form.css"

const Form = ({ fields, onSubmit, txt }) => {

    return (
        <form onSubmit={onSubmit} className='fr'>
            {fields.map((field, index) => (
                <><input className='input1'
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={field.onChange} /><br /></>
            ))}
            <button className="bt" type="submit">{txt}</button>
        </form>
    );
}

export default Form;
