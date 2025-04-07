import * as yup from 'yup';
export const accountYearValidator=yup.object({
    accountYear: yup
    .string('please enter account year name')
    .required('please enter account year name'),
})
export const customerValidator=yup.object({
    customerName: yup.string('please enter customer name')
    .required('please enter customer name'),
    companyName: yup.string('please enter company name')
    .required('please enter company name'),
})