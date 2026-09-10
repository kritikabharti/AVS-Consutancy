import React, { useState } from "react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Welcome to AVS Solar Consultancy! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  /* =====================================================
     AVS AI RESPONSE
     ===================================================== */

  const getAVSResponse = (question) => {
    const q = question.toLowerCase().trim();

    /* =====================================================
       GREETINGS
       ===================================================== */

    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("namaste")
    ) {
      return "👋 Hello! Welcome to AVS Solar Consultancy. I can help you with solar installation, pricing, subsidy, net metering, savings, maintenance and more.";
    }

    /* =====================================================
       SERVICES
       ===================================================== */

    if (
      q.includes("service") ||
      q.includes("what do you provide") ||
      q.includes("what do you offer")
    ) {
      return "☀️ AVS Solar Consultancy provides solar consultation, site surveys, custom solar design, quotation and approval assistance, professional installation, net metering support and after-sales service.";
    }

    /* =====================================================
       SOLAR PANEL
       ===================================================== */

    if (
      q.includes("solar panel") ||
      q.includes("panel") ||
      q.includes("solar system")
    ) {
      return "☀️ Solar panels convert sunlight into electricity for your home or business. AVS can help you choose a suitable solar system based on your electricity consumption, roof area and budget.";
    }

    /* =====================================================
       HOW SOLAR WORKS
       ===================================================== */

    if (
      q.includes("how solar works") ||
      q.includes("how does solar work") ||
      q.includes("solar work")
    ) {
      return "🔆 Solar panels generate DC electricity from sunlight. An inverter converts it into AC electricity that can be used by your home or business. Excess electricity can be exported to the grid through net metering.";
    }

    /* =====================================================
       INSTALLATION
       ===================================================== */

    if (
      q.includes("installation") ||
      q.includes("install solar") ||
      q.includes("install")
    ) {
      return "🔧 Our installation process generally includes site survey, system design, quotation, approval, installation, testing and net metering assistance.";
    }

    /* =====================================================
       INSTALLATION TIME
       ===================================================== */

    if (
      q.includes("how long") ||
      q.includes("installation time") ||
      q.includes("how many days") ||
      q.includes("time to install")
    ) {
      return "⏱️ Installation time depends on system size, site conditions and approvals. After the site survey, AVS can provide you with a more accurate timeline.";
    }

    /* =====================================================
       PRICE / COST
       ===================================================== */

    if (
      q.includes("price") ||
      q.includes("cost") ||
      q.includes("rate") ||
      q.includes("price of solar")
    ) {
      return "💰 Solar system cost depends on capacity, equipment, installation requirements and location. AVS can prepare a customized quotation after understanding your electricity requirements.";
    }

    /* =====================================================
       ELECTRICITY BILL
       ===================================================== */

    if (
      q.includes("electricity bill") ||
      q.includes("bill reduce") ||
      q.includes("reduce bill") ||
      q.includes("bill saving")
    ) {
      return "💡 A properly sized solar system can significantly reduce your electricity bill. Your actual savings depend on electricity consumption, system capacity, sunlight and applicable electricity policies.";
    }

    /* =====================================================
       SAVINGS
       ===================================================== */

    if (
      q.includes("saving") ||
      q.includes("save money") ||
      q.includes("monthly saving")
    ) {
      return "💰 Solar can help reduce your monthly electricity expenses. The expected savings depend on your current electricity bill, solar system size, location and electricity tariff.";
    }

    /* =====================================================
       SUBSIDY
       ===================================================== */

    if (
      q.includes("subsidy") ||
      q.includes("government subsidy") ||
      q.includes("solar subsidy")
    ) {
      return "🏠 Government solar subsidy may be available for eligible residential rooftop solar installations under applicable schemes. Subsidy eligibility and amount can change, so AVS can help guide you through the applicable process.";
    }

    /* =====================================================
       PM SURYA GHAR
       ===================================================== */

    if (
      q.includes("pm surya ghar") ||
      q.includes("surya ghar") ||
      q.includes("pm surya")
    ) {
      return "☀️ PM Surya Ghar is a government rooftop solar initiative for eligible households. It can provide financial support for qualifying residential rooftop solar installations. AVS can assist you with understanding the process and requirements.";
    }

    /* =====================================================
       NET METERING
       ===================================================== */

    if (
      q.includes("net metering") ||
      q.includes("netmetering") ||
      q.includes("grid")
    ) {
      return "⚡ Net metering allows eligible solar users to export excess electricity generated by their system to the electricity grid. The exported energy is accounted for according to applicable electricity regulations.";
    }

    /* =====================================================
       ON-GRID
       ===================================================== */

    if (
      q.includes("on grid") ||
      q.includes("ongrid") ||
      q.includes("on-grid")
    ) {
      return "⚡ An on-grid solar system is connected to the electricity grid. It can help reduce your electricity bill by generating power during sunlight hours and exporting eligible excess electricity to the grid.";
    }

    /* =====================================================
       OFF-GRID
       ===================================================== */

    if (
      q.includes("off grid") ||
      q.includes("offgrid") ||
      q.includes("off-grid")
    ) {
      return "🔋 An off-grid solar system operates independently from the electricity grid and generally requires battery storage. It can be useful where reliable grid electricity is unavailable.";
    }

    /* =====================================================
       HYBRID
       ===================================================== */

    if (
      q.includes("hybrid solar") ||
      q.includes("hybrid system")
    ) {
      return "🔋 A hybrid solar system combines solar generation, grid electricity and battery storage. It can provide greater flexibility and backup capability depending on the system design.";
    }

    /* =====================================================
       BATTERY
       ===================================================== */

    if (
      q.includes("battery") ||
      q.includes("backup") ||
      q.includes("power backup")
    ) {
      return "🔋 Battery storage can store solar energy for later use and provide backup power depending on the system configuration. AVS can help determine whether battery storage is suitable for your requirements.";
    }

    /* =====================================================
       ROOFTOP
       ===================================================== */

    if (
      q.includes("rooftop") ||
      q.includes("roof") ||
      q.includes("roof solar")
    ) {
      return "🏠 Rooftop solar uses available roof space to install solar panels. AVS can conduct a site survey to evaluate roof area, orientation, shading and other installation requirements.";
    }

    /* =====================================================
       HOME SOLAR
       ===================================================== */

    if (
      q.includes("home solar") ||
      q.includes("house solar") ||
      q.includes("residential")
    ) {
      return "🏠 AVS provides solar solutions for homes. The recommended capacity depends mainly on your electricity consumption, available roof space and your energy requirements.";
    }

    /* =====================================================
       COMMERCIAL SOLAR
       ===================================================== */

    if (
      q.includes("commercial") ||
      q.includes("business solar") ||
      q.includes("office solar") ||
      q.includes("shop solar")
    ) {
      return "🏢 AVS can provide solar solutions for commercial properties, offices, shops and other businesses. System design can be customized according to electricity consumption and available installation space.";
    }

    /* =====================================================
       INDUSTRIAL SOLAR
       ===================================================== */

    if (
      q.includes("industrial") ||
      q.includes("factory solar") ||
      q.includes("factory")
    ) {
      return "🏭 Industrial solar systems can help businesses reduce electricity costs and improve energy efficiency. A detailed site assessment is recommended before selecting the system capacity.";
    }

    /* =====================================================
       CAPACITY
       ===================================================== */

    if (
      q.includes("capacity") ||
      q.includes("how many kw") ||
      q.includes("kw solar") ||
      q.includes("size solar")
    ) {
      return "📊 Solar capacity should be selected based on your electricity consumption, roof area, sunlight availability and budget. AVS can help determine a suitable system size after reviewing your requirements.";
    }

    /* =====================================================
       1 KW
       ===================================================== */

    if (
      q.includes("1kw") ||
      q.includes("1 kw")
    ) {
      return "☀️ A 1 kW solar system may be suitable for smaller electricity requirements. Actual generation depends on location, sunlight, system efficiency and installation conditions.";
    }

    /* =====================================================
       3 KW
       ===================================================== */

    if (
      q.includes("3kw") ||
      q.includes("3 kw")
    ) {
      return "☀️ A 3 kW system is a common residential solar size. Whether it is suitable for your home depends on your electricity consumption and available roof space.";
    }

    /* =====================================================
       5 KW
       ===================================================== */

    if (
      q.includes("5kw") ||
      q.includes("5 kw")
    ) {
      return "☀️ A 5 kW solar system can be suitable for homes or small commercial applications with higher electricity consumption. AVS can calculate a more suitable capacity based on your electricity bill.";
    }

    /* =====================================================
       SITE SURVEY
       ===================================================== */

    if (
      q.includes("site survey") ||
      q.includes("survey") ||
      q.includes("inspection")
    ) {
      return "📍 During a site survey, we assess roof area, orientation, shading, structural conditions, electricity requirements and other factors needed for proper solar system design.";
    }

    /* =====================================================
       SOLAR DESIGN
       ===================================================== */

    if (
      q.includes("solar design") ||
      q.includes("custom design") ||
      q.includes("design system")
    ) {
      return "📐 AVS provides customized solar system designs based on your electricity consumption, roof space, location, shading and energy goals.";
    }

    /* =====================================================
       MAINTENANCE
       ===================================================== */

    if (
      q.includes("maintenance") ||
      q.includes("maintain solar") ||
      q.includes("maintenance cost")
    ) {
      return "🛠️ Solar systems generally require routine maintenance such as panel cleaning, visual inspection and checking system performance. AVS can provide after-sales support for your solar installation.";
    }

    /* =====================================================
       CLEANING
       ===================================================== */

    if (
      q.includes("clean panel") ||
      q.includes("cleaning") ||
      q.includes("clean solar")
    ) {
      return "🧼 Keeping solar panels clean helps maintain efficient sunlight absorption. Cleaning frequency depends on dust, pollution, weather and local conditions.";
    }

    /* =====================================================
       LIFESPAN
       ===================================================== */

    if (
      q.includes("lifespan") ||
      q.includes("life of solar") ||
      q.includes("how long solar last")
    ) {
      return "☀️ Quality solar panels are designed for long-term operation, commonly over 20 years. Actual performance and lifespan depend on equipment quality, installation, maintenance and environmental conditions.";
    }

    /* =====================================================
       WARRANTY
       ===================================================== */

    if (
      q.includes("warranty") ||
      q.includes("guarantee")
    ) {
      return "🛡️ Warranty coverage depends on the specific solar panels, inverter and other equipment selected. AVS can explain the applicable product and installation warranty during the quotation process.";
    }

    /* =====================================================
       DOCUMENTS
       ===================================================== */

    if (
      q.includes("document") ||
      q.includes("documents required") ||
      q.includes("paper") ||
      q.includes("papers")
    ) {
      return "📄 Required documents can vary depending on the installation and applicable electricity authority requirements. AVS can guide you regarding the documents needed for your solar project.";
    }

    /* =====================================================
       FINANCING
       ===================================================== */

    if (
      q.includes("finance") ||
      q.includes("financing") ||
      q.includes("loan") ||
      q.includes("emi")
    ) {
      return "💳 Solar financing options depend on the customer, project and available financial institutions or schemes. Please contact AVS to discuss the available options for your project.";
    }

    /* =====================================================
       QUOTATION
       ===================================================== */

    if (
      q.includes("quotation") ||
      q.includes("quote") ||
      q.includes("estimate")
    ) {
      return "📋 AVS can provide a customized quotation based on your solar requirements. A site survey and electricity consumption details can help us prepare a more suitable estimate.";
    }

    /* =====================================================
       ELECTRICITY CONSUMPTION
       ===================================================== */

    if (
      q.includes("electricity consumption") ||
      q.includes("units") ||
      q.includes("electricity units")
    ) {
      return "📊 Your monthly electricity units are useful for selecting the right solar capacity. You can share your recent electricity bill with our team for a more accurate assessment.";
    }

    /* =====================================================
       SOLAR GENERATION
       ===================================================== */

    if (
      q.includes("generation") ||
      q.includes("generate electricity") ||
      q.includes("how much electricity")
    ) {
      return "☀️ Solar generation depends on system capacity, sunlight, location, panel orientation, shading and weather conditions. AVS can estimate expected generation after evaluating your site.";
    }

    /* =====================================================
       ROOF SPACE
       ===================================================== */

    if (
      q.includes("roof space") ||
      q.includes("space required") ||
      q.includes("area required")
    ) {
      return "📐 Required roof area depends on the solar panel technology and total system capacity. During the site survey, AVS can check your available space and recommend a suitable layout.";
    }

    /* =====================================================
       ELECTRICITY CUT
       ===================================================== */

    if (
      q.includes("power cut") ||
      q.includes("electricity cut") ||
      q.includes("light gone")
    ) {
      return "🔋 Whether solar works during a power cut depends on your system type. Standard grid-connected systems normally shut down during a grid outage for safety, while suitable battery/hybrid systems can provide backup power.";
    }

    /* =====================================================
       CONTACT
       ===================================================== */

    if (
      q.includes("contact") ||
      q.includes("phone number") ||
      q.includes("call") ||
      q.includes("reach you")
    ) {
      return "📞 You can contact AVS Solar Consultancy through the Contact Us section of our website for inquiries, site surveys and customized quotations.";
    }

    /* =====================================================
       LOCATION
       ===================================================== */

    if (
      q.includes("location") ||
      q.includes("where are you") ||
      q.includes("where do you work") ||
      q.includes("service area")
    ) {
      return "📍 AVS Solar Consultancy can assist customers based on our available service areas. Please contact our team with your location so we can confirm service availability.";
    }

    /* =====================================================
       BOOKING
       ===================================================== */

    if (
      q.includes("book") ||
      q.includes("appointment") ||
      q.includes("consultation")
    ) {
      return "📅 You can contact AVS Solar Consultancy to request a solar consultation or site survey. Our team can guide you through the next steps.";
    }

    /* =====================================================
       BEST SOLAR
       ===================================================== */

    if (
      q.includes("best solar") ||
      q.includes("which solar") ||
      q.includes("which panel")
    ) {
      return "☀️ The best solar solution depends on your electricity requirements, roof conditions, budget and expected performance. AVS can recommend suitable equipment after evaluating your requirements.";
    }

    /* =====================================================
       RETURN ON INVESTMENT
       ===================================================== */

    if (
      q.includes("roi") ||
      q.includes("return on investment") ||
      q.includes("payback") ||
      q.includes("investment")
    ) {
      return "📈 Solar payback depends on installation cost, electricity tariff, system generation, subsidies and your electricity consumption. AVS can provide a project-specific estimate.";
    }

    /* =====================================================
       THANK YOU
       ===================================================== */

    if (
      q.includes("thank") ||
      q.includes("thanks")
    ) {
      return "😊 You're welcome! I'm always here to help with your solar questions.";
    }

    /* =====================================================
       DEFAULT RESPONSE
       ===================================================== */

    return "☀️ I can help you with solar services, installation, pricing, subsidy, PM Surya Ghar, net metering, solar capacity, electricity savings, batteries, maintenance, rooftop solar, commercial solar and more. Try asking one of these questions!";
  };


  /* =====================================================
     SEND MESSAGE
     ===================================================== */

  const sendMessage = (question = input) => {
    const text = question.trim();

    if (!text) return;

    const userMsg = {
      role: "user",
      text,
    };

    const aiMsg = {
      role: "ai",
      text: getAVSResponse(text),
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      aiMsg,
    ]);

    setInput("");
  };


  /* =====================================================
     QUICK QUESTIONS
     ===================================================== */

  const quickQuestions = [
    "What services do you provide?",
    "How much does solar cost?",
    "What is net metering?",
    "Is solar subsidy available?",
    "Tell me about PM Surya Ghar",
    "How much can I save?",
    "What size solar system do I need?",
    "How long does installation take?",
  ];


  return (
    <>
      {/* =================================================
          CHAT BUTTON
          ================================================= */}

      <button
        className={`avs-chat-button ${
          isOpen ? "avs-chat-button-open" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AVS Solar Assistant"
      >
        {isOpen ? "×" : "💬"}
      </button>


      {/* =================================================
          CHAT WINDOW
          ================================================= */}

      {isOpen && (
        <div className="avs-chat-container">

          {/* HEADER */}

          <div className="avs-chat-header">

            <div>
              <div className="avs-chat-title">
                AVS AI Assistant
              </div>

              <div className="avs-chat-status">
                ● Online
              </div>
            </div>

            <button
              className="avs-chat-header-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

          </div>


          {/* MESSAGES */}

          <div className="avs-chat-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`avs-chat-message ${
                  msg.role === "user"
                    ? "avs-chat-user"
                    : "avs-chat-ai"
                }`}
              >
                {msg.text}
              </div>
            ))}


            {/* QUICK QUESTIONS */}

            {messages.length === 1 && (
              <div className="avs-quick-section">

                <div className="avs-quick-title">
                  Popular questions
                </div>

                <div className="avs-quick-buttons">

                  {quickQuestions.map(
                    (question, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          sendMessage(question)
                        }
                      >
                        {question}
                      </button>
                    )
                  )}

                </div>

              </div>
            )}

          </div>


          {/* INPUT */}

          <div className="avs-chat-input-area">

            <input
              type="text"
              placeholder="Ask about solar..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
            >
              ➤
            </button>

          </div>

        </div>
      )}


      {/* =================================================
          CSS
          ================================================= */}

      <style>
        {`

          /* ================================================
             CHAT BUTTON
             ================================================ */

          .avs-chat-button {
            position: fixed;

            right: 25px;
            bottom: 25px;

            width: 60px;
            height: 60px;

            border: none;
            border-radius: 50%;

            background: #676665;

            color: #ffffff;

            font-size: 28px;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            z-index: 99999;

            box-shadow:
              0 8px 25px rgba(0, 0, 0, 0.25);

            transition:
              transform 0.25s ease,
              background 0.25s ease,
              box-shadow 0.25s ease;
          }


          .avs-chat-button:hover {
            transform: scale(1.08);

            background: #365782;

            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.3);
          }


          .avs-chat-button-open {
            background: #365782;
          }


          /* ================================================
             CHAT CONTAINER
             ================================================ */

          .avs-chat-container {
            position: fixed;

            right: 25px;
            bottom: 95px;

            width: 350px;
            height: 500px;

            max-width: calc(100vw - 40px);
            max-height: calc(100vh - 130px);

            display: flex;
            flex-direction: column;

            background: #ffffff;

            border-radius: 22px;

            overflow: hidden;

            z-index: 99998;

            box-shadow:
              0 15px 45px rgba(0, 0, 0, 0.25);

            animation:
              avsChatOpen
              0.25s
              ease
              both;
          }


          @keyframes avsChatOpen {

            from {
              opacity: 0;
              transform:
                translateY(15px)
                scale(0.96);
            }

            to {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }

          }


          /* ================================================
             HEADER
             ================================================ */

          .avs-chat-header {
            min-height: 65px;

            padding: 13px 15px;

            display: flex;

            align-items: center;

            justify-content: space-between;

            background: #365782;

            color: #ffffff;

            flex-shrink: 0;
          }


          .avs-chat-title {
            font-size: 16px;

            font-weight: 700;
          }


          .avs-chat-status {
            margin-top: 3px;

            font-size: 11px;

            color: #c9e7c5;
          }


          .avs-chat-header-close {
            width: 32px;
            height: 32px;

            border: none;
            border-radius: 50%;

            background: rgba(255, 255, 255, 0.15);

            color: #ffffff;

            font-size: 21px;

            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            transition:
              background 0.2s ease,
              transform 0.2s ease;
          }


          .avs-chat-header-close:hover {
            background: rgba(255, 255, 255, 0.25);

            transform: rotate(90deg);
          }


          /* ================================================
             MESSAGES
             ================================================ */

          .avs-chat-messages {
            flex: 1;

            min-height: 0;

            padding: 13px;

            display: flex;

            flex-direction: column;

            gap: 9px;

            overflow-y: auto;

            background: #f7f8f7;

            scroll-behavior: smooth;
          }


          .avs-chat-message {
            max-width: 82%;

            padding: 10px 12px;

            border-radius: 12px;

            color: #ffffff;

            font-size: 13px;

            line-height: 1.5;

            word-break: break-word;

            animation:
              avsMessageIn
              0.2s
              ease
              both;
          }


          @keyframes avsMessageIn {

            from {
              opacity: 0;
              transform: translateY(6px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          .avs-chat-ai {
            align-self: flex-start;

            background: #1f2937;

            border-bottom-left-radius: 4px;
          }


          .avs-chat-user {
            align-self: flex-end;

            background: #ff9800;

            border-bottom-right-radius: 4px;
          }


          /* ================================================
             QUICK QUESTIONS
             ================================================ */

          .avs-quick-section {
            margin-top: 4px;
          }


          .avs-quick-title {
            margin-bottom: 8px;

            color: #69716b;

            font-size: 11px;

            font-weight: 700;

            text-transform: uppercase;

            letter-spacing: 0.5px;
          }


          .avs-quick-buttons {
            display: flex;

            flex-wrap: wrap;

            gap: 6px;
          }


          .avs-quick-buttons button {
            width: auto;

            padding: 7px 9px;

            border: 1px solid #d9dfda;

            border-radius: 15px;

            background: #ffffff;

            color: #365782;

            font-size: 11px;

            line-height: 1.25;

            cursor: pointer;

            transition:
              background 0.2s ease,
              border-color 0.2s ease,
              transform 0.2s ease;
          }


          .avs-quick-buttons button:hover {
            background: #eef3ef;

            border-color: #9caf9a;

            transform: translateY(-1px);
          }


          /* ================================================
             INPUT AREA
             ================================================ */

          .avs-chat-input-area {
            display: flex;

            align-items: center;

            gap: 8px;

            padding: 10px;

            border-top: 1px solid #e3e7e3;

            background: #ffffff;

            flex-shrink: 0;
          }


          .avs-chat-input-area input {
            flex: 1;

            min-width: 0;

            height: 42px;

            padding: 0 12px;

            border: 1px solid #d5dcd6;

            border-radius: 9px;

            outline: none;

            color: #222222;

            font-size: 13px;

            font-family: inherit;

            transition:
              border-color 0.2s ease,
              box-shadow 0.2s ease;
          }


          .avs-chat-input-area input:focus {
            border-color: #365782;

            box-shadow:
              0 0 0 3px rgba(54, 87, 130, 0.1);
          }


          .avs-chat-input-area button {
            width: 43px;
            height: 42px;

            flex-shrink: 0;

            border: none;

            border-radius: 9px;

            background: #ff9800;

            color: #ffffff;

            font-size: 18px;

            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            transition:
              background 0.2s ease,
              transform 0.2s ease;
          }


          .avs-chat-input-area button:hover:not(:disabled) {
            background: #e68900;

            transform: translateY(-1px);
          }


          .avs-chat-input-area button:disabled {
            opacity: 0.45;

            cursor: not-allowed;
          }


          /* ================================================
             TABLET
             ================================================ */

          @media screen and (max-width: 768px) {

            .avs-chat-button {
              right: 18px;
              bottom: 18px;

              width: 56px;
              height: 56px;

              font-size: 25px;
            }


            .avs-chat-container {
              right: 18px;
              bottom: 86px;

              width: 340px;

              max-width: calc(100vw - 36px);
            }

          }


          /* ================================================
             MOBILE
             ================================================ */

          @media screen and (max-width: 480px) {

            .avs-chat-button {
              width: 52px;
              height: 52px;

              right: 14px;
              bottom: 14px;

              font-size: 23px;
            }


            .avs-chat-container {
              left: 10px;
              right: 10px;

              bottom: 76px;

              width: auto;

              max-width: none;

              height: min(
                500px,
                calc(100dvh - 95px)
              );

              max-height: calc(100dvh - 95px);

              border-radius: 18px;
            }


            .avs-chat-header {
              min-height: 58px;

              padding: 11px 13px;
            }


            .avs-chat-title {
              font-size: 15px;
            }


            .avs-chat-messages {
              padding: 10px;

              gap: 8px;
            }


            .avs-chat-message {
              max-width: 88%;

              padding: 9px 10px;

              font-size: 12px;

              line-height: 1.45;
            }


            .avs-quick-buttons {
              gap: 5px;
            }


            .avs-quick-buttons button {
              font-size: 10.5px;

              padding: 7px 8px;
            }


            .avs-chat-input-area {
              padding: 8px;

              gap: 6px;
            }


            .avs-chat-input-area input {
              height: 42px;

              font-size: 12px;
            }


            .avs-chat-input-area button {
              width: 42px;
              height: 42px;
            }

          }


          /* ================================================
             VERY SMALL PHONE
             ================================================ */

          @media screen and (max-width: 360px) {

            .avs-chat-button {
              width: 50px;
              height: 50px;

              right: 10px;
              bottom: 10px;

              font-size: 22px;
            }


            .avs-chat-container {
              left: 7px;
              right: 7px;

              bottom: 68px;

              height: calc(100dvh - 82px);

              max-height: calc(100dvh - 82px);

              border-radius: 16px;
            }


            .avs-chat-header {
              min-height: 54px;

              padding: 9px 11px;
            }


            .avs-chat-title {
              font-size: 14px;
            }


            .avs-chat-status {
              font-size: 10px;
            }


            .avs-chat-header-close {
              width: 29px;
              height: 29px;

              font-size: 18px;
            }


            .avs-chat-messages {
              padding: 8px;
            }


            .avs-chat-message {
              max-width: 90%;

              font-size: 11.5px;

              padding: 8px 9px;
            }


            .avs-quick-title {
              font-size: 10px;
            }


            .avs-quick-buttons button {
              font-size: 9.5px;

              padding: 6px 7px;
            }


            .avs-chat-input-area {
              padding: 7px;
            }


            .avs-chat-input-area input {
              height: 40px;

              padding: 0 9px;

              font-size: 11.5px;
            }


            .avs-chat-input-area button {
              width: 40px;
              height: 40px;

              font-size: 16px;
            }

          }

        `}
      </style>
    </>
  );
}