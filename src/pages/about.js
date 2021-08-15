import React from "react"
import Layout from "../components/Layout"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "2vh"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Layout>
      <div style={{marginBottom:"2vh"}}>
        <Typography variant="h4" gutterBottom>
          Tours significativos
        </Typography>
        <Typography variant="h6" gutterBottom>
          Mi nombre es Pepe Heiblum guía certificado de turismo en Israel.
          Y quiero invitarte a tener una experiencia maravillosa, una experiencia significativa en la tierra de Israel, una experiencia que marque un “antes y un después” en tu vida.
          No importa tu fe, religión o creencias, ven a tierra santa y visitaremos los lugares mas significativos para ti, yo te sugiero y juntos elaboramos tu excursión.
        </Typography>
      </div>
    </Layout>
  )
}

export default About