import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, X } from "lucide-react";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { buildAssetUrl } from "../utils/assetUrl";


const BoothModal = ({ booth, onClose, onReserve }) => {
    const message = "Hello, I would like to book a booth.";
    const [step, setStep] = useState(1);

    /* ================= STEP 1 ================= */
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
    });

    /* ================= AMOUNT ================= */
    const boothPrices = {
        exclusive: 15000,
        official: 20000,
        diamond: 10000,
        gold: 6500,
        silver: 4000,
        standard: 2500,
    };

    const sponsorshipPrices = {
        cocktail: 5000,
        cafe: 5000,
        networklounge: 5000,
        speakerhall: 10000,
        entrancearch: 5000,
        registrationarea: 5000,
        ledwalladvertisement: 5000,
        rollupbanner: 250,
        flagpole: 500,
        attendeebag: 3000,
    };


    const isSponsorship = booth.boothType in sponsorshipPrices;

    const amount = isSponsorship
        ? sponsorshipPrices[booth.boothType]
        : boothPrices[booth.boothType];

    const total = amount ?? 0;


    const handlePhoneChange = (value) => {
        setForm({ ...form, phone: value });
    };




    /* ================= STEP 2 ================= */
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [paymentImage, setPaymentImage] = useState(null);

    /* ================= EFFECTS ================= */
    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    /* ================= VALIDATION ================= */
    const validateStep1 = () => {
        if (!form.name || !form.email || !form.company || !form.phone) {
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Please fill all required fields",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                customClass: { container: "swal2-toast-container-high-z" },
            });
            return false;
        }
        return true;
    };
           const handleSubmit = async () => {
    if (!paymentMethod || !paymentImage) {
        Swal.fire({
            toast: true,
            icon: "warning",
            title: "Payment method and proof are required",
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
        });
        return;
    }

    try {
        const formData = new FormData();

        // ===== BASIC DETAILS =====
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("company", form.company || "");

        // ===== OPTIONAL =====
        formData.append("referal_code", form.referal || "");

        // ===== BOOTH DETAILS =====
        formData.append("boothno", booth.boothNo || "");
        formData.append("boothtitle", booth.title || "");
        formData.append("boothsize", booth.size || "");
        formData.append("boothammount", total);

        // ===== PAYMENT =====
        formData.append("paymenttype", paymentMethod);
        formData.append(
            "networktype",
            paymentMethod === "usdt" ? "TRC20/ERC20" : ""
        );
        formData.append("file", paymentImage);

        formData.append("api_key", process.env.REACT_APP_API_KEY);

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/floorplansubmit`,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            }
        );

        const result = await response.json();

        if (result.code === 1) {
            Swal.fire({
                icon: "success",
                title: "Booth Reserved Successfully!",
                text: "Payment submitted. We will verify shortly.",
            }).then(() => {
                // Reload the page after user closes the alert
                window.location.reload();
            });
            onClose();
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: result.msg || "Something went wrong",
            });
        }
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Please try again later",
        });
    }
};



    return createPortal(
        <div className="ticket-custom-modal-overlay" onClick={onClose}>
            <div className="ticket-custom-modal" onClick={(e) => e.stopPropagation()}>
                {/* HEADER */}
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h4 className="m-0">{booth.title} Reservation</h4>
                    <button className="modal-close" onClick={onClose}>
                        <X />
                    </button>
                </div>

                {/* STEPS */}
                <div className="steps d-flex justify-content-center my-4">
                    {[1, 2].map((s) => (
                        <div key={s} className={`step ${step >= s ? "active" : ""}`}>
                            Step {s}
                        </div>
                    ))}
                </div>

                {/* ================= STEP 1 ================= */}
                {step === 1 && (
                    <div className="step-content">
                        <div className="row g-4">
                            {/* LEFT – FORM */}
                            <div className="col-md-7">
                                <div className="row g-3">
                                    {["name", "email", "company", "phone", "referal"].map((field, i) => (
                                        <div className="col-md-12" key={i}>
                                            {field === "phone" ? (
                                                <PhoneInput
                                                    country={"ae"}
                                                    value={form.phone}
                                                    onChange={handlePhoneChange}
                                                    inputProps={{
                                                        name: "phone",
                                                        required: true,
                                                        placeholder: "Phone Number",
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
                                                    inputStyle={{
                                                        width: "100%",
                                                        height: "45px",
                                                        fontSize: "14px",
                                                    }}
                                                    buttonStyle={{
                                                        border: "none",
                                                        background: "transparent",
                                                    }}
                                                    specialLabel=""
                                                />
                                            ) : (
                                                <input
                                                    type={field === "email" ? "email" : "text"}
                                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                                    value={form[field]}
                                                    onChange={(e) =>
                                                        setForm({ ...form, [field]: e.target.value })
                                                    }
                                                    required
                                                />
                                            )}
                                        </div>
                                    ))}

                                </div>
                            </div>

                            {/* RIGHT – SUMMARY */}
                            <div className="col-md-5">
                                <div className="summary-box bg-lightgrey p-4 rounded sticky-top">
                                    <h6 className="black">
                                        {isSponsorship ? "Sponsorship Summary" : "Booth Summary"}
                                    </h6>

                                    {!isSponsorship && (
                                        <p>
                                            Booth No: <b>{booth.boothNo}</b>
                                        </p>
                                    )}

                                    <p>
                                        {isSponsorship ? "Sponsorship Title" : "Booth Title"}:{" "}
                                        <b>{booth.title}</b>
                                    </p>

                                    {/* Show size ONLY if exists */}
                                    {booth.size && (
                                        <p>
                                            {isSponsorship ? "Sponsorship Size" : "Booth Size"}:{" "}
                                            <b>{booth.size}</b>
                                        </p>
                                    )}

                                    <p>
                                        {isSponsorship ? "Sponsorship Amount" : "Booth Amount"}: ${amount}
                                    </p>

                                    <hr />

                                    <h5>Total Payable: ${total}</h5>

                                </div>
                                <div className="summary-box bg-lightgrey p-4 rounded mt-5">
                                    <h6 className="black">Contact us for Booking support</h6>
                                    <p className="mt-3">
                                        Whatsapp: <b><a
                                            className="black"
                                            href={`https://wa.me/971588845033?text=${encodeURIComponent(message)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            +971 58 884 5033
                                        </a></b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-between mt-4">
                            <button className="btn btn-outline-secondary" onClick={onClose}>
                                Close
                            </button>
                            <button
                                className="btn bg-pink text-white"
                                onClick={() => validateStep1() && setStep(2)}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* ================= STEP 2 ================= */}
                {step === 2 && (
                    <div className="step-content">
                        <h5 className="mb-4">Choose Payment Method</h5>

                        {/* PAYMENT METHODS */}
                        <div className="payment-grid">
                            <div
                                className={`payment-card ${paymentMethod === "now" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("now")}
                            >
                                <img src={buildAssetUrl('/assets/images/payments/nowpayments.png')} alt="NowPayments" />
                            </div>

                            <div
                                className={`payment-card ${paymentMethod === "stripe" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("stripe")}
                            >
                                <img src={buildAssetUrl('/assets/images/payments/stripe.png')} alt="Stripe" />
                            </div>

                            <div
                                className={`payment-card ${paymentMethod === "upi" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("upi")}
                            >
                                <img src={buildAssetUrl('/assets/images/payments/upi.png')} alt="UPI" />
                            </div>

                            <div
                                className={`payment-card ${paymentMethod === "usdt" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("usdt")}
                            >
                                <img src={buildAssetUrl('/assets/images/payments/usdt.png')} alt="USDT" />
                            </div>

                            <div
                                className={`payment-card ${paymentMethod === "bank" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("bank")}
                            >
                                <img src={buildAssetUrl('/assets/images/payments/bank-deposit.png')} alt="Bank Deposit" />
                            </div>
                        </div>

                        {/* ================= NOW PAYMENTS ================= */}
                        {paymentMethod === "now" && (
                            <div className="payment-box mb-3">
                                <h6>NowPayments</h6>
                                <p>Amount: ${total.toFixed(2)}</p>
                                <button className="btn bg-pink text-white">Pay Now</button>
                            </div>
                        )}

                        {/* ================= STRIPE ================= */}
                        {paymentMethod === "stripe" && (
                            <div className="payment-box mb-3">
                                <h6>Stripe</h6>
                                <p>Amount: ${total.toFixed(2)}</p>
                                <button className="btn bg-blue text-white">Pay Now</button>
                            </div>
                        )}

                        {/* ================= UPI ================= */}
                        {paymentMethod === "upi" && (
                            <div className="payment-box mb-3 d-flex flex-column gap-2">
                                <h6>UPI Payment</h6>

                                <div className="row">
                                    <div className="col-lg-6 col-12 d-flex gap-2 flex-column justify-content-center align-items-center">
                                        <span>MS MS SHREE SHYAM BUILDERS</span>
                                        <img
                                            className="img-fluid"
                                            src={buildAssetUrl('/assets/images/payments/upi-qr.png')}
                                            alt="UPI QR"
                                        />
                                        <span className="text-center">
                                            UPI ID:<br />profxevent@indianbank
                                        </span>
                                    </div>

                                    <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center align-items-start">
                                        <h6>Upload Payment Proof for Verification</h6>
                                        <label>Amount to be Paid</label>
                                        <input type="text" value={`$${total}`} disabled />
                                        <input type="file" onChange={(e) => setPaymentImage(e.target.files[0])} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ================= USDT ================= */}
                        {paymentMethod === "usdt" && (
                            <div className="payment-box mb-3 d-flex flex-column gap-3">
                                <h6>USDT Payment</h6>

                                <div className="row">
                                    <div className="col-lg-6 col-12 d-flex flex-column flex-lg-row gap-4 justify-content-center">
                                        <div className="d-flex flex-column align-items-center">
                                            <span>Network</span>
                                            <h6>TRON (TRC20)</h6>
                                            <img
                                                className="img-fluid mb-2"
                                                src={buildAssetUrl('/assets/images/payments/usdt-qr-1.png')}
                                                alt="TRON QR"
                                            />
                                            <span className="text-break text-center">
                                                TGGbNk9YvAEdguozs3EdapnEAuc1RYghio
                                            </span>
                                        </div>

                                        <div className="d-flex flex-column align-items-center">
                                            <span>Network</span>
                                            <h6>ETHEREUM (ERC20)</h6>
                                            <img
                                                className="img-fluid mb-2"
                                                src={buildAssetUrl('/assets/images/payments/usdt-qr-2.png')}
                                                alt="ETH QR"
                                            />
                                            <span className="text-break text-center">
                                                0x07b0a37f957b82633ce1aadb8e6752c88f115094
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12 d-flex flex-column gap-3 justify-content-center">
                                        <h6>Upload Payment Proof for Verification</h6>
                                        <select>
                                            <option>Select Network</option>
                                            <option>TRON (TRC20)</option>
                                            <option>ETHEREUM (ERC20)</option>
                                        </select>

                                        <label>Amount to be Paid</label>
                                        <input type="text" value={`$${total}`} disabled />
                                        <input type="file" onChange={(e) => setPaymentImage(e.target.files[0])} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ================= BANK DEPOSIT ================= */}
                        {paymentMethod === "bank" && (
                            <div className="payment-box mb-3 bank-deposit-box p-4 bg-white rounded">
                                <h6 className="mb-4">Bank Deposit</h6>

                                <div className="bank-grid gap-4">
                                    <div className="bank-details bg-lightgrey p-4 rounded border border-dashed border-pink">
                                        <p><strong>Account Holder:</strong> PROFINSUMMIT</p>
                                        <p><strong>Account Number:</strong> 8123734309</p>
                                        <p><strong>IFS Code:</strong> IDIB000R088</p>
                                        <p><strong>CBS Code:</strong> 02342</p>
                                        <p>
                                            <strong>Bank Address:</strong><br />
                                            RAJNI KHAND F3, WARD NUMBER 1,<br />
                                            RAJNI KHAND, SHARDA NAGAR,<br />
                                            RAEBARELI ROAD, LUCKNOW – 226002
                                        </p>
                                    </div>

                                    <div className="bank-upload d-flex flex-column gap-3">
                                        <h6>Upload Payment Proof for Verification</h6>
                                        <label>Amount to be Paid</label>
                                        <input type="text" value={`$${total}`} disabled />
                                        <input type="file" onChange={(e) => setPaymentImage(e.target.files[0])} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* FOOTER */}
                        <div className="modal-footer d-flex justify-content-between mt-4">
                            <button className="btn border-pink" onClick={() => setStep(1)}>
                                Back
                            </button>
                            <button className="btn bg-pink text-white" onClick={handleSubmit}>
                                Submit Deposit
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>,
        document.getElementById("modal-root")
    );
};





export default BoothModal;
