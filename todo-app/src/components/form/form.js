import useForm from '../../hooks/form';
import { Button, Card, Elevation, Colors } from "@blueprintjs/core";

export default function Form(props) {
  const { addItem } = props;
  const { handleChange, handleSubmit } = useForm(addItem);
  return (
    <form onSubmit={handleSubmit}>
      <Card className="card-submit" elevation={Elevation.TWO}>
        <h2>Add To Do Item</h2>
        <Card className="#007067">
          <label>
            <p>To Do Item:</p>
            <input onChange={handleChange} class="bp4-input .modifier" name="assignee" type="text" placeholder="Item Details" dir="auto" />
          </label>
        </Card>
        <Card>
          <label>
            <p>Assigned To:</p>
            {/* <input  onChange={handleChange} name="assignee" type="text" placeholder="" /> */}
            <input onChange={handleChange} class="bp4-input .modifier" name="assignee" type="text" placeholder="Assignee Name" dir="auto" />
          </label>
        </Card>
        <Card className='#147EB3'>
          <label>
            <p >Difficulty:</p>
            <input className='bp4-intent-primary' onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
          </label>
        </Card>
        <br></br>
        <label>
          <Button className='bp4-intent-primary' type="submit">Add Item</Button>
        </label>
      </Card>
    </form>
  )
}