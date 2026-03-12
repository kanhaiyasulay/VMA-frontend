import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TalkCustomer() {

  const navigate = useNavigate();

  const [language, setLanguage] = useState("English");
  const [systemPrompt, setSystemPrompt] = useState("");

  const endConversation = () => {

    const latestSessionReport = {
      strength: "Clear product explanation",
      weakness: "Needs better objection handling",
      rating: 7.5,
      language: language,
      systemPrompt: systemPrompt
    };

    navigate("/customer-session-report", {
      state: latestSessionReport
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6">

      <h1 className="text-2xl font-semibold mb-6">
        Talk to Customer
      </h1>

      {/* Language Dropdown */}

      <div className="mb-6 w-80">
        <label className="block mb-2 font-medium">
          Select Language
        </label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </div>

      {/* System Prompt */}

      <div className="mb-8 w-80">
        <label className="block mb-2 font-medium">
          System Prompt
        </label>

        <textarea
          placeholder="Example: Behave like a polite SaaS sales assistant..."
          value={systemPrompt}
          onChange={(e) => setSystemPrompt(e.target.value)}
          className="w-full p-3 border rounded-lg h-24"
        />
      </div>

      {/* Avatar */}

      <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center mb-10">
        Avatar
      </div>

      {/* End Conversation */}

      <button
        onClick={endConversation}
        className="bg-red-500 px-6 py-3 rounded-lg text-white"
      >
        End Conversation
      </button>

    </div>
  );
}