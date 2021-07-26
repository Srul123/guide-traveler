import React from "react"
import OutlinedCard from "../cards/Card";
import "./CardCover.scss";

function CardsCover () {
    return (
      <div className={"cardsCover"}>
        <OutlinedCard title={"Jerusalem"} info={"The beauty of the past"}/>
        <OutlinedCard title={"Tel-Aviv"} info={"24 7 this exactly what is Tel Aviv City"}/>
      </div>
    )
}

export default CardsCover