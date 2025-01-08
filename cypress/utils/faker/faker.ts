import { faker } from "@faker-js/faker";

export function register() {
  let lname = faker.person.firstName();
  let fname = faker.person.lastName();

  let data = {
    firstname: {
      value: fname,
      type: "input",
    },
    lastname: {
      value: lname,
      type: "input",
    },
    username: {
      value: fname.toLowerCase() + lname.toLowerCase(),
      type: "input",
    },
    password: {
      value: "Admin@123",
      type: "input",
    },
    confirmPassword: {
      value: "Admin@123",
      type: "input",
    },
    gender: {
      value: "Male",
      type: "radio",
    },
  };

  return data;
}
