import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IUser } from "../../types/index";
import { useNavigate } from "react-router-dom";
import { selectUsersState } from "./usersSelectors";
import { useAppSelector } from "../../redux-hooks";

interface IUserFormProps {
  setting: "edit" | "create";
  userInfo?: IUser;
  handleSubmitForm: (data: any) => void;
}
const initialCreateUser: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  birthDate: 0,
  id: 0,
  access: "false",
};
function UserForm({
  userInfo = initialCreateUser,
  setting,
  handleSubmitForm,
}: IUserFormProps) {
  const [user, setUser] = useState(userInfo);
  const navigate = useNavigate();
  const { isLoading, isSubmited } = useAppSelector(selectUsersState);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    getValues,
  } = useForm();

  const onSubmit = (data: any) => {
    handleSubmitForm(data);
  };

  useEffect(() => {
    if (isSubmited) {
      navigate("/");
    }
  }, [isSubmited, navigate]);

  const handleCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.checked ? "true" : "false",
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" height={"40px"}>
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : setting === "edit" ? (
            "Edit User"
          ) : (
            "Create User"
          )}
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                defaultValue={user.firstName}
                control={control}
                name="firstName"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoComplete="off"
                      error={errors && errors?.firstName ? true : false}
                    />
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                defaultValue={user.lastName}
                control={control}
                name="lastName"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      autoComplete="off"
                      error={errors && errors?.lastName ? true : false}
                    />
                  </>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                defaultValue={user.email}
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <TextField
                      {...field}
                      fullWidth
                      id="email"
                      label="email"
                      autoComplete="off"
                      error={errors && errors?.email ? true : false}
                    />
                  </>
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                defaultValue={user.birthDate}
                control={control}
                name="birthDate"
                rules={{
                  required: "birthdate is requier!",
                  validate: () => {
                    if (String(getValues("birthDate")) === "Invalid Date") {
                      return false;
                    }
                    if (getValues("birthDate") === 0) {
                      return false;
                    }
                    return true;
                  },
                }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          disableFuture
                          label="Birth Date"
                          openTo="year"
                          views={["year", "month", "day"]}
                          value={user.birthDate ? user.birthDate : null}
                          onChange={(newValue) => {
                            onChange(newValue);
                            if (newValue) {
                              setUser({ ...user, birthDate: newValue });
                            }
                          }}
                          renderInput={(params) => (
                            <>
                              <TextField
                                {...params}
                                error={
                                  errors && errors?.birthDate ? true : false
                                }
                              />
                            </>
                          )}
                          inputFormat="dd.MM.yyyy"
                        />
                      </LocalizationProvider>
                    </>
                  );
                }}
              />
            </Grid>
            <Grid display={"flex"} alignItems={"center"} item xs={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={user.access === "true" ? true : false}
                    {...register("access")}
                    onChange={(evt) => handleCheckboxChange(evt)}
                  />
                }
                labelPlacement="start"
                label="Access"
              />
            </Grid>
          </Grid>
          <Button
            disabled={isLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {setting === "edit" ? "Edit" : "Create"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default UserForm;
