import React, { useState } from "react";

export default function Chat() {
    const [selectedChat, setSelectedChat] = useState("rahul");
    const [messageInput, setMessageInput] = useState("");

    return (
        <main className="main-content">
            {/* TOP HEADER */}
            <header className="top-header">
                <div className="header-left">
                    <h1>Messages & Conversations</h1>
                    <p>Welcome Ayush, stay connected with your clients.</p>
                </div>

                <div className="header-right">
                    {/* SEARCH */}
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search conversations..."
                        />
                    </div>

                    {/* NOTIFICATION */}
                    <div className="notification">
                        <i className="fa-regular fa-bell"></i>
                        <span className="notification-dot red-dot"></span>
                    </div>
                </div>
            </header>

            {/* CHAT SECTION */}
            <section className="chat-section">
                {/* CONVERSATION PANEL */}
                <div className="conversation-panel">
                    {/* Conversation Heading */}
                    <div className="conversation-heading">
                        <div>
                            <h2>Messages</h2>
                            <p>Your conversations</p>
                        </div>

                        <button className="message-compose" title="New Message">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                    </div>

                    {/* Conversation Search */}
                    <div className="conversation-search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search messages..."
                        />
                    </div>

                    {/* CONVERSATION LIST */}
                    <div className="conversation-list">
                        {/* CLIENT 1 */}
                        <div
                            className={`conversation-item ${selectedChat === "rahul" ? "active" : ""}`}
                            onClick={() => setSelectedChat("rahul")}
                        >
                            <div className="client-avatar">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="Rahul Mehta"
                                />
                                <span className="online-dot"></span>
                            </div>

                            <div className="conversation-info">
                                <div className="conversation-name">
                                    <h3>Rahul Mehta</h3>
                                    <span>10:42 AM</span>
                                </div>
                                <p>Last message will appear here...</p>
                            </div>
                        </div>

                        {/* CLIENT 2 */}
                        <div
                            className={`conversation-item ${selectedChat === "priya" ? "active" : ""}`}
                            onClick={() => setSelectedChat("priya")}
                        >
                            <div className="client-avatar">
                                <img
                                    src="https://i.pravatar.cc/100?img=32"
                                    alt="Priya Sharma"
                                />
                            </div>

                            <div className="conversation-info">
                                <div className="conversation-name">
                                    <h3>Priya Sharma</h3>
                                    <span>Yesterday</span>
                                </div>
                                <p>Last message will appear here...</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CHAT AREA */}
                <div className="chat-area">
                    {/* CHAT HEADER */}
                    <div className="chat-header">
                        <div className="selected-client">
                            <div className="selected-client-avatar">
                                <img
                                    src={
                                        selectedChat === "rahul"
                                            ? "https://i.pravatar.cc/100?img=12"
                                            : "https://i.pravatar.cc/100?img=32"
                                    }
                                    alt={selectedChat === "rahul" ? "Rahul Mehta" : "Priya Sharma"}
                                />
                                {selectedChat === "rahul" && <span className="online-dot"></span>}
                            </div>

                            <div className="selected-client-info">
                                <h2>{selectedChat === "rahul" ? "Rahul Mehta" : "Priya Sharma"}</h2>
                                <p>
                                    <span className="status-dot"></span>
                                    {selectedChat === "rahul" ? "Online" : "Offline"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* EMPTY CHAT */}
                    <div className="chat-messages">
                        <div className="empty-chat">
                            <div className="empty-chat-icon">
                                <i className="fa-regular fa-comments"></i>
                            </div>

                            <h3>Start a conversation</h3>

                            <p>
                                Send a message to {selectedChat === "rahul" ? "Rahul Mehta" : "Priya Sharma"} to start your conversation.
                            </p>
                        </div>
                    </div>

                    {/* MESSAGE INPUT AREA */}
                    <div className="message-input-area">
                        {/* Attachment */}
                        <button className="attachment-btn" title="Attach File">
                            <i className="fa-solid fa-paperclip"></i>
                        </button>

                        {/* Image */}
                        <button className="image-btn" title="Insert Image">
                            <i className="fa-regular fa-image"></i>
                        </button>

                        {/* Message Box */}
                        <div className="message-box">
                            <input
                                type="text"
                                placeholder="Write a message..."
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                        </div>

                        {/* Send */}
                        <button className="send-btn" title="Send Message">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}