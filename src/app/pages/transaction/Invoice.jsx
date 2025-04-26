import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Card,CardHeader,CardContent,Button ,TextField,
  Box,
  IconButton,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid2";
import { Span } from "app/components/Typography";
import { useFormik } from 'formik';
import { invoiceValidator } from "app/validation/masterValidation";
import CustomDatePicker from "app/element/CustomDatePicker";
import dayjs from 'dayjs';
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { DataGrid } from "@mui/x-data-grid";
import { Margin } from "@mui/icons-material";
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
              const initialItem = {
                description: "",
                resources: "",
                month: "",
                project: "",
                amount: 0,
              };
              const [items, setItems] = useState([initialItem]);
            
              const addItem = () => {
                setItems([
                  ...items,
                  { description: "", resources: "", month: "", project: "", amount: "" },
                ]);
              };
            
              const removeItem = (index) => {
                const newItems = [...items];
                newItems.splice(index, 1);
                setItems(newItems);
              };
            
              const handleChange = (index, field, value) => {
                const newItems = [...items];
                newItems[index][field] = value;
                setItems(newItems);
              };
            
              const calculateSubTotal = () => {
                return items.reduce((total, item) => total + parseFloat(item.amount || 0), 0).toFixed(2);
              };
              const handleSave = () => {
                console.log("Saved Invoice Items:", items);
              };
              const handleClear = () => {
                setItems([initialItem]);
              };
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
       <Button sx={{mx:2,mt:2}} color="primary" variant="contained" type="button" onClick={addItem}>
          <Icon>add</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add Item</Span>
            </Button>
            <CardContent>
        <TableContainer component={Paper}>
        <Table sx={{
    border: 1,
    borderColor: "grey.300",
    "& th, & td": {
      borderBottom: "1px solid #ccc",
      borderRight: "1px solid #ccc",
      paddingLeft: 1,
    },
    "& th:last-child, & td:last-child": {
      borderRight: "none",
    },
  }}>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Resources</TableCell>
              <TableCell>Month</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell sx={{textAlign:'center'}}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={item.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={item.resources}
                    onChange={(e) => handleChange(index, "resources", e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={item.month}
                    onChange={(e) => handleChange(index, "month", e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell>
                  <Select
                    value={item.project}
                    onChange={(e) => handleChange(index, "project", e.target.value)}
                    displayEmpty
                    size="small"
                    fullWidth
                  >
                    <MenuItem value="">Select...</MenuItem>
                    <MenuItem value="Project A">Project A</MenuItem>
                    <MenuItem value="Project B">Project B</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                  inputProps={{style: {textAlign: 'right'}}}
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                    type="number"
                    variant="outlined"
                    size="small"
                    value={item.amount}
                    onChange={(e) => handleChange(index, "amount", e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => removeItem(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            {/* Subtotal Row */}
            <TableRow>
              <TableCell colSpan={5} align="right" sx={{ fontWeight: "bold" }}>
                Sub Total
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>{calculateSubTotal()}</TableCell>
              <TableCell />
            </TableRow>

            {/* Total Row */}
            <TableRow>
              <TableCell colSpan={5} align="right" sx={{ fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>{calculateSubTotal()}</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} textAlign="right">
        <Button variant="contained" color="success" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" color="error" onClick={handleClear} sx={{ ml: 2 }}>
          <Icon>clear</Icon>
          Clear
        </Button>
      </Box>
            </CardContent>
       </Card>
    </>
  )
}

export default Invoice
