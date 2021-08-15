import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "gatsby"
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import "./MenuListDropDownLinks.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    color: 'white',
    zIndex: 1,
    padding: 0
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListDropDownLinks() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root + " my_nav"} style={{padding:"0"}}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <div style={{display:"flex", flexDirection:"column"}} >
            <ExploreOutlinedIcon style={{color:"white"}} /> <span style={{color:"white"}}>Tours</span>
          </div>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem> <Link style={{color:"black"}} to={"/tours/catholic"} activeStyle={{color: "dodgerblue"}}> Catholic tour</Link></MenuItem>
                    <MenuItem> <Link style={{color:"black"}} to={"/tours/evangelical"} activeStyle={{color: "dodgerblue"}}>Evangelical tour</Link></MenuItem>
                    <MenuItem> <Link style={{color:"black"}} to={"/tours/jewish"} activeStyle={{color: "dodgerblue"}}>Jewish tour</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
