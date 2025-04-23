import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Card,CardHeader,CardContent,Button ,TextField} from "@mui/material";
import Icon from "@mui/material/Icon";
import { Span } from "app/components/Typography";
import CustomDataTable from "app/element/CustomDataTable";
import { GetPagination,DeleteCustomer,GetCustomer } from "../../../services/Master/CustomerService";
import { ToastContainer, toast } from 'react-toastify';

const CustomerList = () => {
    const navigate=useNavigate();   
    const [data,setData]=useState([])
    const [model,setModel]=useState({})
    const[totalCount,setTotalCount]=useState(1);
    useEffect(()=>{
      getData(model);       
    },[model])
    const getData=async(model)=>{
      const response=await GetPagination(model);
      if(response.status===200){  
        console.log(response.data.data) 
         setData(response.data.data);
        setTotalCount(response.data.totalPages);
      }
    }
    const columns = [
      {
        field: 'sno',
        headerName: 'S.No',
        renderCell: (params) => {
          const allRowIds = params.api.getAllRowIds();
          const rowIndex = allRowIds.indexOf(params.id);
          return <>{rowIndex + 1}</>;
          },
        width: 80,
        sortable: false,
        filterable: false,
      },
      {
        field: 'companyName',
        headerName: 'Company',
        width:100,
      },
      {
        field: 'customerName',
        headerName: 'Customer',
        width:100,
      },

      {
        field: 'address',
        headerName: 'Address',
        minWidth: 200,
        flex: 1,
        sortable:false
      },
      {
        field: 'phone',
        headerName: 'Phone',
        width:150,
        sortable:false
      },
      {
        field: 'email',
        headerName: 'Email',
        width:150,
        sortable:false
      },
      {
        field: 'currency',
        headerName: 'Currency',
        width:100,
        sortable:false
      },
      {
        field: 'status',
        headerName: 'Status',
        renderCell: (params) => {
          const status = params.row.status;
          return( <>
          <div className="mt-2">
          {status==1? <Icon color="success">check_circle</Icon>: <Icon color="error">cancel</Icon>}
          </div>
          </>);
          },
        with:100,
        sortable:false
      }
    ];
    const handleDeleteClick=(type,Id)=>{
      console.log(type,Id)
      //DeleteCustomer(Id)
    }
  return (
    <>
      <Card>
        <div className="d-flex justify-content-between align-item-center">
        
        <CardHeader title="Customer List"/>
        <div className="mx-1 my-2">
          <Button sx={{mx:2}} color="primary" variant="contained" type="button" onClick={() => navigate("/customer")}>  
           <Icon>add_circle</Icon>
           <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add Customer</Span>
         </Button>
          </div>
        </div>
        <CardContent>
        <CustomDataTable 
columns={columns}
rows={data}
model={model}
setModel={setModel}
TotalCount={totalCount}
actionField='id'
IsActionNeed={true}
OnDeleteConfirm={handleDeleteClick}
OnEditConfirm={(id)=>navigate("/customer/"+id)}
  />
        </CardContent>
      </Card>
    </>
  )
}

export default CustomerList
