import React from "react";
import { useFormik } from "formik";
import * as YUP from "yup";

export const FormikDemo2 = () => {
  const validaionSchema = YUP.object({
    name: YUP.string().required("Name is required"),
    email: YUP.string().email("Invalid Email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: validaionSchema,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.name ? <div>{formik.errors.name}</div> : null
          }
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {
            formik.errors.email ? <div>{formik.errors.email}</div> : null
          }
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
