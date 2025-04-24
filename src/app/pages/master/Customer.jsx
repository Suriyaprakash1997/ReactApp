import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import {Card,CardHeader,CardContent,Button ,TextField} from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
import { customerValidator } from "app/validation/masterValidation";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { GetCustomer,SaveCustomer,UpdateCustomer } from "../../../services/Master/CustomerService";
import { ToastContainer, toast } from 'react-toastify';
const Customer=()=>{
  const {customerid}=useParams();
    const initialValues={
        customerName: "",
        companyName:"",
        address:"",
        email:"",
        mobile:"",
        phone:"",
        gST:"",
        gSTNumber:"",
        currencyCode:"",
        currency:"",
        status:0,
        countryCode:0
      }
      const navigate=useNavigate();
      useEffect(() => {
        const fetchCustomer = async () => {
          if (customerid) {
            await getCustomerById(customerid);
          }
        };
        fetchCustomer();
      }, []);
      const getCustomerById=async(id)=>{
        const response=await GetCustomer(id); 
        if(response.status===200){
          const data=response.data;
          formik.setValues(data);
          console.log(data);
        } 
        else{
          toast.error("Something went wrong!");
        } 
      }
        const formik = useFormik({
          initialValues: initialValues,
          validationSchema:customerValidator,
          onSubmit: (values) => {
            PersistCustomer(values)
          },
        });
        const PersistCustomer=async(values)=>{
          let response=null;
          if(customerid) {
             response=await UpdateCustomer(customerid,values); 
          }
          else {
             response=await SaveCustomer(values); 
          } 
          if(response.status===200){
            const data=response.data;
            if(data.status>0){
              toast.success(data.message);
              setTimeout(() => {
              navigate("/customerlist");
              }, 2000);
             
            }
          } 
          else{
            toast.error("Something went wrong!");
          }
        }
        const status = [
          {id:1, label: "Active" },
          { id:2,label: "Non-Active" },
        ];
        const country = [
          {id:1, label: "India" },
          { id:2,label: "Overseas" },
          { id:3,label: "Other Country" },
        ];
    return(
        <>
        <ToastContainer/>
        <Card>
        <div className="d-flex justify-content-between align-item-center">
        <CardHeader title="Customer"/>
        <div className="mx-1 my-2">
          <Button sx={{mx:2}} color="primary" variant="contained" type="button" onClick={() => navigate("/customerlist")}>  
           <Icon>arrow_back</Icon>
           <Span sx={{ pl: 1, textTransform: "capitalize" }}>Back</Span>
         </Button>
          </div>
        </div>
        <CardContent>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
<Grid container spacing={2}>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="customerName"
                value={formik.values.customerName}
                onChange={formik.handleChange}
                label="Customer Name"
                onBlur={formik.handleBlur}
                error={formik.touched.customerName && Boolean(formik.errors.customerName)}
                helperText={formik.touched.customerName && formik.errors.customerName}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="companyName"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                label="Company Name"
                onBlur={formik.handleBlur}
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                label="Phone"
                onBlur={formik.handleBlur}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                label="Mobile"
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                label="EMail"
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                label="Address"
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="gST"
                value={formik.values.gST}
                onChange={formik.handleChange}
                label="GST (%)"
                onBlur={formik.handleBlur}
                error={formik.touched.gST && Boolean(formik.errors.gST)}
                helperText={formik.touched.gST && formik.errors.gST}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="gSTNumber"
                value={formik.values.gSTNumber}
                onChange={formik.handleChange}
                label="GST No"
                onBlur={formik.handleBlur}
                error={formik.touched.gSTNumber && Boolean(formik.errors.gSTNumber)}
                helperText={formik.touched.gSTNumber && formik.errors.gSTNumber}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="currencyCode"
                value={formik.values.currencyCode}
                onChange={formik.handleChange}
                label="Currency Code"
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                label="Currency"
                onBlur={formik.handleBlur}
                error={formik.touched.currency && Boolean(formik.errors.currency)}
                helperText={formik.touched.currency && formik.errors.currency}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
   <Autocomplete
          options={status}
          getOptionLabel={(option) => option.label}
          getOptionKey={(option)=>option.id}
          value={status.find(option => option.id === formik.values.status) || null}
          onChange={(event, newValue) => {
            formik.setFieldValue("status", newValue ? newValue.id : 0);
          }}
                  onBlur={formik.handleBlur}
          renderInput={(params) => (
            <TextField {...params} label="Status" variant="outlined" fullWidth />
          )}
        />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
   <Autocomplete
          options={country}
          getOptionLabel={(option) => option.label}
          getOptionKey={(option)=>option.id}
          value={country.find(option => option.id === formik.values.countryCode) || null}
  onChange={(event, newValue) => {
    formik.setFieldValue("countryCode", newValue ? newValue.id : 0);
  }}
          onBlur={formik.handleBlur}
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" fullWidth />
          )}
        />
</Grid>
</Grid>
<Grid container spacing={2}>
<Grid size={{xs: 12 }}>
  <div className="d-flex justify-content-end mt-4">
  <Button color="success" variant="contained" type="submit" >
          <Icon>taskalt</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
        </Button>
        <Button sx={{mx:2}} color="error" variant="contained" type="button" onClick={() => formik.resetForm()}>
          <Icon>cancel</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Clear</Span>
        </Button>
  </div>

</Grid>
</Grid>
</form>
        </CardContent>
        </Card>
        </>
    )
}
export default Customer