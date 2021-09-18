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

  timestamp = new Intl.DateTimeFormat('en-GB', {year: 'numeric', day: '2-digit',month: '2-digit', hour: '2-digit', minute: '2-digit', timeZone:'Asia/Jerusalem'}).format(timestamp);

  const {t} = useTranslation();
  return (
   <div className={"contact-details"}>
     <Card>
       <CardContent>
         <div className={"content"}>
           <Typography variant="h5" component="div">
             {t("contact_details_title")}:
           </Typography>
         </div>
         <div className={"content"}>
           <Typography style={{display:"flex"}}>
             <MailOutlineIcon /> <span style={{marginLeft:"1vw"}}>pepe.tours.israel@gmail.com</span>
           </Typography>
         </div>
         <div className={"content"}>
           <Typography style={{display:"flex"}}>
            <PhoneIcon />
            <span style={{marginLeft:"1vw"}}>+972547152947</span>
             <span style={{marginLeft: "1vw"}}> {t("contact_details_phone")}</span>
           </Typography>
         </div>
         <div style={{display:"flex", justifyContent:"space-between"}}>
           <div>
             <div>
               <span style={{whiteSpace: "nowrap"}}>{t("contact_details_time")}:</span>
               <br />
               <span style={{whiteSpace: "nowrap"}}> {`${t("contact_details_time_days")} 08:00 - 20:00`}</span>
             </div>
           </div>
           <div >
             <div >
               <span style={{whiteSpace: "nowrap"}}>{t("contact_details_israel_time")}:</span>
               <br />
               <span style={{whiteSpace: "nowrap"}}> {timestamp} </span>
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
