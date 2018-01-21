import React from 'react';

export default ({name, options}) => (
    <RadioGroup field={name}>
        { group => (
            <div>
                <label htmlFor="male" className="mr-2">Male</label>
                <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
                <label htmlFor="female" className="mr-2">Female</label>
                <Radio group={group} value="female" id="female" className="d-inline-block" />
            </div>
        )}
    </RadioGroup>
);