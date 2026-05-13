import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { postBookingForm } from "../api/bookingform";
import Swal from "sweetalert2";
import 'sweetalert2/themes/bulma.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
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

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
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
      const response = await postBookingForm({
        api_key: process.env.REACT_APP_API_KEY,
        name: formData.name,
        email: formData.email,
        phone: digitsOnly,
        address: formData.address,
        role: formData.role,
      });


      if (response.data.code === 1) {
        Swal.fire({
          theme: 'bulma',
          icon: "success",
          title: "Booking Confirmed!",
          text: response.data.msg || "Your booking has been submitted successfully.",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "my-swal-btn"
          }
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          role: "",
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
      <div className="name-email">
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="fullName" className="mb-2">Full Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="py-4 mb-4"
              value={formData.name}
              onChange={handleChange}
              required
            />          </div>
          <div className="col-lg-6">
            <label htmlFor="email" className="mb-2">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="py-4 mb-4"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="phone-address">
        <div className="row justify-content-around">
          <div className="col-lg-6 col-md-6">
            <label htmlFor="phone" className="mb-2">Phone No:</label>
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
          </div>
          <div className="col-lg-6 col-md-6">
            <label htmlFor="address" className="mb-2">Address:</label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="event-date-textarea">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <label htmlFor="event" className="mb-2">Role:</label>
            <select
              id="event"
              name="role"
              className="py-4 mb-4"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">--Please select your role--</option>
              <option value="Visitor">Visitor</option>
              <option value="Exhibitor">Exhibitor</option>
              <option value="Trader">Trader</option>
            </select>


          </div>


        </div>
      </div>

      <button
        className="btn d-block mx-auto"
        type="submit"
        disabled={loading}
      >
        {loading ? "Booking..." : "Book Now"}
      </button>

    </form>
  );
};

export default BookingForm;
