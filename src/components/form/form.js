import useForm from '../../hooks/form';
import { Button, Card, Elevation,Checkbox } from "@blueprintjs/core";

export default function Form(props) {
  const { addItem, itemPerPage,showComplete,showCompleteToggle } = props;
  const { handleChange, handleSubmit } = useForm(addItem);
  return (
    <form  onSubmit={handleSubmit}>
      <Card style={{ backgroundColor: "#E5E8EB"  }} className="card-submit" elevation={Elevation.TWO}>
        <h3>Add To Do Item</h3>

        <label style={{ fontWeight: "bold", marginTop: "5px" }}>
          <p>To Do Item:</p>
          <input onChange={handleChange} class="bp4-input .modifier" name="text" type="text" placeholder="Item Details" dir="auto" />
        </label>


        <label style={{ fontWeight: "bold", marginTop: "10px", marginBottom: "10px" }}>
          <p>Assigned To:</p>
          {/* <input  onChange={handleChange} name="assignee" type="text" placeholder="" /> */}
          <input onChange={handleChange} class="bp4-input .modifier" name="assignee" type="text" placeholder="Assignee Name" dir="auto" />
        </label>
        <label style={{ fontWeight: "bold", marginTop: "10px" }}>
        
          <p>Items per page:</p>
          <input onChange={itemPerPage} defaultValue={3} type="range" min={1} max={5} name="items per page" />
        </label>
        
        
        <label style={{ fontWeight: "bold", marginTop: "10px" }}>
          <p >Difficulty:</p>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>
        <hr />

        <Checkbox checked={showComplete} label="Display completed items" onChange={showCompleteToggle} />

        <hr />
        <label>
          <Button className='bp4-intent-primary' type="submit">Add Item</Button>
        </label>
      </Card>
    </form>
  )
}