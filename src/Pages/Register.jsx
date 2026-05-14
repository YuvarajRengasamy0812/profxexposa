import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import API from "../api/api";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Eye, EyeOff, Globe, Mail, PhoneCall, Pin } from "lucide-react";

const Register = () => {
  const countryOptions = countryList().getData();
  const handlePhoneChange = (value, country) => {
    setPhone(value);

    if (country?.name) {
      const matchedCountry = countryOptions.find(
        (c) => c.label === country.name
      );

      if (matchedCountry) {
        setNationality(matchedCountry);
      }
    }
  };


  useEffect(() => {
    const defaultCountry = countryOptions.find(
      (c) => c.value === "AE"
    );
    if (defaultCountry && !nationality) {
      setNationality(defaultCountry);
    }
  }, []);




  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [nationality, setNationality] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialReq, setSpecialReq] = useState("");
  const [sponsorPackage, setSponsorPackage] = useState("");
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // ✅ Password match check
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password and Confirm Password do not match",
      });
    }
    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length < 10) {
      setLoading(false);
      return Swal.fire({
        icon: "error",
        title: "Invalid Phone",
        text: "Please enter a valid phone number",
      });
    }


    setLoading(true);

    try {
      const res = await API.post("/register", {
          api_key: process.env.REACT_APP_API_KEY,
          full_name: fullName,
          email: email,
          company_name: companyName,
          phone: digitsOnly,
          user_type: userType,
          nationality: nationality?.label || "",
          password: password,
          password_confirmation: confirmPassword,
          special_requirements: specialReq,
          sponsor_package: sponsorPackage,
          products_services: products
        });

      if (res.data.code === "1" || res.data.code === 1) {
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "sign_up", { method: "register_form" });
          window.gtag("event", "conversion", { send_to: "AW-16663879548/vKA5CIeCoMgZEPy--ok-" });
        }
        // ✅ Success SweetAlert
        await Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You can now login with your credentials",
          showConfirmButton: false,
          timer: 2000
        });

        // ✅ Redirect to Login page
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res.data.msg || "Something went wrong"
        });
      }

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.msg || "Something went wrong. Try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#F7F7F7",
      border: "none",
      borderRadius: "25px",
      minHeight: "50px",
      boxShadow: "none",
      paddingLeft: "30px",
      fontSize: "15px",
      fontWeight: "400",
      color: "#707070",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0",
      padding: "0",
      color: "#707070",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#707070",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#707070",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      paddingRight: "15px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#707070",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "15px",
      fontSize: "14px",
    }),
  };


  return (
    <>
      <PageHelmet pageTitle="Register" />
      <Breadcrumb title="Register" />
      <div className="container-fluid min-vh-100 py-6 d-flex align-items-center bg-lightgrey">
        <div className="container">
          <div className="row g-4 align-items-stretch">

            {/* LEFT SIDE – CONTACT INFO */}
            <div className="col-12 col-lg-5">
              <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column gap-3">
                <h5 className="pink mb-2">Contact Info:</h5>
                <div className="mb-1 fw-semibold">
                  <p className="mb-1 d-flex align-items-center gap-1"><Pin /> EVENT VENUE: EXHIBITION HALL 5 CTICC 2</p>
                  <p className="mb-0 d-flex align-items-center gap-1"><Pin /> ADDRESS: Cape Town, South Africa</p>
                </div>
                <Link className="text-grey d-flex align-items-center gap-1" to="https://profxexpo.com/africa" target="_blank" rel="noreferrer"><Globe /> profxexpo.com/africa</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="tel:+971588845033"><PhoneCall /> +971 58 884 5033</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="mailto:info@profxmedia.com"><Mail /> info@profxmedia.com</Link>
                <div className="ratio ratio-16x9 rounded overflow-hidden mt-2">
                  <iframe
                    src="https://maps.google.com/maps?q=Cape%20Town,%20South%20Africa&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CTICC 2 Map"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – REGISTER FORM */}
            <div className="col-12 col-lg-7">
              <div className="h-100 bg-white rounded shadow p-4">
                <h4 className="pink mb-4 text-center">Register for PROFX EXPO AFRICA 2026</h4>

                <form onSubmit={handleRegister} className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>



                  <div className="col-md-6">
                    <div className="phone-no mb-3">
                      <PhoneInput
                        country={"ae"}
                        value={phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                          name: "phone",
                          required: true,
                          placeholder: "Phone No.",
                          style: {
                            fontSize: "15px",
                            fontWeight: "400",
                            backgroundColor: "#F7F7F7",
                            border: "none",
                            borderRadius: "25px",
                            padding: "3px 42px",
                            color: "#707070",
                            width: "100%",
                            boxShadow: "none",
                            height: "50px",
                          },
                        }}
                        containerStyle={{ width: "100%" }}
                        inputStyle={{ width: "100%", height: "50px" }}
                        buttonStyle={{
                          border: "none",
                          backgroundColor: "transparent",
                          borderRadius: "25px 0 0 25px",
                        }}
                        dropdownStyle={{ fontSize: "15px" }}
                        specialLabel=""
                      />

                    </div>
                    {/* <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /> */}
                  </div>



                  <div className="col-md-6">
                    <Select
                      options={countryOptions}
                      value={nationality}
                      onChange={setNationality}
                      placeholder="Nationality"
                      isSearchable
                      styles={customSelectStyles}
                      classNamePrefix="react-select"
                      required
                    />

                    {/* <input type="text" className="form-control" placeholder="Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} required /> */}
                  </div>

                  <div className="col-md-6 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>

                  <div className="col-md-6 position-relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                  </div>

                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Enter The Position" value={specialReq} onChange={(e) => setSpecialReq(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
                      <option value="">User Type</option>
                      <option value="trader">Trader</option>
                      <option value="visitor">Visitor</option>
                      <option value="investor">Investor</option>
                      <option value="ib">IB</option>
                      <option value="liquidity_provider">Liquidity Provider</option>
                      <option value="influencer">Influencer</option>
                      <option value="media_companies">Media Companies</option>
                      <option value="technology_provider">Technology Provider</option>
                      <option value="payment_solution">Payment Solution</option>
                      <option value="fund_manager">Fund Manager & Institutional Traders</option>
                    </select>

                  </div>
                  <div className="col-md-6">
                    <select value={sponsorPackage} onChange={(e) => setSponsorPackage(e.target.value)}>
                      <option value="">Refferal Source</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Linkdin">Linkdin</option>
                      <option value="Instgram">Instgram</option>
                      <option value="GoogleSearch">Google Search</option>
                      <option value="News">News</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* <div className="col-12">
                    <textarea rows="3" placeholder="Products / Services to Showcase" value={products} onChange={(e) => setProducts(e.target.value)} />
                  </div> */}

                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <Link to="/terms" className="pink">Terms & Conditions</Link>
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn bg-pink text-white w-100" disabled={loading}>
                      {loading ? "Registering..." : "Register"}
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small className="text-grey">
                      Already have an account? <Link to="/Login" className="pink">Login</Link>
                    </small>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
