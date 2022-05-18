import React, { useEffect, useState } from "react";
import List from "../list/list";
import Form from "../form/form";
import { v4 as uuid } from "uuid";
import Insheader from "../insheader/insheader";
import Pagination from "../pagination/pagination";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const[show,setShow]=useState(false)
  const [currentPage,setCurrentPage]=useState(1);
  const [itemsPerPages,setItemPerPages]=useState(3);
  const paginate = pageNumber => setCurrentPage(pageNumber);
// console.log("listttttttttt",list);
  function addItem(item) { 
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
    console.log("list", list);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
        // show?setShow(item.complete):setShow(!item.complete)
      }
      
      return item;
    });

    setList(items);
  }



  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    // document.title = To Do List: ${incomplete};
  }, [list]);

  const indexOfLastItem=currentPage*itemsPerPages;
  const indexOfFirstItem=indexOfLastItem-itemsPerPages;
  const currentItem=list.slice(indexOfFirstItem,indexOfLastItem);
  return (
    <>
    <div style={{width:"70%", margin:"auto"}}>
        <Insheader incomplete={incomplete} />
      <div style={{display:"flex" ,width:"70%"}}>
        <div style={{marginRight:"50px"}} >
          <Form addItem={addItem} />
        </div>
        <div style={{width:"100%"}} >
          <List
            toggleComplete={toggleComplete}
            list={list}
            show={show}
            incomplete={incomplete}
            deleteItem={deleteItem}
          />
        </div>
      </div>
      </div>
      <div style={{alignItem:"center"}}>
      <Pagination totalItems={list.length } itemsPerPages={itemsPerPages} paginate={paginate} />
      </div>
    </>
  );
};

export default ToDo;
