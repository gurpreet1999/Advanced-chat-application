import React from 'react'
import FormProvider from '../../components/hook-form/FormProvider'
import RHFTextField from '../../components/hook-form/RHFTextField'
import { Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import * as Yup from "yup"

const ProfileForm = () => {

    const ProfileSchema = Yup.object().shape({
        firstName: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatar: Yup.string().required("Avatar is required").nullable(true),
      });
      const defaultValues = {
        firstName:"ram",
        about: "exploring",
        avatar: "",
      };

      const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
      });


      const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting, isSubmitSuccessful },
      } = methods;

      const onSubmit = async (data) => {
        try {
          //   Send API request
        //   console.log("DATA", data);
        //   dispatch(
        //     UpdateUserProfile({
        //       firstName: data?.firstName,
        //       about: data?.about,
        //       avatar: file,
        //     })
          
        } catch (error) {
          console.error(error);
        }
      };

      const values = watch();

      const handleDrop=useCallback((acceptedFiles)=>{
const file=acceptedFiles[0]
const newFile=Object.assign(file,{
    preview:URL.createObjectURL(file)
})
if(file){
    setValue("avatarUrl",newFile,{shouldValidate:true})
}



      },[setValue]



      )








  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={4}>
      {/* <RHFUploadAvatar name="avatar" maxSize={3145728} onDrop={handleDrop} /> */}

      <RHFTextField
        helperText={"This name is visible to your contacts"}
        name="firstName"
        label="First Name"
      />
      <RHFTextField multiline rows={4} name="about" label="About" />

      <Stack direction={"row"} justifyContent="end">
        <Button
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          // loading={isSubmitSuccessful || isSubmitting}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  </FormProvider>
  )
}

export default ProfileForm