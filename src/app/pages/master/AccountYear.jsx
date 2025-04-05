import { useState } from "react";
import {Card,CardHeader,CardContent,Fab } from "@mui/material";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
import { accountYearValidator } from "app/validation/masterValidation";
const AccountYear = () => {
  const initialValues={
    accountYear: "",
    startDate:"",
    endDate:""
  }
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema:accountYearValidator,
    onSubmit: (values) => {
      console.log(values);
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
  return (
    <div>
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
          <Grid size={{ md: 4, xs: 12 }}>
          <Button color="primary" variant="contained" type="button" onClick={handleGenerate}>
          <Icon>autorenew</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Generate</Span>
        </Button>
        <Button sx={{mx:2}} color="success" variant="contained" type="submit">
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>
          </Grid>
          </Grid>
      </form>
      </CardContent>
      </Card>
     
    </div>
  );
};

export default AccountYear;
