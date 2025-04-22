import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Card,CardHeader,CardContent,Button ,TextField} from "@mui/material";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
const InvoiceList = () => {
  const navigate=useNavigate();
  const NavigateInvoice=()=>{
navigate('/invoice')
  }
  return (
    <div>
        <Card>
        <div className="d-flex justify-content-between align-item-center">
          <div>
          <CardHeader title="Invoice List"/> 
          </div>
          <div>
          <Button sx={{mx:2,mt:2}} color="primary" variant="contained" type="button" onClick={NavigateInvoice}>
          <Icon>add_circle_outline</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add</Span>
            </Button>
            </div>
        </div>
        <CardContent>

        </CardContent>
        </Card>
    </div>
  )
}

export default InvoiceList
