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
export default  function TourJewish() {
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
              Judios:
            </Typography>
            {/*<Typography className={classes.pos} color="textSecondary">*/}
            {/*  adjective*/}
            {/*</Typography>*/}
            <Typography variant="body2" component="h3">
              Podemos visitar  los lugares de tus antepasados el “pueblo de Israel”. Del primer y segundo templo, lugares importantes para la creación del estado de Israel, lugares en que tu familia y tu se conecten con sus raíces.
              Siendo Judio de origen Mexicano el haber vivido en Israel por 45 años, habiendo crecido en Mexico  y el haber tenido trato en E.U, con amistades de la iglesia de JesuCristo, me ha hecho sensible a cualquier tipo de Fe.
              Ven a Tierra Santa, ven a la tierra de Israel, visita sus maravillas ,”hay que hacerlo por lo menos una vez en la vida”, y “volveras diferente a tu hogar.
              Yo te llevo y te guio, a tu ritmo, a tu tiempo a lo que mas te interese.
              Jerusalem
              Nazareth
              La Galilea
              Beith Lejem
              Masada
              El desierto de Judea y el mar muerto.
              Entre otros lugares que podemos visitar.
              Te espero. Pepe Heiblum.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

