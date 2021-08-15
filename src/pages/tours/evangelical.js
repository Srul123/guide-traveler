import React from "react"
import Layout from "../../components/Layout"
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

export default function TourEvangelical() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Layout>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            {/*<Typography className={classes.title} color="textSecondary" gutterBottom>*/}
            {/*  Word of the Day*/}
            {/*</Typography>*/}
            <Typography variant="h5" component="h2">
              Cristianos Evangelicos:
            </Typography>
            {/*<Typography className={classes.pos} color="textSecondary">*/}
            {/*  adjective*/}
            {/*</Typography>*/}
            <Typography variant="body2" component="h3">
              Podemos visitar los lugares que significan mas para ti del antiguo o nuevo
              testamento, lugares donde las sagradas escrituras cobran vida porque los
              puedes ver,vivir y estar en ellos, “ respirar su santidad”.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
