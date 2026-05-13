import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { postContactForm } from "../api/contactform";
import Swal from "sweetalert2";
import 'sweetalert2/themes/bulma.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Optional validation: phone number must be at least 10 digits
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      Swal.fire({
        theme: 'bulma',
        icon: "error",
        title: "Invalid Phone",
        text: "Please enter a valid phone number.",
        customClass: {
          confirmButton: "my-swal-btn"
        }
      });
      setLoading(false);
      return;
    }

    try {
      const response = await postContactForm({
        api_key: process.env.REACT_APP_API_KEY,
        contact_name: formData.name,
        contact_email: formData.email,
        contact_phone: digitsOnly,
        contact_subject: formData.subject,
        contact_message: formData.message,
      });

      if (response.data.code === 1) {
        Swal.fire({
          theme: 'bulma',
          icon: "success",
          title: "Message Sent!",
          text: response.data.msg || "Your message has been sent successfully.",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "my-swal-btn"
          }
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: response.data.msg || "Something went wrong.",
        });
      }

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-3"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-lg-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-3"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="phone-no mb-3">
        <PhoneInput
          country={'ae'} // default country
          value={formData.phone}
          onChange={handlePhoneChange}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: false,
            placeholder: 'Phone No.',
            style: {
              fontSize: '15px',
              fontWeight: '400',
              backgroundColor: '#F7F7F7',
              border: 'none',
              borderRadius: '25px',
              padding: '3px 42px',
              color: '#707070',
              width: '100%',
              boxShadow: 'none',
              height: '50px',
            }
          }}
          containerStyle={{ width: '100%' }}
          inputStyle={{
            width: '100%',
            height: '50px', // optional, adjust height
          }}
          buttonStyle={{
            border: 'none', // remove border around flag button
            backgroundColor: 'transparent',
            borderRadius: '25px 0 0 25px'
          }}
          dropdownStyle={{
            fontSize: '15px'
          }}
          specialLabel="" // remove default label
        />
      </div>


      <div className="subject mb-3">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>

      <div className="message mb-3">
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}{" "}
        <i className="fa fa-long-arrow-right ms-3"></i>
      </button>
    </form>
  );
};

export default ContactForm;
