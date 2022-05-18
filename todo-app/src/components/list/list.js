import { Button, Card, Elevation, Icon } from "@blueprintjs/core";
import React, { useState } from "react";
// import Insheader from "../insheader/insheader";
export default function List(props) {
  const { list, toggleComplete, incomplete, deleteItem,show } = props;

  // const [show,setShow]=useState(false)
  return (
    <>
      
      {list.map((item) => (
        <div key={item.id}>
          <Card class={"bp4-card .modifier"} style={{ width: "550px" , marginBottom:"15px", }} className="card-result" interactive={true} elevation={Elevation.TWO}>
            <div style={{ display: "flex", marginBottom: "15px" }}>

              <div className="card-buttons" style={{ display: "flex" }} >

                <Button
                  style={{ borderRadius: "15px" }}
                  className={
                    item.complete ? "bp4-intent-success" : "bp4-intent-danger"
                  }
                  // toggleComplete(item.id)
                  onClick={() =>toggleComplete(item.id) }
                >
                  {/* {show?"Completed":"pending" } */}
                  {item.complete.toString()}
                </Button>
                <span style={{ marginLeft: "10px" }}> {item.assignee}</span>



              </div>
              <div   >

                <Button  style={{float: "right",marginLeft:"400px" }} className="delete" onClick={() => deleteItem(item.id)}>
                  <Icon  icon="cross" size={15} />
                </Button>

              </div>
            </div>

            <hr />
            <div className="card-text">
              <p>To Do Item:{item.text}</p>
              <span className="diff">
                <small style={{float: "right" }}>Difficulty: {item.difficulty}</small>
              </span>
            </div>
          </Card>
        </div >
      ))
      }
    </>
  );
}