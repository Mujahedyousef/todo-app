import { Button, Card, Elevation, Icon } from "@blueprintjs/core";
import React from "react";

export default function List(props) {
  const { list, toggleComplete, deleteItem,showComplete } = props;
  let sautesList = [];
  if (showComplete) {
    sautesList = list;
  } else {
    sautesList = list.filter(item => !item.complete);
  }
  return (
    <>

      {sautesList.map((item) => (
        <div key={item.id}>
          <Card class={"bp4-card .modifier"} style={{  marginBottom: "15px"}} className="card-result" interactive={true} elevation={Elevation.TWO}>

            <div class="d-flex justify-content-between" style={{ display: "flex", marginBottom: "15px",width: "auto" }}>

              <div className="card-buttons" style={{ display: "flex" }} >

                <Button
                  style={{ borderRadius: "15px" }}
                  className={
                    item.complete ? "bp4-intent-success" : "bp4-intent-danger"
                  }
                  // toggleComplete(item.id)
                  onClick={() => toggleComplete(item.id)}
                >

                  {item.complete ? 'complete' : 'pending'}
                </Button>
                <span style={{ marginLeft: "10px", fontWeight: "bold" }}> {item.assignee}</span>



              </div>
              <div   >

                <Button style={{ float: "right" }} className="delete" onClick={() => deleteItem(item.id)}>
                  <Icon icon="cross" size={15} />
                </Button>

              </div>
            </div>

            <hr />
            <div className="card-text">
              <p style={{ marginLeft: "10px", fontWeight: "bold" }}>To Do Item:  {item.text}</p>

              <span className="diff">
                <small style={{ float: "right", fontWeight: "bold" }}>Difficulty: {item.difficulty}</small>
              </span>
            </div>
          </Card>
        </div >

      ))

      }

    </>
  );
}