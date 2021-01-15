import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import MaterialTableHeader from './components/MaterialTableHeader/MaterialTableHeader';
import MaterialTableFooter from './components/MaterialTableFooter/MaterialTableFooter';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    paper: {
        maxWidth: '75%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2)
    },
}));

const MaterialTable = (props) => {
    const {
        headers,
        count,
        rowsPerPage,
        page,
        setPage,
        setRowsPerPage,
        children } = props;

    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <TableContainer component={Paper}>
                <Table 
                    className={classes.table} 
                    aria-label="associates table"
                >
                    <MaterialTableHeader headers={headers}/>

                    {children}

                    <MaterialTableFooter
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        setPage={setPage}
                        setRowsPerPage={setRowsPerPage}
                    />
                </Table>
            </TableContainer>
        </div>
    );
}

export default MaterialTable;