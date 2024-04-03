import React from 'react'
import icons from '../../assets/Icons/Icons'
import './style.css'

const Chats = () => {
    const chatArray = Array.from({ length: 10 }, (_, index) => index);
    return (
        <>
            <div className='main-chats'>
                <div className='chat-first-container'>
                    <h3 style={{ color: "white" }}>My Chats</h3>
                    <div className='chat-icons'>
                        <div>{icons.plus}</div>
                        <div>{icons.bar}</div>
                    </div>
                </div>
                <div className='chat-second-container'>
                    <div className='chat-button'>
                        <div>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99998 4.72223C10.0019 5.45549 9.83058 6.17883 9.49999 6.83334C9.108 7.61764 8.5054 8.27732 7.75968 8.73849C7.01396 9.19966 6.15457 9.44411 5.27777 9.44445C4.54451 9.44636 3.82117 9.27504 3.16666 8.94445L0 10L1.05555 6.83334C0.724961 6.17883 0.553643 5.45549 0.555555 4.72223C0.555894 3.84543 0.800339 2.98604 1.26151 2.24032C1.72268 1.4946 2.38236 0.891996 3.16666 0.500015C3.82117 0.169422 4.54451 -0.00189598 5.27777 1.58267e-05H5.55555C6.71352 0.0639 7.80723 0.55266 8.62729 1.37271C9.44734 2.19277 9.9361 3.28648 9.99998 4.44445V4.72223Z" fill="#23C69E" />
                            </svg>
                        </div>
                        <div>Chats</div>
                        <div style={{ fontSize: "10px", background: '#3F424A', borderRadius: "3px", padding: "0px 2px 0px 2px" }}>24</div>
                    </div>
                    <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                        <div>
                            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.57143 9C5.4962 9 5.42229 8.9792 5.35714 8.9397L3 7.5123L0.642857 8.9397C0.577707 8.97919 0.503803 8.99999 0.428574 8.99999C0.353345 8.99999 0.279441 8.9792 0.21429 8.9397C0.14914 8.90021 0.0950375 8.8434 0.0574218 8.775C0.019806 8.70659 1.91109e-06 8.62899 0 8.55V1.35C0.000340378 0.992067 0.135908 0.648897 0.376953 0.395801C0.617997 0.142704 0.944826 0.000357397 1.28571 0H4.71429C5.05517 0.000357397 5.382 0.142704 5.62305 0.395801C5.86409 0.648897 5.99966 0.992067 6 1.35V8.55C6 8.66935 5.95485 8.78381 5.87447 8.8682C5.7941 8.95259 5.68509 9 5.57143 9Z" fill="#EEEEEE" />
                            </svg>

                        </div>
                        <div>Saved</div>
                        <div style={{ fontSize: "10px", background: '#3F424A', borderRadius: "3px", padding: "0px 2px 0px 2px" }}>24</div>
                    </div>
                </div>
                <div className='chat-third-container'>
                    {/* <div>
                        <input />
                    </div> */}
                    <div class="search-container">
                        <input type="text" className="search-input" placeholder="Search..." />
                        <span class="search-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="#575B65" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 13L9.53333 9.53333" stroke="#575B65" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                    </div>
                    <div style={{ cursor: "pointer" }}>
                        {icons.search}
                    </div>
                </div>
                <div div style={{ marginTop: "10px", overflowY: "scroll" }}>

                    {chatArray.map((index) => (
                        <div className='chat-fourth-container' key={index}>
                            <div>{icons.gptIcon}</div>
                            <div>
                                <div style={{ color: "white", marginBottom: "5px", display: 'flex', justifyContent: "space-between" }}>
                                    <span>Cosmic Evolution</span>
                                    <span style={{ fontSize: "10px", color: "#ABABAB" }}>9:34 PM</span>
                                </div>
                                <div style={{ color: "#ABABAB", fontSize: "12px", lineHeight: "1.5" }}>Some 15 billion years ago the universe emerged from a hot, dense sea of...</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Chats