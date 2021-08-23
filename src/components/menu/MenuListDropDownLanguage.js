import React from "react"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { makeStyles } from "@material-ui/core/styles"
import LanguageIcon from "@material-ui/icons/Language"


import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
    zIndex: 0
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}))

export default function MenuListDropDownLanguage() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()


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
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <LanguageIcon style={{ color: "white" }} /><span style={{ color: "white" }}>{t("header_language")}</span>
        </Button>
        <Popper style={{ zIndex: 4 }} open={open} anchorEl={anchorRef.current} role={undefined} transition
                disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem key={"en"}>
                      <Link
                        to={originalPath}
                        language={"en"}
                      >
                        {"English"}
                      </Link>
                    </MenuItem>
                    <MenuItem key={"es"}>
                      <Link
                        to={originalPath}
                        language={"es"}
                      >
                        {"Español"}
                      </Link>
                    </MenuItem>
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
`