import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from 'rc-checkbox';
import './Variations.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

export function Variations({shoes}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  // const [checked, setChecked] = React.useState([0]);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedC: true,
      checkedD: true,
  });

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      <ListItemText id="title" disabled primary="Iteration" />

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Checkbox
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
            />
            <IconButton disabled alt="shoe 1" id="shoe_1"><img id="shoe" src={require('./shoe_1.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
            />
            <IconButton disabled alt="shoe 2" id="shoe_2"><img id="shoe" src={require('./shoe_2.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
         <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Checkbox
                  checked={state.checkedC}
                  defaultChecked
                  onChange={handleChange('checkedC')}
            />
            <IconButton disabled alt="shoe 3"id="shoe_3"><img id="shoe" src={require('./shoe_3.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
         <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <Checkbox
                  checked={state.checkedD}
                  defaultChecked
                  onChange={handleChange('checkedD')}
            />
            <IconButton disabled alt="shoe 4" id="shoe_4"><img id="shoe" src={require('./shoe_4.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}