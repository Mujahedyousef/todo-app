import { useState } from 'react';
import Swal from 'sweetalert2';
const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your item has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;