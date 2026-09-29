import { useState } from "react";
import "./App.css";

const onboardingData = [
  {
    icon: "📍",
    title: "Find Charging Stations",
    description:
      "Discover nearby EV charging stations and check charger availability easily.",
  },
  {
    icon: "🗺️",
    title: "Plan Your Journey",
    description:
      "Plan your long-distance EV trips with convenient charging stops along the way.",
  },
  {
    icon: "⚡",
    title: "Charge With Ease",
    description:
      "Book a charger, monitor your charging session and manage your payment in one place.",
  },
];

function App() {
  const [page, setPage] = useState("onboarding");
  const [currentScreen, setCurrentScreen] = useState(0);

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // =========================
  // BOOKING STATES
  // =========================

  const [selectedCharger, setSelectedCharger] =
    useState("DC Fast Charger");

  const [selectedDate, setSelectedDate] =
    useState("25");

  const [selectedTime, setSelectedTime] =
    useState("10:00 AM");

  // =========================
  // PAYMENT STATE
  // =========================

  const [paymentMethod, setPaymentMethod] =
    useState("UPI");

  // =========================
  // HOME
  // =========================

  if (page === "home") {
    return (
      <div className="app">
        <div className="phone-screen home-screen">

          <div className="home-header">
            <div>
              <p className="welcome-text">
                Good morning 👋
              </p>

              <h1>Find your charge</h1>
            </div>

            <div
              className="profile-icon"
              onClick={() => setPage("profile")}
            >
              👤
            </div>
          </div>

          <div className="battery-card">
            <div>
              <p>Current Battery</p>
              <h2>72%</h2>
              <span>
                Estimated range: 245 km
              </span>
            </div>

            <div className="battery-circle">
              ⚡
            </div>
          </div>

          <div className="search-box">
            🔍

            <input
              type="text"
              placeholder="Search charging stations"
            />
          </div>

          <div className="section-header">
            <h2>Nearby Stations</h2>

            <button>
              View All
            </button>
          </div>

          <div className="station-card">
            <div className="station-icon">
              ⚡
            </div>

            <div className="station-info">
              <h3>Voltline Charging Hub</h3>

              <p>
                1.2 km away • Open 24/7
              </p>

              <div className="station-meta">
                <span>
                  🟢 4 Available
                </span>

                <span>
                  ₹15/kWh
                </span>
              </div>
            </div>
          </div>

          <div className="station-card">
            <div className="station-icon">
              ⚡
            </div>

            <div className="station-info">
              <h3>GreenCharge Station</h3>

              <p>
                2.8 km away • Open 24/7
              </p>

              <div className="station-meta">
                <span>
                  🟢 2 Available
                </span>

                <span>
                  ₹14/kWh
                </span>
              </div>
            </div>
          </div>

          <div className="bottom-nav">

            <button
              className="active-nav"
              onClick={() => setPage("home")}
            >
              🏠
              <span>Home</span>
            </button>

            <button
              onClick={() => setPage("map")}
            >
              🗺️
              <span>Map</span>
            </button>

            <button
              onClick={() => setPage("charging")}
            >
              ⚡
              <span>Charging</span>
            </button>

            <button
              onClick={() => setPage("profile")}
            >
              👤
              <span>Profile</span>
            </button>

          </div>

        </div>
      </div>
    );
  }
  // =========================
  // PROFILE
  // =========================

  if (page === "profile") {
    return (
      <div className="app">
        <div className="phone-screen profile-screen">

          <div className="profile-top">
            <button onClick={() => setPage("home")}>
              ←
            </button>
            <h2>Profile</h2>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">
              {user.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}
            </div>

            <h2>{user.name || "User"}</h2>

            <p>{user.email || "No email available"}</p>
          </div>

          <div className="profile-details">

            <div className="profile-detail">
              <span>👤</span>
              <div>
                <small>Name</small>
                <strong>{user.name || "User"}</strong>
              </div>
            </div>

            <div className="profile-detail">
              <span>📧</span>
              <div>
                <small>Email</small>
                <strong>{user.email || "No email"}</strong>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // =========================
  // MAP
  // =========================

  if (page === "map") {
    return (
      <div className="app">
        <div className="phone-screen map-screen">

          <div className="map-header">

            <button
              className="back-btn"
              onClick={() => setPage("home")}
            >
              ←
            </button>

            <h1>
              Charging Stations
            </h1>

            <button className="filter-btn">
              ⚙️
            </button>

          </div>

          <div className="map-area">

            <div className="map-road road-one"></div>
            <div className="map-road road-two"></div>
            <div className="map-road road-three"></div>

            <div className="map-pin pin-one">
              ⚡
            </div>

            <div className="map-pin pin-two">
              ⚡
            </div>

            <div className="map-pin pin-three">
              ⚡
            </div>

            <div className="user-location">
              ●
            </div>

          </div>

          <div className="station-list">

            <div className="station-list-header">
              <h2>Nearby Stations</h2>
              <span>3 found</span>
            </div>

            <div
              className="map-station-card"
              onClick={() => setPage("station")}
            >

              <div className="station-icon">
                ⚡
              </div>

              <div>
                <h3>
                  Voltline Charging Hub
                </h3>

                <p>
                  1.2 km • 4 chargers available
                </p>

                <span className="available">
                  ● Available
                </span>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

            <div
              className="map-station-card"
              onClick={() => setPage("station")}
            >

              <div className="station-icon">
                ⚡
              </div>

              <div>
                <h3>
                  GreenCharge Station
                </h3>

                <p>
                  2.8 km • 2 chargers available
                </p>

                <span className="available">
                  ● Available
                </span>
              </div>

              <span className="arrow">
                ›
              </span>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // =========================
  // STATION DETAILS
  // =========================

  if (page === "station") {
    return (
      <div className="app">
        <div className="phone-screen station-screen">

          <div className="station-top">

            <button
              className="back-btn"
              onClick={() => setPage("map")}
            >
              ←
            </button>

            <h1>
              Station Details
            </h1>

            <div style={{ width: "42px" }}></div>

          </div>

          <div className="station-hero">

            <div className="large-station-icon">
              ⚡
            </div>

            <h2>
              Voltline Charging Hub
            </h2>

            <p>
              📍 1.2 km away • Open 24/7
            </p>

            <div className="rating">
              ⭐ 4.8
            </div>

          </div>

          <div className="details-card">

            <div className="detail-row">
              <span>
                Available Chargers
              </span>

              <strong>
                4 / 6
              </strong>
            </div>

            <div className="detail-row">
              <span>
                Charging Speed
              </span>

              <strong>
                Fast
              </strong>
            </div>

            <div className="detail-row">
              <span>
                Price
              </span>

              <strong>
                ₹15/kWh
              </strong>
            </div>

            <div className="detail-row">
              <span>
                Opening Hours
              </span>

              <strong>
                24/7
              </strong>
            </div>

          </div>

          <button
            className="primary-btn station-book-btn"
            onClick={() => setPage("booking")}
          >
            Book a Charger
          </button>

          <button className="direction-btn">
            🧭 Get Directions
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // BOOKING
  // =========================

  if (page === "booking") {
    return (
      <div className="app">
        <div className="phone-screen booking-screen">

          {/* TOP BAR */}

          <div className="station-top">

            <button
              className="back-btn"
              onClick={() => setPage("station")}
            >
              ←
            </button>

            <h1>
              Book Charger
            </h1>

            <div style={{ width: "42px" }}></div>

          </div>

          {/* STATION */}

          <div className="booking-station">

            <div className="station-icon">
              ⚡
            </div>

            <div>
              <h3>
                Voltline Charging Hub
              </h3>

              <p>
                1.2 km away • Open 24/7
              </p>
            </div>

          </div>

          {/* CHARGER */}

          <div className="booking-section">

            <h2>
              Select Charger
            </h2>

            <div className="charger-options">

              {/* DC CHARGER */}

              <div
                className={`charger-option ${
                  selectedCharger ===
                  "DC Fast Charger"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCharger(
                    "DC Fast Charger"
                  )
                }
              >

                <div>
                  <strong>
                    DC Fast Charger
                  </strong>

                  <p>
                    60 kW • 4 available
                  </p>
                </div>

                <span>
                  ₹15/kWh
                </span>

              </div>

              {/* AC CHARGER */}

              <div
                className={`charger-option ${
                  selectedCharger ===
                  "AC Charger"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCharger(
                    "AC Charger"
                  )
                }
              >

                <div>
                  <strong>
                    AC Charger
                  </strong>

                  <p>
                    22 kW • 2 available
                  </p>
                </div>

                <span>
                  ₹10/kWh
                </span>

              </div>

            </div>

          </div>

          {/* DATE */}

          <div className="booking-section">

            <h2>
              Select Date
            </h2>

            <div className="date-options">

              {/* TODAY */}

              <button
                className={`date-option ${
                  selectedDate === "25"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDate("25")
                }
              >
                <strong>
                  25
                </strong>

                <span>
                  Today
                </span>

              </button>

              {/* TOMORROW */}

              <button
                className={`date-option ${
                  selectedDate === "26"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDate("26")
                }
              >
                <strong>
                  26
                </strong>

                <span>
                  Tomorrow
                </span>

              </button>

              {/* DAY AFTER */}

              <button
                className={`date-option ${
                  selectedDate === "27"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedDate("27")
                }
              >
                <strong>
                  27
                </strong>

                <span>
                  Sun
                </span>

              </button>

            </div>

          </div>

          {/* TIME */}

          <div className="booking-section">

            <h2>
              Select Time
            </h2>

            <div className="time-options">

              <button
                className={`time-option ${
                  selectedTime ===
                  "10:00 AM"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedTime(
                    "10:00 AM"
                  )
                }
              >
                10:00 AM
              </button>

              <button
                className={`time-option ${
                  selectedTime ===
                  "11:00 AM"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedTime(
                    "11:00 AM"
                  )
                }
              >
                11:00 AM
              </button>

              <button
                className={`time-option ${
                  selectedTime ===
                  "12:00 PM"
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedTime(
                    "12:00 PM"
                  )
                }
              >
                12:00 PM
              </button>

            </div>

          </div>

          {/* SUMMARY */}

          <div className="booking-summary">

            <div>
              <span>
                Charger
              </span>

              <strong>
                {selectedCharger}
              </strong>
            </div>

            <div>
              <span>
                Date
              </span>

              <strong>
                {selectedDate} September 2026
              </strong>
            </div>

            <div>
              <span>
                Time
              </span>

              <strong>
                {selectedTime}
              </strong>
            </div>

            <div>
              <span>
                Estimated Cost
              </span>

              <strong>
                {selectedCharger ===
                "AC Charger"
                  ? "₹300"
                  : "₹450"}
              </strong>
            </div>

            <div>
              <span>
                Charging Duration
              </span>

              <strong>
                30 min
              </strong>
            </div>

          </div>

          {/* CONFIRM */}

          <button
            className="primary-btn"
            onClick={() =>
              setPage("confirmation")
            }
          >
            Confirm Booking
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // CONFIRMATION
  // =========================

  if (page === "confirmation") {
    return (
      <div className="app">
        <div className="phone-screen confirmation-screen">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Booking Confirmed!
          </h1>

          <p>
            Your charging slot has been successfully reserved.
          </p>

          <div className="confirmation-card">

            <div>
              <span>
                Station
              </span>

              <strong>
                Voltline Charging Hub
              </strong>
            </div>

            <div>
              <span>
                Charger
              </span>

              <strong>
                {selectedCharger}
              </strong>
            </div>

            <div>
              <span>
                Date & Time
              </span>

              <strong>
                {selectedDate} September 2026,{" "}
                {selectedTime}
              </strong>
            </div>

            <div>
              <span>
                Estimated Cost
              </span>

              <strong>
                {selectedCharger ===
                "AC Charger"
                  ? "₹300"
                  : "₹450"}
              </strong>
            </div>

          </div>

          <button
            className="primary-btn"
            onClick={() =>
              setPage("charging")
            }
          >
            Start Charging
          </button>

          <button
            className="direction-btn"
            onClick={() =>
              setPage("map")
            }
          >
            🧭 Get Directions
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // CHARGING
  // =========================

  if (page === "charging") {
    return (
      <div className="app">
        <div className="phone-screen charging-screen">

          <div className="charging-header">

            <button
              className="back-btn"
              onClick={() =>
                setPage("home")
              }
            >
              ←
            </button>

            <h1>
              Charging Session
            </h1>

            <div style={{ width: "42px" }}></div>

          </div>

          <div className="charging-station-name">

            <div className="charging-icon">
              ⚡
            </div>

            <h2>
              Voltline Charging Hub
            </h2>

            <p>
              {selectedCharger} •{" "}
              {selectedCharger ===
              "AC Charger"
                ? "22 kW"
                : "60 kW"}
            </p>

          </div>

          <div className="progress-container">

            <div className="progress-circle">

              <div className="progress-inner">
                <strong>
                  72%
                </strong>

                <span>
                  Battery
                </span>
              </div>

            </div>

          </div>

          <div className="charging-status">
            <span className="live-dot"></span>
            Charging in progress
          </div>

          <div className="charging-stats">

            <div className="charging-stat">
              <span>
                Time Remaining
              </span>

              <strong>
                24 min
              </strong>
            </div>

            <div className="charging-stat">
              <span>
                Energy Added
              </span>

              <strong>
                18.5 kWh
              </strong>
            </div>

            <div className="charging-stat">
              <span>
                Current Cost
              </span>

              <strong>
                ₹278
              </strong>
            </div>

            <div className="charging-stat">
              <span>
                Charging Speed
              </span>

              <strong>
                {selectedCharger ===
                "AC Charger"
                  ? "22 kW"
                  : "60 kW"}
              </strong>
            </div>

          </div>

          <button
            className="primary-btn"
            onClick={() =>
              setPage("payment")
            }
          >
            Finish Charging
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // PAYMENT
  // =========================

  if (page === "payment") {
    return (
      <div className="app">
        <div className="phone-screen payment-screen">

          <div className="station-top">

            <button
              className="back-btn"
              onClick={() =>
                setPage("charging")
              }
            >
              ←
            </button>

            <h1>
              Payment
            </h1>

            <div style={{ width: "42px" }}></div>

          </div>

          <div className="payment-summary">

            <p>
              Total Amount
            </p>

            <h2>
              ₹278.00
            </h2>

            <span>
              Voltline Charging Hub
            </span>

          </div>

          <div className="payment-section">

            <h2>
              Choose Payment Method
            </h2>

            {/* UPI */}

            <button
              className={`payment-option ${
                paymentMethod === "UPI"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("UPI")
              }
            >

              <span className="payment-icon">
                📱
              </span>

              <div>
                <strong>
                  UPI
                </strong>

                <p>
                  Pay using UPI
                </p>
              </div>

              <span>
                {paymentMethod === "UPI"
                  ? "✓"
                  : "›"}
              </span>

            </button>

            {/* CARD */}

            <button
              className={`payment-option ${
                paymentMethod === "Card"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("Card")
              }
            >

              <span className="payment-icon">
                💳
              </span>

              <div>
                <strong>
                  Credit / Debit Card
                </strong>

                <p>
                  Pay using your card
                </p>
              </div>

              <span>
                {paymentMethod === "Card"
                  ? "✓"
                  : "›"}
              </span>

            </button>

            {/* WALLET */}

            <button
              className={`payment-option ${
                paymentMethod === "Wallet"
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("Wallet")
              }
            >

              <span className="payment-icon">
                💰
              </span>

              <div>
                <strong>
                  Wallet
                </strong>

                <p>
                  Use your wallet balance
                </p>
              </div>

              <span>
                {paymentMethod === "Wallet"
                  ? "✓"
                  : "›"}
              </span>

            </button>

          </div>

          <div className="bill-details">

            <div>
              <span>
                Energy Used
              </span>

              <strong>
                18.5 kWh
              </strong>
            </div>

            <div>
              <span>
                Charging Cost
              </span>

              <strong>
                ₹277.50
              </strong>
            </div>

            <div>
              <span>
                Taxes & Fees
              </span>

              <strong>
                ₹0.50
              </strong>
            </div>

            <div className="total-row">
              <span>
                Total
              </span>

              <strong>
                ₹278.00
              </strong>
            </div>

          </div>

          <button
            className="primary-btn"
            onClick={() =>
              setPage("paymentSuccess")
            }
          >
            Pay ₹278
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // PAYMENT SUCCESS
  // =========================

  if (page === "paymentSuccess") {
    return (
      <div className="app">
        <div className="phone-screen confirmation-screen">

          <div className="success-icon">
            ✓
          </div>

          <h1>
            Payment Successful!
          </h1>

          <p>
            Your charging session has been completed successfully.
          </p>

          <div className="confirmation-card">

            <div>
              <span>
                Amount Paid
              </span>

              <strong>
                ₹278.00
              </strong>
            </div>

            <div>
              <span>
                Payment Method
              </span>

              <strong>
                {paymentMethod}
              </strong>
            </div>

            <div>
              <span>
                Station
              </span>

              <strong>
                Voltline Charging Hub
              </strong>
            </div>

            <div>
              <span>
                Charger
              </span>

              <strong>
                {selectedCharger}
              </strong>
            </div>

            <div>
              <span>
                Energy Used
              </span>

              <strong>
                18.5 kWh
              </strong>
            </div>

          </div>

          <button
            className="primary-btn"
            onClick={() =>
              setPage("home")
            }
          >
            Back to Home
          </button>

          <button className="direction-btn">
            Download Receipt
          </button>

        </div>
      </div>
    );
  }

  // =========================
  // LOGIN
  // =========================

  if (page === "login") {
    return (
      <div className="app">
        <div className="phone-screen login-screen">

          <div className="login-header">

            <div className="small-logo">
              ⚡
            </div>

            <h1>
              Welcome to COMPASS
            </h1>

            <p>
              Find. Charge. Go.
            </p>

          </div>

          <div className="login-form">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              className="primary-btn"
              onClick={() => {

                if (!email || !password) {
                  alert(
                    "Please enter email and password"
                  );
                  return;
                }

                setUser({
                  name: name || "Anshuman Namdev",
                  email,
                });

                setPage("home");
              }}
            >
              Login
            </button>

            <button className="google-btn">
              Continue with Google
            </button>

            <p className="signup-text">
              Don't have an account?{" "}

              <button
                onClick={() =>
                  setPage("signup")
                }
              >
                Sign Up
              </button>
            </p>

          </div>

        </div>
      </div>
    );
  }

  // =========================
  // SIGN UP
  // =========================

  if (page === "signup") {
    return (
      <div className="app">
        <div className="phone-screen login-screen">

          <div className="login-header">

            <div className="small-logo">
              ⚡
            </div>

            <h1>
              Create Account
            </h1>

            <p>
              Start your smarter EV journey
            </p>

          </div>

          <div className="login-form">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              className="primary-btn"
              onClick={() => {

                if (!name || !email || !password) {
                  alert(
                    "Please fill all fields"
                  );
                  return;
                }

                setUser({
                  name,
                  email,
                });

                setPage("home");

              }}
            >
              Create Account
            </button>

            <p className="signup-text">
              Already have an account?{" "}

              <button
                onClick={() =>
                  setPage("login")
                }
              >
                Login
              </button>
            </p>

          </div>

        </div>
      </div>
    );
  }

  // =========================
  // ONBOARDING
  // =========================

  const current =
    onboardingData[currentScreen];

  return (
    <div className="app">

      <div className="phone-screen">

        <div className="onboarding-illustration">

          <div className="illustration-circle">
            {current.icon}
          </div>

        </div>

        <div className="onboarding-content">

          <h1>
            {current.title}
          </h1>

          <p>
            {current.description}
          </p>

        </div>

        <div className="onboarding-bottom">

          <button
            className="skip-btn"
            onClick={() =>
              setPage("login")
            }
          >
            Skip
          </button>

          <div className="dots">

            {onboardingData.map(
              (_, index) => (
                <span
                  key={index}
                  className={
                    index === currentScreen
                      ? "dot active"
                      : "dot"
                  }
                />
              )
            )}

          </div>

          <button
            className="next-btn"
            onClick={() => {

              if (currentScreen < 2) {

                setCurrentScreen(
                  currentScreen + 1
                );

              } else {

                setPage("login");

              }

            }}
          >
            {currentScreen === 2
              ? "Get Started"
              : "Next →"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;