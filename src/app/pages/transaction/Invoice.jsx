import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Card,CardHeader,CardContent,Button ,TextField} from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
import { invoiceValidator } from "app/validation/masterValidation";
import CustomDatePicker from "app/element/CustomDatePicker";
import dayjs from 'dayjs';
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";
const Invoice = () => {
    const date=Date.now();
      const navigate=useNavigate();
      const NavigateInvoice=()=>{
    navigate('/invoicelist')
      }
       const initialValues={
              invoiceNo: "",
              invoiceDate:dayjs(date),
              customerName:"",
              pono:"",
              notes:""
            }
              const formik = useFormik({
                initialValues: initialValues,
                validationSchema:invoiceValidator,
                onSubmit: (values) => {
                  console.log(values);
                },
              });
              const status = [
                {id:1, label: "Active" },
                { id:2,label: "Non-Active" },
              ];
  return (
    <>
       <Card>
        <div className="d-flex justify-content-between align-item-center">
          <div>
          <CardHeader title="Invoice"/> 
          </div>
          <div>
          <Button sx={{mx:2,mt:2}} color="primary" variant="contained" type="button" onClick={NavigateInvoice}>
          <Icon>arrow_back</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Back</Span>
            </Button>
            </div>
        </div>
        <CardContent>
        <Grid container spacing={2}>
        <Grid size={{xs:12,md:6}}>
<CustomDatePicker 
label='Invoice Date' 
name='invoiceDate'
value={formik.values.invoiceDate && dayjs(formik.values.invoiceDate)}
onChange={(newValue) => formik.setFieldValue('invoiceDate', newValue)}
onBlur={formik.handleBlur}
error={formik.touched.invoiceDate && Boolean(formik.errors.invoiceDate)} 
helperText={formik.touched.invoiceDate && formik.errors.invoiceDate}
/>
</Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                label="Invoice No"
                                name="invoiceNo"
                                value={formik.values.invoiceNo}
                                onChange={formik.handleChange}
                                slotProps={{
                                    input: {
                                      readOnly: true,
                                    },
                                  }}
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
               <Autocomplete
                      options={status}
                      getOptionLabel={(option) => option.label}
                      getOptionKey={(option)=>option.id}
                      renderInput={(params) => (
                        <TextField {...params} label="Customer Name" variant="outlined" fullWidth />
                      )}
                    />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="Company Name"
                                value={formik.values.customerName} 
                                slotProps={{
                                    input: {
                                      readOnly: true,
                                    },
                                  }}                          
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="Customer Address"
                                value={formik.values.customerName} 
                                slotProps={{
                                    input: {
                                      readOnly: true,
                                    },
                                  }}                          
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="Currency"
                                value={formik.values.customerName}   
                                slotProps={{
                                    input: {
                                      readOnly: true,
                                    },
                                  }}                        
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="Attention Person"
                                value={formik.values.customerName} 
                                slotProps={{
                                    input: {
                                      readOnly: true,
                                    },
                                  }}                          
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="Attention Person"
                                value={formik.values.customerName}  
                                slotProps={{
                                    input: {
                                      readOnly: true,
                                    },
                                  }}                         
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="Notes"
                                  name="notes"
                                value={formik.values.notes} 
                                onChange={formik.handleChange}                          
                              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
                <TextField
                                fullWidth
                                type="text"
                                 label="PO Number"
                                  name="pono"
                                value={formik.values.pono}  
                                onChange={formik.handleChange}                         
                              />
            </Grid>
            </Grid>
        </CardContent>
        </Card>
       <Card className="mt-2">
       <CardHeader title="Invoice Details"/> 
       <Button sx={{mx:2,mt:2}} color="primary" variant="contained" type="button" onClick={NavigateInvoice}>
          <Icon>add</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add Item</Span>
            </Button>
            <CardContent>

            </CardContent>
       </Card>
    </>
  )
}

export default Invoice
