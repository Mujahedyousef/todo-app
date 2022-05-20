import React, { useEffect } from "react";
import List from "../list/list";
import Form from "../form/form";
import { useContext } from "react";
import { SettingContext } from '../../context/settings'
import { v4 as uuid } from "uuid";
import Insheader from "../Insheader/Insheader";
import Pagination from "../pagination/pagination";
const ToDo = () => {
  const data = useContext(SettingContext)
  // console.log("dattaaaaaaaaa",data);
  // const[show,setShow]=useState(false)


  const paginate = pageNumber => data.setCurrentPage(pageNumber);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    data.setList([...data.list, item]);
    // console.log("list", list);
  }

  function deleteItem(id) {
    const items = data.list.filter((item) => item.id !== id);
    data.setList(items);
  }

  function toggleComplete(id) {
    const items = data.list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
        // show?setShow(item.complete):setShow(!item.complete)
      }

      return item;
    });

    data.setList(items);
  }



  useEffect(() => {
    let incompleteCount = data.list.filter((item) => !item.complete).length;
    data.setIncomplete(incompleteCount);
    // document.title = To Do List: ${incomplete};
  }, [data.list]);

  const indexOfLastItem = data.currentPage * data.itemsPerPages;
  const indexOfFirstItem = indexOfLastItem - data.itemsPerPages;
  const currentItem = data.list.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div style={{ width: "70%", margin: "auto" }}>
        <Insheader incomplete={data.incomplete} />
        <div style={{ display: "flex", width: "70%" }}>
          <div style={{ marginRight: "50px" }} >
            <Form addItem={addItem} />
          </div>
          <div style={{ width: "100%" }} >
            <List
              toggleComplete={toggleComplete}
              list={currentItem}


              incomplete={data.incomplete}
              deleteItem={deleteItem}

              totalItems={data.list.length} itemsPerPages={data.itemsPerPages} paginate={paginate} currentPage={data.currentPage} setCurrentPage={data.setCurrentPage}

            />
          </div>
        </div>
      </div>
      <div >
        <Pagination totalItems={data.list.length} itemsPerPages={data.itemsPerPages} paginate={paginate} currentPage={data.currentPage} />
      </div>
    </>
  );
};

export default ToDo;
