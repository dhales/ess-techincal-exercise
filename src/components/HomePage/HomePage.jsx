import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        marginTop: '2%',
        marginBottom: '2%',
        background: 'no-repeat fixed center url(./assets/img/Extra-Space-Storage.jpg)'
    },
    paper: {
        maxWidth: '50%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2)
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap">
                    <Grid item lg>
                        <Typography gutterBottom variant="h5" component="h2">{`Thanks for taking this technical challenge for Extra Space Storage. Please follow these instructions carefully`}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap">
                    <Grid item lg>
                        <Typography component="div">
                            {`You have an application with 3 components:`}
                            <br/>
                            <ol>
                            <li>
                                    {`MainMenu: Displays different options like "home" and "login/logout", also has a welcome message.`}
                                </li>

                                <li>
                                    {`HomePage: Home for this app, it shows test instructions.`}
                                </li>
                                <li>
                                    {`Footer: Empty`}
                                </li>
                            </ol>
                            {`Also, it has a fake database file called db.json in the root folder, it's serve with yarn start:server.`}
                            <br/><br/>
                            {`You have 3 days to complete this challenge.`}
                            <br/><br/>
                            {`You can perform your own research but don't "copy/paste" code, by submitting this challenge you are allowing Extra Space Storage to review your code.`}
                            <br/><br/>
                            {`Be original, follow coding best practices, you can use any legal technology you like.`}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap">
                    <Grid item lg>
                        <Typography gutterBottom variant="h6" component="h1">{`Complete given tasks (as many as you can)`}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>1</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                          <strong>{ `User List`}</strong>
                          <ul>
                           <li>
                             {'From the backend api, get a list of 20 associates (run the provided server).'}
                           </li>
                           <li>
                             {`Create an "Associates" component and display each associate's full name (first + last name) and department, in a table.`}
                           </li>
                           <li>
                             {'If an associate has fields with null data, his name should appear in red color.'}
                           </li>
                           <li>
                             {'Your "Associates" component should be accessible from a menu option in MainMenu.'}
                           </li>
                           <li>
                             {'If you click "Home" in MainMenu it should send you back to the home page.'}
                           </li>
                          </ul>
                          </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>2</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                         <strong>{ `Login Modal:`}</strong> 
                          <ul>
                           <li>
                             {'Create a modal window to simulate login, it should request user name.'}
                           </li>
                           <li>
                             {'it should be called from MainMenu Login button.'}
                           </li>
                          </ul>
                          </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>3</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                         <strong>{ `Create login/logout logic:`}</strong> 
                          <ul>
                           <li>
                             {'By default, the user should be logout.'}
                           </li>
                           <li>
                             {'Add a logout button in the Footer component.'}
                           </li>
                           <li>
                             {`On logout, the MainMenu welcome message should say: "Welcome! Please Login.", all login buttons labels should say "login", Associates component cannot be accessed (it's private) and if you click a login button it should open the login modal.`}
                           </li>
                           <li>
                             {'On login, the MainMenu welcome message should say: "Welcome! + user name (saved from login modal).", all login buttons labels should say "logout", Associates component should be available and if you click a logout button it should trigger logout events.'}
                           </li>
                          </ul>
                          </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>4</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                         <strong>{ `Send your code!!!`}</strong> 
                          <ol>
                           <li>
                             {'Create a repository, upload your code and share it with us.'}
                           </li>
                           <li>
                             {'The app should run fine after getting the repo and running yarn install / start:server / start.'}
                           </li>
                          </ol>
                          </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>!!!</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                         <strong>{ `IF YOU WANT EXTRA POINTS!!!`}</strong> 
                          <ul>
                           <li>
                             {'If you select a row in the table inside the "Associates" component, display selected associate name and email in the "Footer" component.'}
                           </li>
                           <li>
                             {`You can't select associates with null data.`}
                           </li>
                          </ul>
                          </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
