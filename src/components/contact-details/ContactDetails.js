import React from "react"
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import Card from "@material-ui/core/Card"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import "./ContactDetails.scss";

export default function ContactDetails() {


  let timestamp = Date.now(); // This would be the timestamp you want to format

  timestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit',  timeZone:'Asia/Jerusalem'}).format(timestamp);

  const {t} = useTranslation();
  return (
   <div className={"contact-details"}>
     <Card>
       <CardContent>
         <div className={"content"}>
           <Typography variant="h5" component="div">
             Contact Details:
           </Typography>
         </div>
         <div className={"content"}>
           <Typography style={{display:"flex"}}>
             <MailOutlineIcon /> <span style={{marginLeft:"1vw"}}>pepe.tours.israel@gmail.com</span>
           </Typography>
         </div>
         <div className={"content"}>
           <Typography style={{display:"flex"}}>
            <PhoneIcon /><span style={{marginLeft:"1vw"}}></span> +972547152947
           </Typography>
         </div>
         <div style={{display:"flex", justifyContent:"space-between"}}>
           <div>
             <div>
               <span style={{whiteSpace: "nowrap"}}>Working time:</span>
               <p style={{whiteSpace: "nowrap"}}>08:00 - 20:00</p>
             </div>
           </div>
           <div >
             <div >
               <span style={{whiteSpace: "nowrap"}}>ISRAEL current time:</span>
               <p style={{whiteSpace: "nowrap"}}> {timestamp} </p>
             </div>
           </div>
         </div>
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
`;
