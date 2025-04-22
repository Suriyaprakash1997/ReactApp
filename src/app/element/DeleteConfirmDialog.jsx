import React from 'react';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteConfirmDialog = (props) => {
    const { onConfirm, Id } = props; 
  const showDialog = () => {
    Swal.fire({
      title:  "Are you sure?",
      text: "You want to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText:"Yes, delete it!",
      cancelButtonText:"Cancel",
    }).then((result) => {
      if (result.isConfirmed && onConfirm) {
        onConfirm("Yes",Id);
      }
    });
  };
  return (
    <>
          <DeleteIcon style={{cursor:'pointer'}} onClick={showDialog}   color='error'/>
    </>
  )
}

export default DeleteConfirmDialog
