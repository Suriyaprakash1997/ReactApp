import { useState,useEffect } from "react";
import {Card,CardHeader,CardContent,Button ,TextField} from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
import { accountYearValidator } from "app/validation/masterValidation";
import CustomDataTable from "app/element/CustomDataTable";
import { GetPagination,DeleteAccountYear,SaveAccountYear } from "../../../services/Master/AccountYearService";
import DeleteConfirmDialog from "app/element/DeleteConfirmDialog";
import { ToastContainer, toast } from 'react-toastify';
const AccountYear = () => {
  const [data,setData]=useState([])
  const [model,setModel]=useState({})
  const[visible,setVisible]=useState(false) 
  const[totalCount,setTotalCount]=useState(1);
  const initialValues={
    accountYear: "",
    startDate:"",
    endDate:""
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:accountYearValidator,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
const handleGenerate=()=>{
   const date=new Date();
   const day = String(date.getDate()).padStart(2, '0');
   const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
   const year = date.getFullYear();
   const getMonth=date.getMonth()+1;
   var acYear='';
   var sDate='';
   var eDate='';
   if(getMonth>3){
     acYear=year.toString()+'-'+(year+1).toString()
     sDate=year.toString()+'-04-01';
     eDate=(year+1).toString()+'-03-31';
   }
   else{
    acYear=(year-1).toString()+'-'+(year).toString()
    sDate=(year-1).toString()+'-04-01';
    eDate=year.toString()+'-03-31';
   }
   formik.setFieldValue('accountYear', acYear);
   formik.setFieldValue('startDate', sDate);
   formik.setFieldValue('endDate', eDate);  
}
const handleSubmit=(values)=>{
  SaveAccountYear(values)
  .then((res)=>{
    var data=res.data;
    if(data.status>0){
      toast.success(data.message);
      setVisible(false);
      formik.resetForm();
      getData(model);
    }
    else{
      toast.error(data.message);
    }
  }).catch((error)=>{
    toast.error(error.message);
  })
}
useEffect(()=>{ 
  getData(model);
} ,[model])
const getData=async(model)=>{
  const response=await GetPagination(model);
  if(response.status===200){
    setData(response.data.data);
    setTotalCount(response.data.totalPages);
  }
}
const handleDeleteClick=(type,Id)=>{
  if(type==="Yes"){
    DeleteAccountYear(Id)
   .then((res)=>{
    var data=res.data;
    if(data.status>0){
      toast.success(data.message);
      getData()
      }
      else{
        toast.error(data.message);
      }
    
      })
      .catch((error)=>{
        toast.error(error.message);
      })
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
    width: 100,
    sortable: false,
    filterable: false,
  },
  {
    field: 'accountyear',
    headerName: 'Account Year',
    flex: 1,
    minwidth:200,
  },
  {
    field: 'startdate',
    headerName: 'Start Date',
    flex: 1,
    minwidth:200,
    sortable:false
  },
  {
    field: 'enddate',
    headerName: 'End Date',
    minwidth:200,
    flex: 1,
    sortable:false
  },
  {
    field: 'id',
    headerName: 'Action',
    renderCell: (params) => {
      var Id=params.row.id;
      return(
        <>
         <DeleteConfirmDialog Id={Id} onConfirm={handleDeleteClick}/>
        </>
      )
      },
    width: 100,
    sortable: false,
    filterable: false,
  },
];
const cancel=()=>{
  setVisible(false);
  formik.resetForm();
}
  return (
   
    <>
     <ToastContainer/>
      {visible&&
       <Card>
       <CardHeader title="Account Year"/>
       <CardContent>
       <form onSubmit={formik.handleSubmit} autoComplete="off">
       <Grid container spacing={2}>
         <Grid size={{ md: 4, xs: 12 }}>
             <TextField
               fullWidth
               type="text"
               name="accountYear"
               value={formik.values.accountYear}
               onChange={formik.handleChange}
               label="Account Year"
               slotProps={{
                 input: {
                   readOnly: true,
                 },
               }}
               onBlur={formik.handleBlur}
               error={formik.touched.accountYear && Boolean(formik.errors.accountYear)}
               helperText={formik.touched.accountYear && formik.errors.accountYear}
             />
         </Grid>
         <Grid size={{ md: 6, xs: 12 }}>
         <Button sx={{mx:1}} color="primary" variant="contained" type="button" onClick={handleGenerate}>
         <Icon>autorenew</Icon>
         <Span sx={{ pl: 1, textTransform: "capitalize" }}>Generate</Span>
       </Button>
       <Button sx={{mx:1}} color="success" variant="contained" type="submit">
         <Icon>send</Icon>
         <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
       </Button>
       <Button sx={{mx:1}} color="error" variant="contained" type="button"onClick={cancel}>  
         <Icon>cancel</Icon>
         <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
       </Button>
         </Grid>
         </Grid>
     </form>
     </CardContent>
     </Card>
      }
     
     <div className="mt-2">
      <Card>
<div className="d-flex justify-content-between align-item-center">

<CardHeader title="Account Year List"/>
<div className="mx-1 my-2">
  <Button sx={{mx:2}} color="primary" variant="contained" type="button" onClick={()=>setVisible(true)}>
   <Icon>add_circle</Icon>
   <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add</Span>
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
actionField='roleId'
IsActionNeed={false}
OnDeleteConfirm={handleDeleteClick}
  />
        </CardContent>
      </Card>
     </div>
    </>
  );
};

export default AccountYear;
