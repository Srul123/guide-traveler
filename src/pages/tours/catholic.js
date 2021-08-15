import React from "react"
import Layout from "../../components/Layout"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
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
export default  function TourCatholic() {
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
              Cristianos Catolicos:
            </Typography>
            {/*<Typography className={classes.pos} color="textSecondary">*/}
            {/*  adjective*/}
            {/*</Typography>*/}
            <Typography variant="body2" component="h3">
              Podemos visitar los lugares donde estuvo, actuo predico y tuvo su pasión Jesus.
              Los lugares en donde según la tradición estuvo La Virgen.
              Y si tienes lugares que te identificas con ellos por sus pasajes Biblicos. Los incluimos en el tour.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

