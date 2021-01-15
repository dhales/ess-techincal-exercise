import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const TableHeader = (props) => {
    const { headers } = props;
    return (
        <TableHead>
            <TableRow>
                {headers.map((header, ind) =>
                    <TableCell hey={ind}>{header}</TableCell>
                )}
            </TableRow>
        </TableHead>
    );
}

TableHeader.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader; 
