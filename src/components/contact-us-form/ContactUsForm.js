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
import emailjs from 'emailjs-com';


export default function ContactUsForm() {
  const { t } = useTranslation()
  const sendEmail = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(event.target);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    })
    emailjs.sendForm('service_dykl3lr', 'template_4mckckg', event.target, 'user_IISNtcuoRKbdqKjdysksj')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
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
              {t("contact_form_title")}
            </Typography>
            <Box component="form" onSubmit={sendEmail} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label={t("contact_form_label_name")}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t("contact_form_label_email")}
                    name="email"
                    // autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    // autoComplete="subject"
                    name="subject"
                    required
                    fullWidth
                    id="subject"
                    label={t("contact_form_label_subject")}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="outlined-multiline-static"
                    name="message"
                    label={t("contact_form_label_message")}
                    multiline
                    fullWidth
                    rows={5}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Button type={"submit"} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} style={{ marginTop: "2vh",color:"white", background:"forestgreen" }}>
                {t("contact_form_label_send")}
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