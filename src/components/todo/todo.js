import React, { useEffect } from "react";
import { When } from 'react-if';
import List from "../list/list";
import Form from "../form/form";
import { useContext } from "react";
import { LoginContext } from '../../context/auth';
import { SettingContext } from '../../context/settings'
import { v4 as uuid } from "uuid";
import Insheader from "../Insheader/Insheader";
import Pagination from "../pagination/pagination";
import Signin from "../signin/signin";
import Signup from "../signup/signup";
import Swal from 'sweetalert2';
const ToDo = () => {
  const data = useContext(SettingContext)
  const auth=useContext(LoginContext)
  let stringifiedData;
   
  const paginate = pageNumber => data.setCurrentPage(pageNumber);

  function addItem(item) {
    // console.log(item);
    item.id = uuid();
    item.complete = false;
    data.setList([...data.list, item]);
     stringifiedData = JSON.stringify([...data.list, item]);
    localStorage.setItem("list",stringifiedData );
    

  }
  function showCompleteToggle() {
    data.setShowComplete(!data.showComplete);
    // console.log(states.showComplete);
  }
  function itemPerPage(e) {
    data.setItemPerPages(e.target.value)
  }
  function deleteItem(id) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary item is safe :)',
          'error'
        )
      }
    })


    const items = data.list.filter((item) => item.id !== id);
    data.setList(items);
    stringifiedData = JSON.stringify(items)
        localStorage.setItem("list", stringifiedData)

  }

  function toggleComplete(id) {
    const items = data.list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
         stringifiedData = JSON.stringify(data.list)
        localStorage.setItem("list", stringifiedData)

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
    <When condition={auth.loggedIn}>
      <div style={{ width: "70%", margin: "auto" }}>
        <Insheader incomplete={data.incomplete} />
        <div style={{ display: "flex", width: "70%" }}>
          <div style={{ marginRight: "50px" }} >
            <Form addItem={addItem} showCompleteToggle={showCompleteToggle}
              itemPerPage={itemPerPage} showComplete={data.showComplete} />
          </div>
          <div style={{ width: "100%" }} >
            <List
              toggleComplete={toggleComplete}
              list={currentItem}
              showComplete={data.showComplete}

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
      </When>
      <When condition={!auth.loggedIn}>
      <Signin/>
      <Signup/>
      </When>
    </>
  );
};

export default ToDo;
