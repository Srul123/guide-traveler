import React from "react"
import OutlinedCard from "../cards/Card";
import "./CardCover.scss";

function CardsCover () {
    return (
      <div className={"cardsCover"}>
        <OutlinedCard title={"We are offering all kind of tours around israel"}
                      info={"from one day tour up to two weeks and more, Catholic or jewish oriented"}/>
      </div>
    )
}

export default CardsCover