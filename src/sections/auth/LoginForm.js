import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import { useState } from "react";
import * as yup from "yup";
import {Link as RouterLink} from "react-router-dom"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState();
  const LoginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be valid email adress"),
    password: yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "abcd@gmail.com",
    password: "1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //submitting
    } catch (err) {
      reset();
      setError("afterSubmit", {
        ...err,

        message: err.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
    

      <RHFTextField name="email" label="email adress"></RHFTextField>
      <RHFTextField
        name="password"
        label="password"
        type={showPassword ? "text" : "password"}
        inputProps={{
          endadornment: (
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <Eye /> : <EyeSlash />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></RHFTextField>
        </Stack>
        <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link component={RouterLink} to="/auth/reset-password" variant="body2" color="inherit" underline="always">
          Forgot password?
        </Link>
      </Stack>

      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
       
        sx={{
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
        Login
      </Button>



    </FormProvider>
  );
};

export default LoginForm;
