import * as React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import EmailIcon from "@material-ui/icons/Email"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"


export default function ContactUsForm() {
  const { t } = useTranslation()
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password")
    })
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <EmailIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Send me a message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="name"
                    name="Name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="subject"
                    name="Subject"
                    required
                    fullWidth
                    id="subject"
                    label="Subject"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="outlined-multiline-static"
                    name="Message"
                    label="Message"
                    multiline
                    fullWidth
                    rows={5}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} style={{ marginTop: "2vh",color:"white", background:"forestgreen" }}>
                Send message
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
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