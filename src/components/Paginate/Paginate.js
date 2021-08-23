import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react';

const Paginate = ({ employeesPerPage, totalEmployees, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <ButtonGroup color="default" aria-label="outlined primary button group">

                {
                    pageNumbers.map((number) => (
                        <Button key={number} onClick={() => {
                            paginate(number);
                            // setActive(number);
                        }}>{number}</Button>
                    ))
                }
            </ButtonGroup>
        </div>
    );
};

export default Paginate;