import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Payment from './Payment';
import PartPay from './PartPay';
import jupeb from "../assets/images/jupeb.jpg"
const PricingPreview = () => {
  const [activeTab, setActiveTab] = useState("standard");
  const [budget, setBudget] = useState(50000);
  const navigate = useNavigate();

  const goToPayment = () => {
    <Payment />
    navigate("/payment");
  };
  const goToPayments = () => {
    <PartPay />
    navigate("/partpay");
  };
  // Colors
  const colors = {
    white: "#FFFFFF",
    navyBlue: "#0A2342",
    tan: "#D5B895",
    beige: "#F2E6D8",
    lightBeige: "#F9F4EE",
  };

  const handleBudgetChange = (e) => {
    setBudget(parseInt(e.target.value, 10));
  };

  return (
    <div
      style={{
        backgroundColor: colors.lightBeige,
        padding: "3rem 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <section id="pricing" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: colors.navyBlue,
                marginBottom: "0.5rem",
              }}
            >
              Our Pricing
            </h2>
            <p style={{ color: "#666", maxWidth: "42rem", margin: "0 auto" }}>
              Choose the plan that fits your needs and transform your real
              estate properties, apartments, and buildings
            </p>
          </div>

          {/* Pricing Plan Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2.5rem",
              backgroundColor: colors.white,
              borderRadius: "9999px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "36rem",
              margin: "0 auto 2.5rem auto",
              overflow: "hidden",
            }}
          >
            <button
              style={{
                padding: "0.75rem 1.5rem",
                fontWeight: "500",
                backgroundColor:
                  activeTab === "standard" ? colors.beige : colors.white,
                color: activeTab === "standard" ? colors.navyBlue : "#666",
                border: "none",
                cursor: "pointer",
                flex: "1",
              }}
              onClick={() => setActiveTab("standard")}
            >
              Standard
            </button>
            <button
              style={{
                padding: "0.75rem 1.5rem",
                fontWeight: "500",
                backgroundColor:
                  activeTab === "enterprise" ? colors.beige : colors.white,
                color: activeTab === "enterprise" ? colors.navyBlue : "#666",
                border: "none",
                cursor: "pointer",
                flex: "1",
              }}
              onClick={() => setActiveTab("enterprise")}
            >
              Enterprise
            </button>
            <button
              style={{
                padding: "0.75rem 1.5rem",
                fontWeight: "500",
                backgroundColor:
                  activeTab === "custom" ? colors.beige : colors.white,
                color: activeTab === "custom" ? colors.navyBlue : "#666",
                border: "none",
                cursor: "pointer",
                flex: "1",
              }}
              onClick={() => setActiveTab("custom")}
            >
              Custom Solutions
            </button>
          </div>

          {/* Standard Pricing */}
          {activeTab === "standard" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              {/* Essential Plan */}
              <div
                style={{
                  backgroundColor: colors.white,
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    backgroundColor: colors.beige,
                    color: colors.navyBlue,
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                  }}
                >
                  Basic
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: colors.navyBlue,
                    marginBottom: "1.25rem",
                  }}
                >
                  Essential
                </h3>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: colors.tan,
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  $3,999
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "normal",
                      color: "#666",
                      marginLeft: "0.25rem",
                    }}
                  >
                    /month
                  </span>
                </div>
                <ul
                  style={{
                    marginBottom: "2rem",
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  {[
                    "Single property display",
                    "3D rendering (5 views)",
                    "Virtual video tour (60 seconds)",
                    "Basic analytics dashboard",
                    "Email support (48hr response)",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.75rem 0",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <span
                        style={{ color: colors.tan, marginRight: "0.5rem" }}
                      >
                        ✓
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                  {[
                    "AR functionality",
                    "Material customization",
                    "White-label solution",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.75rem 0",
                        borderBottom: "1px solid #eee",
                        color: "#999",
                      }}
                    >
                      <span style={{ color: "#ccc", marginRight: "0.5rem" }}>
                        ✗
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#001F3F",
                    color: "#fff",
                    fontWeight: "600",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={goToPayment}
                >
                  Subscribe Now
                </button>
              </div>

              {/* Premium Plan */}
              <div
                style={{
                  backgroundColor: colors.white,
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  padding: "2rem",
                  position: "relative",
                  transform: "scale(1.05)",
                  border: `2px solid ${colors.beige}`,
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    backgroundColor: colors.beige,
                    color: colors.navyBlue,
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                  }}
                >
                  Most Popular
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: colors.navyBlue,
                    marginBottom: "1.25rem",
                  }}
                >
                  Premium
                </h3>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: colors.tan,
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  $7,999
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "normal",
                      color: "#666",
                      marginLeft: "0.25rem",
                    }}
                  >
                    /month
                  </span>
                </div>
                <ul
                  style={{
                    marginBottom: "2rem",
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  {[
                    "Single property display",
                    "3D rendering (10 views)",
                    "Virtual video tour (2 minutes)",
                    "Client-hosted AR experience",
                    "Advanced analytics & reporting",
                    "Material customization (3 options)",
                    "Priority support (24hr response)",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.75rem 0",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <span
                        style={{ color: colors.tan, marginRight: "0.5rem" }}
                      >
                        ✓
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                  {["White-label solution"].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.75rem 0",
                        borderBottom: "1px solid #eee",
                        color: "#999",
                      }}
                    >
                      <span style={{ color: "#ccc", marginRight: "0.5rem" }}>
                        ✗
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: colors.navyBlue,
                    color: colors.white,
                    fontWeight: "600",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    cursor: "pointer",
                  }}
                   onClick={goToPayments}
                >
                  Subscribe Now
                </button>
              </div>

              {/* Enterprise Plan */}
              <div
                style={{
                  backgroundColor: colors.white,
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: colors.navyBlue,
                    marginBottom: "1.25rem",
                  }}
                >
                  Enterprise
                </h3>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: colors.tan,
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  $14,999
                  <span
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "normal",
                      color: "#666",
                      marginLeft: "0.25rem",
                    }}
                  >
                    +/month
                  </span>
                </div>
                <ul
                  style={{
                    marginBottom: "2rem",
                    listStyleType: "none",
                    padding: 0,
                  }}
                >
                  {[
                    "Multiple property displays (up to 5)",
                    "3D rendering (unlimited views)",
                    "Virtual video tour (custom length)",
                    "ImmersiveLens-hosted AR",
                    "Comprehensive analytics suite",
                    "Full material customization",
                    "24/7 dedicated support",
                    "White-label solution",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.75rem 0",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <span
                        style={{ color: colors.tan, marginRight: "0.5rem" }}
                      >
                        ✓
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: colors.navyBlue,
                    color: colors.white,
                    fontWeight: "600",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}

          {/* Enterprise Pricing */}
          {activeTab === "enterprise" && (
            <div
              style={{
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                padding: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1", minWidth: "300px" }}>
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: colors.navyBlue,
                      marginBottom: "1rem",
                    }}
                  >
                    Enterprise Solutions
                  </h3>
                  <p
                    style={{
                      marginBottom: "1.5rem",
                      color: "#666",
                      maxWidth: "600px",
                    }}
                  >
                    Our enterprise solutions are designed for large real estate
                    agencies, property developers, and management companies that
                    need to visualize multiple apartments, buildings, and
                    properties at scale.
                  </p>

                  <div style={{ marginBottom: "1.5rem" }}>
                    {[
                      {
                        icon: "🏢",
                        title: "Multiple Property Management",
                        description:
                          "Manage and visualize up to 50 properties in a single dashboard",
                      },
                      {
                        icon: "👥",
                        title: "Team Collaboration",
                        description:
                          "Unlimited user accounts with role-based permissions",
                      },
                      {
                        icon: "🔄",
                        title: "API Integration",
                        description:
                          "Seamlessly connect with your existing property management systems",
                      },
                      {
                        icon: "📊",
                        title: "Advanced Analytics",
                        description:
                          "Detailed insights on user engagement and conversion metrics",
                      },
                    ].map((feature, index) => (
                      <div
                        key={index}
                        style={{ display: "flex", marginBottom: "1.25rem" }}
                      >
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "0.75rem",
                            backgroundColor: colors.lightBeige,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: "1rem",
                          }}
                        >
                          <span style={{ fontSize: "1.5rem" }}>
                            {feature.icon}
                          </span>
                        </div>
                        <div>
                          <h4
                            style={{
                              fontSize: "1.25rem",
                              marginBottom: "0.25rem",
                              fontWeight: "500",
                              color: colors.navyBlue,
                            }}
                          >
                            {feature.title}
                          </h4>
                          <p
                            style={{
                              margin: "0",
                              color: "#666",
                            }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      backgroundColor: colors.beige,
                      padding: "1.5rem",
                      borderRadius: "0.5rem",
                      textAlign: "center",
                      marginBottom: "1.5rem",
                      maxWidth: "400px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.75rem",
                        marginBottom: "0.5rem",
                        color: colors.navyBlue,
                      }}
                    >
                      Starting at $35,000/month
                    </h3>
                    <p style={{ marginBottom: "1rem" }}>
                      Customized based on your specific requirements
                    </p>
                    <button
                      style={{
                        padding: "0.75rem 2rem",
                        backgroundColor: colors.navyBlue,
                        color: colors.white,
                        fontWeight: "600",
                        borderRadius: "1.5rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Contact Sales
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    flex: "1",
                    minWidth: "300px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: colors.lightBeige,
                      width: "100%",
                      maxWidth: "400px",
                      height: "400px",
                      borderRadius: "0.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: colors.navyBlue,
                      fontSize: "1.25rem",
                      fontStyle: "italic",
                    }}
                   className="jupebImageDiv">
                    <img src={jupeb} alt="Enterprise Solution Image" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0.5rem"}} className="jupebImage"/>
                    
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Custom Solutions */}
          {activeTab === "custom" && (
            <div
              style={{
                backgroundColor: colors.white,
                borderRadius: "0.5rem",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                padding: "2rem",
                marginBottom: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: colors.navyBlue,
                  marginBottom: "1rem",
                }}
              >
                Custom Development Solutions
              </h3>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "2.5rem",
                  maxWidth: "800px",
                  margin: "0 auto 2.5rem",
                  color: "#666",
                }}
              >
                Need something specific? We can build custom solutions tailored
                to your unique requirements.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  {
                    icon: "🛒",
                    title: "E-commerce Integration",
                    description:
                      "Allow customers to purchase furniture and decor items directly from your 3D scenes",
                  },
                  {
                    icon: "🥽",
                    title: "Custom VR Experiences",
                    description:
                      "Create branded VR applications for showrooms and events",
                  },
                  {
                    icon: "🏙️",
                    title: "Neighborhood Visualization",
                    description:
                      "Showcase entire developments and neighborhoods with interactive maps",
                  },
                  {
                    icon: "🔨",
                    title: "Construction Progress Tracker",
                    description:
                      "Visualize building progress over time with 4D construction sequencing",
                  },
                ].map((solution, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: colors.white,
                      borderRadius: "0.5rem",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                      padding: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: colors.lightBeige,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto 1rem auto",
                      }}
                    >
                      <span style={{ fontSize: "2rem" }}>{solution.icon}</span>
                    </div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "0.75rem",
                        color: colors.navyBlue,
                      }}
                    >
                      {solution.title}
                    </h4>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.875rem",
                      }}
                    >
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  padding: "2rem",
                  backgroundColor: colors.beige,
                  borderRadius: "0.5rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                    color: colors.navyBlue,
                  }}
                >
                  Request a Custom Quote
                </h4>

                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginBottom: "1rem",
                      gap: "1rem",
                    }}
                  >
                    <div style={{ flex: "1", minWidth: "250px" }}>
                      <input
                        type="text"
                        placeholder="Name"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid #eee",
                          borderRadius: "0.25rem",
                          fontSize: "1rem",
                          backgroundColor: colors.white,
                        }}
                      />
                    </div>

                    <div style={{ flex: "1", minWidth: "250px" }}>
                      <input
                        type="email"
                        placeholder="Email"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid #eee",
                          borderRadius: "0.25rem",
                          fontSize: "1rem",
                          backgroundColor: colors.white,
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      placeholder="Company"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #eee",
                        borderRadius: "0.25rem",
                        fontSize: "1rem",
                        backgroundColor: colors.white,
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <textarea
                      placeholder="Describe your project requirements"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid #eee",
                        borderRadius: "0.25rem",
                        fontSize: "1rem",
                        minHeight: "6rem",
                        resize: "vertical",
                        backgroundColor: colors.white,
                      }}
                    ></textarea>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: "500",
                        color: colors.navyBlue,
                      }}
                    >
                      Estimated Budget:
                    </label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="range"
                        min="10000"
                        max="100000"
                        step="5000"
                        value={budget}
                        onChange={handleBudgetChange}
                        style={{
                          flex: "1",
                          marginRight: "1rem",
                          accentColor: colors.tan,
                        }}
                      />
                      <span
                        style={{
                          fontWeight: "600",
                          color: colors.navyBlue,
                          minWidth: "80px",
                        }}
                      >
                        ${budget.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <button
                      style={{
                        padding: "0.75rem 2rem",
                        backgroundColor: colors.navyBlue,
                        color: colors.white,
                        fontWeight: "600",
                        borderRadius: "1.5rem",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "standard" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: "0.875rem",
                marginTop: "1rem",
              }}
            >
              <span style={{ marginRight: "0.5rem" }}>ℹ️</span>
              <p>
                All plans include a one-time setup fee. Annual billing saves you
                20%.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PricingPreview;
