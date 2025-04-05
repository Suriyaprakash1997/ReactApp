import * as yup from 'yup';
export const accountYearValidator=yup.object({
    accountYear: yup
    .string('please enter account year name')
    .required('please enter account year name'),
})