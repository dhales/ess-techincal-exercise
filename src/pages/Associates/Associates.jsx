import React, {useEffect, useState, Fragment, useContext} from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import MaterialTable from '../../common/components/MaterialTable/MaterialTable';
import { UserContext } from '../../common/state/context';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 350,
    },
    paper: {
        maxWidth: '75%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2)
    },
    selectedRow: {
        cursor:"pointer",
    },
    danger: {
        color:"red",
    }
}));

const Associates = () => {
    const { user, updateUser } = useContext(UserContext);
    const [associatesArray, setAssociates] =  useState(null);
    const [isReadyToRender, toggleReadyToRender] =  useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles();
    let emptyRows = 0;

    useEffect(()=>{
        //This should be in an service file
        fetch('http://localhost:3001/associates', {
            mode: "cors",
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => setAssociates(data))
        .catch(error => error)
    }, []);

    useEffect(()=>{
        if(associatesArray ){
            toggleReadyToRender(true);
            emptyRows = rowsPerPage - Math.min(rowsPerPage, associatesArray.length - page * rowsPerPage);
        }
    },[associatesArray]);

    const hasNullValues = (associate) => {
        return Object.keys(associate).filter(key => !associate[key]).length > 0;
        
    }

    const handleRowClick = (associate) => {
        if(!hasNullValues(associate)) {
            user.selectedAssociate.name = associate.first_name;
            user.selectedAssociate.email = associate.email;
            updateUser({...user});
        };
    }

    return (
        <Fragment>
            { isReadyToRender && (
                <div className={classes.paper}>
                    <MaterialTable
                        headers={["Name", "Department"]}
                        count={associatesArray.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        setPage={setPage}
                        setRowsPerPage={setRowsPerPage}
                    >
                        <TableBody>
                            {(rowsPerPage > 0
                                ? associatesArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : associatesArray
                            ).map((associate , indx) => (
                                <TableRow 
                                    key={indx}
                                    className = {classNames({[classes.selectedRow]: !hasNullValues(associate)})}
                                    onClickCapture={() => handleRowClick(associate)}
                                >
                                    <TableCell 
                                        component="th"
                                        scope="row"
                                        className = {classNames({[classes.danger]: hasNullValues(associate)})}
                                    >
                                        {`${associate.first_name}  ${associate.last_name}`}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }}>
                                        {associate.Department}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </MaterialTable>
                </div>)
            }
        </Fragment>
    );
}

export default Associates;
