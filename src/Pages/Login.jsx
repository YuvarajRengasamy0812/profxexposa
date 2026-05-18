import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";
import API from "../api/api";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { Eye, EyeOff, Globe, Mail, PhoneCall, Pin } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/login", {
          api_key: process.env.REACT_APP_API_KEY,
          email: email,
          password: password
        });

      // ✅ Check code === 1
      if (res.data.code === "1" || res.data.code === 1) {
        // Save user data in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.data));

        // ✅ SweetAlert Success
        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome ${res.data.data.full_name}!`,
          showConfirmButton: false,
          timer: 2000
        });



        navigate("/");

        // 🔥 FORCE REFRESH (not recommended usually)
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: res.data.msg || "Invalid credentials"
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

  return (
    <>
      <PageHelmet pageTitle="Login" />
      <Breadcrumb title="Login" />

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
                <Link className="text-grey d-flex align-items-center gap-1" to="https://profxexpo.com/africa" target="_blank"><Globe /> profxexpo.com/africa</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="tel:+971588845033"><PhoneCall /> +971 58 884 5033</Link>
                <Link className="text-grey d-flex align-items-center gap-1" to="mailto:info@profxmedia.com"><Mail /> info@profxmedia.com</Link>
                <div className="ratio ratio-16x9 rounded overflow-hidden mt-2">
                  <iframe
                    src="https://maps.google.com/maps?q=Cape%20Town,%20South%20Africa&output=embed"
                    loading="lazy"
                    title="CTICC 2 Map"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – LOGIN FORM */}
            <div className="col-12 col-lg-7">
              <div className="h-100 bg-white rounded shadow p-4 d-flex flex-column justify-content-center">
                <h4 className="pink mb-4 text-center">Login to PROFX EXPO AFRICA 2026</h4>

                <form onSubmit={handleLogin} className="row g-3">

                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-12 position-relative">
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

                  <div className="col-12 text-end">
                    <Link to="/ForgotPassword" className="pink small">Forgot Password?</Link>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn bg-pink text-white w-100" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </div>

                  <div className="col-12 text-center">
                    <small className="text-grey">
                      Don’t have an account?{" "}
                      <Link to="/Register" className="pink">Register</Link>
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

export default Login;
