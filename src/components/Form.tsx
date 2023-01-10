import React, { useEffect, useState } from "react";

// mui
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// form
import { useForm, Controller } from "react-hook-form";

// custom components
import PreviewModal from "../components/predefinedModals/PreviewModal";

// MUI theme
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// context
import { useFormCtx, initialContext } from "../contexts/FormCtxProvider";

type FormData = {
  name: string;
  surname: string;
  street: string;
  houseNr: string;
  city: string;
  zipCode: string;
  phone: string;
};

const Form = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const dataCtx = useFormCtx();
  const { handleSubmit, control, reset } = useForm<FormData>();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  // handles submit when form is valid
  const submit = handleSubmit((data: FormData) => {
    dataCtx.setContext((prevState) => ({ ...prevState, formData: data }));
    setModalOpen(true);
  });

  // will update form with ctx data loaded by useFEtch hook
  useEffect(() => {
    reset(dataCtx.formData); // Controllers use same name as context
  }, [dataCtx.formData, reset]);

  // handles reset
  const handleReset = () => reset(initialContext.formData); // Controllers use same name as context

  return (
    <form onSubmit={submit}>
      <Grid container spacing={{ md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="name"
            defaultValue={dataCtx?.formData.name}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="name"
                label="Name"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="surname"
            defaultValue={dataCtx?.formData.surname}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="surname"
                label="Surname"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={{ md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="street"
            defaultValue={dataCtx?.formData.street}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="street"
                label="Street"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="houseNr"
            defaultValue={dataCtx?.formData.houseNr}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="houseNr"
                label="House number"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={{ md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="city"
            defaultValue={dataCtx?.formData.city}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="city"
                label="City"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="zipCode"
            defaultValue={dataCtx?.formData.zipCode}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="zipCode"
                label="Zip code"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={{ md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ mt: 2, justifyContent: "center", display: "flex" }}
        >
          <Controller
            control={control}
            rules={{
              required: "This field have to be required",
              minLength: {
                value: 2,
                message: "Min length is 2",
              },
            }}
            name="phone"
            defaultValue={dataCtx?.formData.phone}
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { error },
            }) => (
              <TextField
                className={error ? "Mui-error" : ""}
                id="phone"
                label="Phone"
                fullWidth={isSm ? true : false}
                error={error !== undefined}
                value={value}
                helperText={error ? error && error?.message : ""}
                inputRef={ref}
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid container spacing={{ md: 3 }}>
        <Grid
          item
          xs={6}
          sx={{ my: 2, justifyContent: "center", display: "flex" }}
        >
          <Button type="reset" variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ my: 2, justifyContent: "center", display: "flex" }}
        >
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
      <PreviewModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title="custom preview modal"
      />
    </form>
  );
};

export default Form;
