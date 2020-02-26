import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import './Variations.css';

import { createMuiTheme } from '@material-ui/core';

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
  const [checked, setChecked] = React.useState([0]);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  const theme = createMuiTheme({
    props: {
    // Name of the component ⚛️
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  });

  // return (
  //   <List className={classes.root}>
  //     {[0, 1, 2, 3].map(value => {
  //       const labelId = `checkbox-list-label-${value}`;

  //       return (
  //         <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
  //           <ListItemIcon>
  //             <Checkbox
  //               edge="start"
  //               checked={checked.indexOf(value) !== -1}
  //               tabIndex={-1}
  //               disableRipple
  //               inputProps={{ 'aria-labelledby': labelId }}
  //             />
  //           </ListItemIcon>
  //           <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
  //           <ListItemSecondaryAction>
  //             <IconButton edge="end" aria-label="comments">
  //               <CommentIcon />
  //             </IconButton>
  //           </ListItemSecondaryAction>
  //         </ListItem>
  //       );
  //     })}
  //   </List>
  // );

  // TODO: fix ripple effect and overlapping
  // TODO: fix the checkboxes all seleting at a time fml

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemText disabled primary="Nike Zoom Prototype 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <ListItemIcon id = "checkbox">
               <Checkbox id="1"
                checked={checked}
                onChange={handleChange}
                value="1"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItemIcon>
            <IconButton disabled id="shoe_1"><img src={require('./shoe_1.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon id = "checkbox">
               <Checkbox
                checked={checked}
                onChange={handleChange}
                value="2"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItemIcon>
            <IconButton disabled id="shoe_2"><img src={require('./shoe_2.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
         <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <ListItemIcon id = "checkbox">
               <Checkbox
                checked={checked}
                onChange={handleChange}
                value="3"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItemIcon>
            <IconButton disabled id="shoe_3"><img src={require('./shoe_3.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
         <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
          <ListItemIcon id = "checkbox">
               <Checkbox
                checked={checked}
                onChange={handleChange}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </ListItemIcon>
            <IconButton disabled id="shoe_4"><img src={require('./shoe_4.png')}/> </IconButton>
            <ListItemText disabled id="shoe_text" primary="shoe V1" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );


  // return (
  //   <List
  //     component="nav"
  //     aria-labelledby="nested-list-subheader"
  //     className={classes.root}>
  //     <ListItem button onClick={handleClick}>
  //       <ListItemText disabled primary="Nike Zoom Prototype 1" />
  //       {open ? <ExpandLess /> : <ExpandMore />}
  //     </ListItem>
  //     <Collapse in={open} timeout="auto" unmountOnExit>
  //       <List component="div" disablePadding>
  //         <ListItem button className={classes.nested}>
  //           <IconButton disabled id="shoe_1"><img src={require('./shoe_1.png')}/> </IconButton>
  //           <ListItemText disabled id="shoe_text" primary="shoe V1" />
  //         </ListItem>
  //       </List>
  //       <List component="div" disablePadding>
  //         <ListItem button className={classes.nested}>
  //           <IconButton disabled id="shoe_2"><img src={require('./shoe_2.png')}/> </IconButton>
  //           <ListItemText disabled id="shoe_text" primary="shoe V1" />
  //         </ListItem>
  //       </List>
  //        <List component="div" disablePadding>
  //         <ListItem button className={classes.nested}>
  //           <IconButton disabled id="shoe_3"><img src={require('./shoe_3.png')}/> </IconButton>
  //           <ListItemText disabled id="shoe_text" primary="shoe V1" />
  //         </ListItem>
  //       </List>
  //        <List component="div" disablePadding>
  //         <ListItem button className={classes.nested}>
  //           <IconButton disabled id="shoe_4"><img src={require('./shoe_4.png')}/> </IconButton>
  //           <ListItemText disabled id="shoe_text" primary="shoe V1" />
  //         </ListItem>
  //       </List>
  //     </Collapse>
  //   </List>
  // );
}



/*import React from 'react';
import './Variations.css'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
*/
/*

function SidebarItem({ depthStep = 10, depth=0, expanded, item, ...rest}) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { label, items, Icon, onClick: onClickProp } = item;

  function toggleCollapse() {
    setCollapsed(prevValue => !prevValue);
  }

  function onClick(e) {
    if (Array.isArray(items)) {
      toggleCollapse();
    }
    if (onClickProp) {
      onClickProp(e, item);
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        id={
          "sidebar-item-expand-arrow" + " sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon id="sidebar-item-expand-arrow" />
    );
  }

  return (
    <>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep}}
          id="sidebar-item-content"
        >
          {Icon && <Icon id="sidebar-item-icon" fontSize="small" />}
          <div id="sidebar-item-text">{label}</div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
            <List disablePadding dense>
              {items.map((subItem, index) => (
                <React.Fragment key={'${subItem.name}${index}'}>
                  {subItem === "divider" ? (
                     <Divider style={{ margin: "6px 0" }, {height:100}} />
                  ) : (
                    <SidebarItem
                      depth={depth + 1}
                      depthStep={depthStep}
                      item={subItem}
                    />
                  )}
                </React.Fragment>
              ))}
          </List>
        ) : null}
      </Collapse>
    </>
  );
}


export function Variations({ shoes, depthStep, depth, expanded }) {
  return (
    <div id="variations-column">
    <List disablePadding dense>
      {shoes.map((sidebarItem, index) => (
        <React.Fragment key={`${sidebarItem.name}${index}`}>  
          {sidebarItem === "divider" ? (
            <Divider style={{ margin: "6px 0"}} />
          ) : (
            <SidebarItem
              depthStep={depthStep}
              depth={depth}
              expanded={expanded}
              item={sidebarItem}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  </div>
 );
}
*/


  /*
  return <div id="variations-column">
    <div id="row-one">
      <div id="box"></div>
      <p id = "text-current">Current objects</p>
    </div>

    <div id="row-two">
      <div id="box"></div>
      <p id = "text-other">Other objects</p>
    </div>

    <div id="row-three">
      <div id="box"></div>
      <p id = "text-other">Other objects</p>
    </div>

    <div id="row-four">
      <div id="box"></div>
      <p id= "text-other">Other objects</p>
    </div>
    
    </div>*/

