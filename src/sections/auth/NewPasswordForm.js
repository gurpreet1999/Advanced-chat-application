import React from 'react'
import FormProvider from '../../components/hook-form/FormProvider'
import { Button, IconButton, InputAdornment, Stack } from '@mui/material'
import RHFTextField from '../../components/hook-form/RHFTextField'
import { Eye, EyeSlash } from 'phosphor-react'
import * as Yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'


const NewPasswordForm = () => {
    const [showPassword,setShowPassword]=useState()

    const VerifyCodeSchema = Yup.object().shape({
    
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        passwordConfirm: Yup.string()
          .required('Confirm password is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      });
    
      const defaultValues = {
        password: '',
        passwordConfirm: '',
      };
    
      const methods = useForm({
        mode: 'onChange',
        resolver: yupResolver(VerifyCodeSchema),
        defaultValues,
      });
    
      const {
        handleSubmit,
      } = methods;
    
      const onSubmit = async (data) => {
        try {
        //   Send API Request
      
        } catch (error) {
          console.error(error);
        }
      };



  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={3}>
      

      <RHFTextField
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
        }}
      />

      <RHFTextField
        name="passwordConfirm"
        label="Confirm New Password"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
        }}
      />

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
        Update Password
      </Button>
    </Stack>
  </FormProvider>
  )
}

export default NewPasswordForm