import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import LogoRace from "../assets/Race_new_Baru.png";

function ChatPage() {
  const [chats, setChats] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const latestChatRef = useRef(null);

  useEffect(() => {
    const fetchInitialChat = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://race-chat.mhridwan.com/v1/ask",
          { question: "" }
        );
        setChats([
          {
            type: "ai",
            text: response.data.data.answer,
          },
        ]);
      } catch (err) {
        setChats([{ type: "ai", text: "Gagal memuat pesan AI." }]);
      } finally {
        setLoading(false);
        inputRef.current?.focus();
      }
    };
    fetchInitialChat();
  }, []);

  // Scroll otomatis setiap kali chats berubah
  useEffect(() => {
    latestChatRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [chats]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!question) return;

    const userChat = { type: "user", text: question };
    setChats((prev) => [...prev, userChat]);
    setQuestion("");
    inputRef.current?.focus(); // Tambahkan ini agar langsung focus setelah input dikosongkan
    setLoading(true);

    try {
      const response = await axios.post(
        "https://race-chat.mhridwan.com/v1/ask",
        { question }
      );
      const aiChat = { type: "ai", text: response.data.data.answer };
      setChats((prev) => [...prev, aiChat]);
    } catch (err) {
      const errorChat = { type: "ai", text: "Gagal mengirim pertanyaan." };
      setChats((prev) => [...prev, errorChat]);
    } finally {
      setLoading(false);
      inputRef.current?.focus(); // Ini tetap aman di sini juga
    }
  };

  // Fokus input setiap kali loading selesai atau question dikosongkan
  useEffect(() => {
    if (!loading) {
      inputRef.current?.focus();
    }
  }, [loading, question]);

  // Tambahkan function ini di atas komponen
  const handleInputChange = (e) => {
    let value = e.target.value;

    // Kapitalisasi awal kalimat dan setelah titik
    value = value.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

    setQuestion(value);
  };

  return (
    <div className="min-h-[200px] flex flex-col justify-between">
      {loading && chats.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 flex-1">
          <svg
            className="animate-spin h-12 w-12 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <p className="text-orange-500">Loading data...</p>
        </div>
      ) : (
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="flex justify-center mb-4">
            <img
              src={LogoRace}
              alt="Logo Race"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Chat container */}
          <div
            className="space-y-3 mb-4 max-h-[200px] overflow-y-auto flex flex-col gap-2 px-2"
            ref={chatContainerRef}
          >
            {chats.map((chat, index) => (
              <div
                key={index}
                ref={index === chats.length - 1 ? latestChatRef : null}
                className={`flex ${
                  chat.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative px-4 py-3 rounded-xl max-w-[75%] shadow ${
                    chat.type === "user"
                      ? "bg-orange-100 text-gray-800 rounded-br-none"
                      : "bg-blue-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {/* bubble tail */}
                  {chat.type === "user" ? (
                    <span className="absolute right-0 bottom-0 w-0 h-0 border-t-[10px] border-t-orange-100 border-r-[10px] border-r-transparent"></span>
                  ) : (
                    <span className="absolute left-0 bottom-0 w-0 h-0 border-t-[10px] border-t-blue-100 border-l-[10px] border-l-transparent"></span>
                  )}
                  <div
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: chat.text.replace(/\n/g, "<br/>"),
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex gap-2 items-center px-2">
            <input
              ref={inputRef}
              type="text"
              value={question}
              onChange={handleInputChange}
              placeholder="Tulis pesan..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 "
              disabled={loading}
            />
            <button
              type="submit"
              className={`flex items-center justify-center bg-orange-400 text-white px-4 py-2 rounded-full transition ${
                loading
                  ? "bg-orange-300 cursor-not-allowed"
                  : "hover:bg-orange-400"
              }`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Kirim"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatPage;
