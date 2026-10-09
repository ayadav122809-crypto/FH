export default function ClientChat(){
    return(
        <div class="dashboard">

    {/* <!-- ================= SIDEBAR ================= --> */}

  


    {/* <!-- ================= MAIN CONTENT ================= --> */}

    <main class="main-content">

        {/* <!-- Header --> */}
        <header class="top-header">

            <div>
                <h1>Messages & Conversations</h1>
                <p>Stay connected with your freelancers.</p>
            </div>

            <div class="header-right">

                <div class="search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search messages..."/>
                </div>

                <div class="notification">
                    <i class="fa-regular fa-bell"></i>
                    <span>2</span>
                </div>

            </div>

        </header>


        {/* <!-- ================= CHAT SECTION ================= --> */}

        <section class="chat-container">

            {/* <!-- Conversation List --> */}
            <div class="conversation-panel">

                <div class="conversation-header">

                    <div>
                        <h2>Messages</h2>
                        <p>Your conversations</p>
                    </div>

                    <button class="compose-btn">
                        <i class="fa-solid fa-pen"></i>
                    </button>

                </div>


                {/* <!-- Conversation Search --> */}
                <div class="conversation-search">

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <input type="text"
                           placeholder="Search conversations..."/>

                </div>


                {/* <!-- ================= CHAT 1 ================= --> */}

                <div class="conversation active">

                    <div class="freelancer-avatar">
                        <img src="https://i.pravatar.cc/100?img=12"
                             alt="Rahul Sharma"/>
                        <span class="online-dot"></span>
                    </div>

                    <div class="conversation-info">

                        <div class="conversation-name">
                            <h3>Rahul Sharma</h3>
                            <span>10:42 AM</span>
                        </div>

                        <p class="role">
                            Full Stack Developer
                        </p>

                        <p class="preview">
                            Hi, I reviewed your project requirements...
                        </p>

                    </div>

                </div>


                {/* <!-- ================= CHAT 2 ================= --> */}

                <div class="conversation">

                    <div class="freelancer-avatar">
                        <img src="https://i.pravatar.cc/100?img=47"
                             alt="Riya Desai"/>
                    </div>

                    <div class="conversation-info">

                        <div class="conversation-name">
                            <h3>Riya Desai</h3>
                            <span>Yesterday</span>
                        </div>

                        <p class="role">
                            UI/UX Designer
                        </p>

                        <p class="preview">
                            I can help you with the dashboard design...
                        </p>

                    </div>

                </div>


                {/* <!-- ================= CHAT 3 ================= --> */}

                <div class="conversation">

                    <div class="freelancer-avatar">
                        <img src="https://i.pravatar.cc/100?img=33"
                             alt="Amit Patel"/>
                    </div>

                    <div class="conversation-info">

                        <div class="conversation-name">
                            <h3>Amit Patel</h3>
                            <span>2 days ago</span>
                        </div>

                        <p class="role">
                            Backend Developer
                        </p>

                        <p class="preview">
                            The API integration can be completed...
                        </p>

                    </div>

                </div>

            </div>


            {/* <!-- ================= CHAT AREA ================= --> */}

            <div class="chat-area">

                {/* <!-- Chat Header --> */}
                <div class="chat-header">

                    <div class="selected-freelancer">

                        <div class="large-avatar">

                            <img src="https://i.pravatar.cc/100?img=12"
                                 alt="Rahul Sharma"/>

                            <span class="online-dot"></span>

                        </div>

                        <div>

                            <h2>Rahul Sharma</h2>

                            <p>
                                <span class="status-dot"></span>
                                Online · Full Stack Developer
                            </p>

                        </div>

                    </div>

                    <div class="chat-actions">

                        <button title="Call">
                            <i class="fa-solid fa-phone"></i>
                        </button>

                        <button title="More">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </button>

                    </div>

                </div>


                {/* <!-- Empty Chat --> */}
                <div class="chat-messages">

                    <div class="empty-chat">

                        <div class="empty-icon">
                            <i class="fa-regular fa-comments"></i>
                        </div>

                        <h3>Start a conversation</h3>

                        <p>
                            Send a message to Rahul Sharma
                            to discuss your project.
                        </p>

                    </div>

                </div>


                {/* <!-- Message Input --> */}
                <div class="message-area">

                    <button class="attachment-btn" title="Attach file">
                        <i class="fa-solid fa-paperclip"></i>
                    </button>

                    <button class="image-btn" title="Add image">
                        <i class="fa-regular fa-image"></i>
                    </button>

                    <input type="text"
                           placeholder="Type your message..."/>

                    <button class="send-btn">
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>

                </div>

            </div>

        </section>

    </main>

</div>
    )
}