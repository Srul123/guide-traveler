import React from "react"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, Link } from "gatsby"
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined"
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStarOfDavid, faCross, faBible } from "@fortawesome/free-solid-svg-icons"
import {useTranslation} from "gatsby-plugin-react-i18next";

import "./MenuListDropDownLinks.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    color: "white",
    zIndex: 1,
    padding: 0
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}))

export default function MenuListDropDownLinks() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const {t} = useTranslation();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root + " my_nav"} style={{ padding: "0" }}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ExploreOutlinedIcon style={{ color: "white" }} />
            <span style={{ color: "white" }}>{t("nav_links_tours")}</span>
          </div>
        </Button>
        <Popper style={{ zIndex: "5" }} open={open} anchorEl={anchorRef.current} role={undefined} transition
                disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem>
                      <Link className={"option-tour"} style={{ color: "black", display: "flex", flexDirection: "row" }}
                                     to={"/tours/general"} activeStyle={{ color: "dodgerblue" }}>
                      <span><AllInclusiveIcon /></span>
                      <span>{t("nav_links_tour_general")}</span>
                    </Link>
                    </MenuItem>
                    <MenuItem> <Link className={"option-tour"} style={{ color: "black", display: "flex", flexDirection: "row" }}
                                     to={"/tours/catholic"} activeStyle={{ color: "dodgerblue" }}>
                      <span><FontAwesomeIcon icon={faBible} size="1x" /></span>
                    <span>{t("nav_links_tour_catholic")}</span>
                    </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className={"option-tour"} style={{ color: "black", display: "flex", flexDirection: "row" }}
                                     to={"/tours/evangelical"} activeStyle={{ color: "dodgerblue" }}>
                        <span><FontAwesomeIcon icon={faCross} size="1x" /></span>
                        <span>{t("nav_links_tour_evangelical")}</span>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className={"option-tour"} style={{ color: "black", display: "flex", flexDirection: "row" }}
                            to={"/tours/jewish"} activeStyle={{ color: "dodgerblue" }}>
                        <span><FontAwesomeIcon icon={faStarOfDavid} size="1x" /></span>
                        <span>{t("nav_links_tour_jewish")}</span>
                      </Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}


export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;