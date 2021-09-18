import React from "react"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import "./PositionedSnackbar.scss";

export default function PositionedSnackbar({ alertMessage, setAlertMessage }) {
  const vertical = "top"
  const horizontal = "center"


  const handleClose = () => {
    setAlertMessage(false)
  }


  return (
    <div>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        open={alertMessage}
        onClose={handleClose}
        message="Message sent - wish to see you soon"
        key={vertical + horizontal}
        style={{ background: "light-blue" }}
      />
    </div>
  )
}
