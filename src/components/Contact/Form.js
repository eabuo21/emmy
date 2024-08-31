import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  setNestedObjectValues,
} from "formik";
import * as Yup from "yup";
import Button from "@/shared/Buttons";
import emailjs from "@emailjs/browser";
import {
  showSuccessNotification,
  showErrorNotification,
} from "../Notification/Alert";

export default function ContactForm() {
  // Initial values for the form fields
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const resetForm =()=> {
    setNestedObjectValues(initialValues); 
  };

  // Get environment variables
  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const api_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Function to handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(service_id, template_id, templateParams, api_key)
      .then((result) => {
        console.log(result.text);
        showSuccessNotification("Email sent successfully");
        setSubmitting(false);
        resetForm();
        
      })
      .catch((error) => {
        console.log(error.text);
        showErrorNotification("Failed to send email");
        setSubmitting(false);
      });
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter your email"),
    message: Yup.string().required("Please enter a message"),
  });

  return (
    <div className="m w-full max-w-md mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              {/* Name Field */}
              <div className="flex-1">
                <Field
                  type="text"
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
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-800"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-warning text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <Button text="Submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
