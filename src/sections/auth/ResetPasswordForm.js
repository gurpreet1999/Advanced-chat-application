import React from 'react'
import FormProvider from '../../components/hook-form/FormProvider'
import { Button } from '@mui/material'
import RHFTextField from '../../components/hook-form/RHFTextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from "yup"


const ResetPasswordForm = () => {

    const ResetPasswordSchema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Email must be a valid email address"),
      });
    
      const methods = useForm({
        resolver: yupResolver(ResetPasswordSchema),
        defaultValues: { email: "demo@tawk.com" },
      });
    
      const { handleSubmit } = methods;
    
      const onSubmit = async (data) => {
        try {
          //   Send API Request
        //   dispatch(ForgotPassword(data));
        } catch (error) {
          console.error(error);
        }
      };



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <RHFTextField name="email" label="Email address" />

    <Button
      
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      sx={{
        mt: 3,
        bgcolor: "text.primary",
        color: (theme) =>
          theme.palette.mode === "light" ? "common.white" : "grey.800",
        "&:hover": {
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
        },
      }}
    >
      Send Request
    </Button>
  </FormProvider>
  )
}

export default ResetPasswordForm