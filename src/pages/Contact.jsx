import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import "../styles/contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (!formData.user_name.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_name: "Name is required",
      }));
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.user_email.trim() || !emailRegex.test(formData.user_email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user_email: "Invalid email address",
      }));
      return;
    }

    // Validate message
    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
      return;
    }

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });

    setErrors({
      user_name: "",
      user_email: "",
      message: "",
    });

    emailjs.sendForm(
      "service_f3puksp",
      "template_0umzjfr",
      form.current,
      "pHU4bJHUCVCyfeZS7"
    );
    toast.success("Your mail sent successfully");
  };

  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <div>
        <Container className="py-5">
          <Row>
            <Col lg="12">
              <h2 className="fs-4 text-center fw-bold">Leave Your Message!</h2>
              <form
                className="form my-4 p-4 rounded-3 col-sm-12 col-md-6 mx-auto"
                onSubmit={handleSubmit}
                ref={form}
              >
                <FormGroup className="mb-3" controlId="formBasicName">
                  <Input
                    type="text"
                    placeholder="Enter Name"
                    name="user_name"
                    value={formData.user_name} // Update references to state key
                    onChange={handleChange}
                  />
                  {errors.user_name && (
                    <p className="error-text">{errors.user_name}</p>
                  )}
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <Input
                    type="email"
                    placeholder="Enter email"
                    name="user_email"
                    value={formData.user_email} // Update references to state key
                    onChange={handleChange}
                  />
                  {errors.user_email && (
                    <p className="error-text">{errors.user_email}</p>
                  )}
                </FormGroup>

                <FormGroup className="mb-3" controlId="formBasicMessage">
                  <Input
                    type="textarea"
                    placeholder="Type your message.."
                    style={{ height: "150px" }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="error-text">{errors.message}</p>
                  )}
                </FormGroup>
                <div className="btn-form d-flex justify-content-center">
                  <Button
                    className="btn-light mt-5 mx-auto fw-bolder"
                    type="submit"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  );
};

export default Contact;
