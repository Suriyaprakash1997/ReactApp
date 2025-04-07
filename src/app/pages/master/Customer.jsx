import { useState,useEffect } from "react";
import {Card,CardHeader,CardContent,Button ,TextField} from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
import { customerValidator } from "app/validation/masterValidation";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
const Customer=()=>{
    const initialValues={
        customerName: "",
        companyName:"",
        address:"",
        email:"",
        address:"",
        mobile:"",
        phone:"",
        web:"",
        skype:"",
        gstno:"",
        gst:"",
        freelance:"",
        code:"",
        upwork:"",
        currecyCode:"",
        currency:"",
        status:"",
        country:"",
        attendPerson:"",
        attendDesignation:""
      }
        const formik = useFormik({
          initialValues: initialValues,
          validationSchema:customerValidator,
          onSubmit: (values) => {
            console.log(values);
          },
        });
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
        <Card>
        <CardHeader title="Customer"/>
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
                type="text"
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
                name="web"
                value={formik.values.web}
                onChange={formik.handleChange}
                label="Web"
                onBlur={formik.handleBlur}
                error={formik.touched.web && Boolean(formik.errors.web)}
                helperText={formik.touched.web && formik.errors.web}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="skype"
                value={formik.values.skype}
                onChange={formik.handleChange}
                label="Skype"
                onBlur={formik.handleBlur}
                error={formik.touched.skype && Boolean(formik.errors.skype)}
                helperText={formik.touched.skype && formik.errors.skype}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="gst"
                value={formik.values.gst}
                onChange={formik.handleChange}
                label="GST (%)"
                onBlur={formik.handleBlur}
                error={formik.touched.gst && Boolean(formik.errors.gst)}
                helperText={formik.touched.gst && formik.errors.gst}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="gstno"
                value={formik.values.gstno}
                onChange={formik.handleChange}
                label="GST No"
                onBlur={formik.handleBlur}
                error={formik.touched.gstno && Boolean(formik.errors.gstno)}
                helperText={formik.touched.gstno && formik.errors.gstno}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="freelance"
                value={formik.values.freelance}
                onChange={formik.handleChnange}
                label="Freelance"
                onBlur={formik.handleBlur}
                error={formik.touched.freelance && Boolean(formik.errors.freelance)}
                helperText={formik.touched.freelance && formik.errors.freelance}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="code"
                value={formik.values.code}
                onChange={formik.handleChnange}
                label="Code"
                onBlur={formik.handleBlur}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="upwork"
                value={formik.values.upwork}
                onChange={formik.handleChnange}
                label="Upwork"
                onBlur={formik.handleBlur}
                error={formik.touched.upwork && Boolean(formik.errors.upwork)}
                helperText={formik.touched.upwork && formik.errors.upwork}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="currecyCode"
                value={formik.values.currecyCode}
                onChange={formik.handleChnange}
                label="Currecy Code"
                onBlur={formik.handleBlur}
                error={formik.touched.currecyCode && Boolean(formik.errors.currecyCode)}
                helperText={formik.touched.currecyCode && formik.errors.currecyCode}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChnange}
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
          renderInput={(params) => (
            <TextField {...params} label="Country" variant="outlined" fullWidth />
          )}
        />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="attendPerson"
                value={formik.values.attendPerson}
                onChange={formik.handleChnange}
                label="Attend Person"
                onBlur={formik.handleBlur}
                error={formik.touched.attendPerson && Boolean(formik.errors.attendPerson)}
                helperText={formik.touched.attendPerson && formik.errors.attendPerson}
              />
</Grid>
<Grid size={{ md: 6, xs: 12 }}>
<TextField
                fullWidth
                type="text"
                name="attendDesignation"
                value={formik.values.attendDesignation}
                onChange={formik.handleChnange}
                label="Attend Designation"
                onBlur={formik.handleBlur}
                error={formik.touched.attendDesignation && Boolean(formik.errors.attendDesignation)}
                helperText={formik.touched.attendDesignation && formik.errors.attendDesignation}
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
        <Button sx={{mx:2}} color="error" variant="contained" type="button">
          <Icon>cancel</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Cancel</Span>
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