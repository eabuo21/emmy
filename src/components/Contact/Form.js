import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/shared/Buttons";

export default function ContactForm() {
  // Initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    message: Yup.string().required("Please enter your message"),
  });

  // Function to handle form submission
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form data", values);
    // Simulate an API call
    setTimeout(() => {
      alert("Form submitted successfully");
      setSubmitting(false);
      resetForm(); // Reset the form after successful submission
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-8   ">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              {/* Name Field */}
              <div className="flex-1">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full h-12 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-800"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-warning text-[12px] mt-1"
                />
              </div>

              {/* Email Field */}
              <div className="flex-1 mt-4 sm:mt-0">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full h-12 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-800"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-warning text-sm mt-1"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-800"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-warning text-sm mt-1 "
              />
            </div>

            {/* Submit Button */}
            <Button
              text="Submit"
              type="submit"
              disabled={isSubmitting}
              className=""
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
