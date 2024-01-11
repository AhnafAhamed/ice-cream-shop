import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Modal,
  SimpleGrid,
  Stack,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

export function Auth() {
  const navigate = useNavigate();

  const [opened, { open, close }] = useDisclosure(false);

  const [registrationStatus, setRegistrationStatus] = useState<string>("init");

  const loginForm = useForm({
    initialValues: {
      receptionistId: "",
      password: "",
    },
  });

  const registerForm = useForm({
    initialValues: {
      email: "",
      phone: "",
      receptionistId: 0,
      password: "",
      name: "",
      age: "",
      address: "",
      nic: "",
    },
    validateInputOnBlur: true,
    validate: {
      name: (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      age: (value) =>
        parseInt(value) < 18 ? "You must be at least 18 to register" : null,
      phone: (value) =>
        value.length < 10 ? "Phone number must have at least 10 digits" : null,
      nic: (value) =>
        value.length < 10 ? "NIC must have at least 10 digits" : null,
      password: (value) =>
        value.length < 6 ? "Password must have at least 6 characters" : null,
      address: (value) => (value.length < 1 ? "Address cannot be empty" : null),
    },
  });

  // This function handles the login process when the form is submitted.
  // It takes a FormEvent object as a parameter, which represents the submit event.
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginForm.validate();
    if (!loginForm.isValid()) return;

    //send receptionist to parent component

    navigate("/");
    console.log("Submitted");
  };

  const handleRegistration = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerForm.validate();
    if (!registerForm.isValid()) return;

    setRegistrationStatus("success");
    registerForm.reset();
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (!opened) return;
    setRegistrationStatus("init");
  }, [opened]);

  return (
    <>
      <Container size={420} my={40}>
        <Title ta="center">Tooth Care Appointment System</Title>

        <Text size="md" ta="center" mt={5}>
          Login for Receptionist
        </Text>

        <Text c="dimmed" size="md" ta="center" mt={5}>
          <u>
            <b>Demo - </b>Receptionist ID: - Password: admin
          </u>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={handleLogin}>
            <TextInput
              label="Receptionist ID"
              placeholder="Enter ID"
              type="number"
              {...loginForm.getInputProps("receptionistId")}
              required
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              type="password"
              {...loginForm.getInputProps("password")}
              required
            />
            <Button fullWidth mt="xl" type="submit">
              Sign in
            </Button>
            <Button variant="outline" fullWidth mt="sm" onClick={open}>
              Register - Receptionist
            </Button>
          </form>
        </Paper>
      </Container>
      <Modal
        opened={opened}
        onClose={close}
        title="Register | Receptionist"
        centered
        size="lg"
      >
        {" "}
        {registrationStatus === "init" ? (
          <form onSubmit={handleRegistration}>
            <SimpleGrid cols={2} spacing={10}>
              <TextInput
                label="Receptionist ID"
                type="number"
                placeholder="Enter ID"
                disabled
                {...registerForm.getInputProps("receptionistId")}
                required
              />
              <TextInput
                label="Password"
                placeholder="Enter Password"
                {...registerForm.getInputProps("password")}
                required
              />
              <TextInput
                label="Name"
                placeholder="Enter Name"
                {...registerForm.getInputProps("name")}
                required
              />
              <TextInput
                label="Age"
                placeholder="Enter Age"
                type="number"
                {...registerForm.getInputProps("age")}
                required
              />
              <TextInput
                label="Address"
                placeholder="Enter Address"
                {...registerForm.getInputProps("address")}
                required
              />
              <TextInput
                label="Phone"
                placeholder="Enter Phone Number"
                type="number"
                {...registerForm.getInputProps("phone")}
                required
              />
              <TextInput
                label="NIC"
                placeholder="Enter NIC"
                {...registerForm.getInputProps("nic")}
                required
              />
            </SimpleGrid>
            <Button
              fullWidth
              mt="xl"
              type="submit"
              disabled={!registerForm.isValid()}
            >
              Register
            </Button>
          </form>
        ) : (
          <Stack gap={16}>
            <Text size="lg" ta="center">
              Registration Successful!
            </Text>
            <Text size="md" ta="center">
              Your registration ID: <b></b>
            </Text>
          </Stack>
        )}
      </Modal>
    </>
  );
}
