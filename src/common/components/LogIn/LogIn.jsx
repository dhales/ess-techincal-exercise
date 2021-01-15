import React, {useState, useRef, useContext} from 'react';
import PropTypes from 'prop-types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { UserContext } from '../../state/context';
import { ValidatedUserName } from '../../services/ValidateUserName';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(2),
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
      },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  }),
);

const LogIn = ({closeCallBack, isOpen}) => {
    const classes = useStyles();
    const [isSubmitDisable, setSubmitEnable] = useState(true);
    const [isFieldInvalid, setFieldInValid] = useState(false);
    const ref = useRef();
    const { user, updateUser } = useContext(UserContext);

    const handleChange = () => {
        setSubmitEnable(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = ref.current.querySelector("input").value;

        if(ValidatedUserName(name)){
            setFieldInValid(false);
            loginUser(name);
        } else {
            setFieldInValid(true);
        } 
    }

    const loginUser = (name)=>{
        user.userName = name; 
        user.auth = true;
        updateUser({...user});
        closeCallBack();
    }

    return (
        <Modal
            data-testid="login-modal"
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={isOpen}
            onClose={closeCallBack}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <div className={classes.paper}>
                    <Typography variant="h5" component="div">
                        Login Form
                    </Typography>
                    <form className={classes.root} noValidate autoComplete="off" onSubmitCapture={handleSubmit}>
                        <TextField 
                            id="filled-basic"
                            label="Enter your user name"
                            variant="filled"
                            onChangeCapture={handleChange}
                            ref={ref}
                            error={isFieldInvalid}
                            helperText={isFieldInvalid ? "Incorrect user name." : ""}
                        />
                        <Button variant="contained" type="submit" disabled={isSubmitDisable}>Submit</Button>
                    </form>
                </div>
            </Fade>
        </Modal>
    );
}

LogIn.defaultProps = {
    isOpen: false,
}

LogIn.propTypes = {
    isOpen: PropTypes.bool,
    closeCallBack: PropTypes.func.isRequired,
};

export default LogIn;
