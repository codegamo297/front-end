import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

import styles from './Messenger.module.scss';
import TopBar from '~/components/TopBar';
import Conversation from '~/components/Conversation';
import Message from '~/components/Message';
import ChatOnline from '~/components/ChatOnline';
import { AuthorContext } from '~/context/AuthorContext';

const cx = classNames.bind(styles);

function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [arrivalMessage, setArrivalNewMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const { user } = useContext(AuthorContext);

    const scrollRef = useRef();
    const textareaRef = useRef(null);
    const socketRef = useRef(io('ws://localhost:5500'));

    let userCurrentChat;
    if (currentChat) {
        userCurrentChat = currentChat.members.filter((member) => member !== user._id)[0];
    }

    useEffect(() => {
        socketRef.current.on('getMessage', (data) => setArrivalNewMessage(data));
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.senderId) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socketRef.current.emit('addUser', user._id);
        socketRef.current.on('getUsers', (users) => {
            setOnlineUsers(
                user.followings.filter((follow) => users.some((user) => user.userId === follow)),
            );
        });
    }, [user]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get('/conversations/' + user._id);
                setConversations(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getConversations();
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                if (currentChat !== null) {
                    const res = await axios.get('/messages/' + currentChat._id);
                    setMessages(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getMessages();
    }, [currentChat]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            conversationId: currentChat._id,
            senderId: user._id,
            text: newMessage,
        };

        try {
            const res = await axios.post('/messages', message);
            setMessages([...messages, res.data]);
            setNewMessage('');
            textareaRef.current.focus();
        } catch (error) {
            console.log(error);
        }

        setIsSubmit(true);
    };

    useEffect(() => {
        if (isSubmit) {
            const receiverId = currentChat?.members.find((member) => member !== user._id);

            socketRef.current.emit('sendMessage', {
                receiverId,
                msg: messages[messages.length - 1],
            });

            setIsSubmit(false);
        }
    }, [currentChat, user, messages, isSubmit]);

    return (
        <>
            <TopBar />
            <div className={cx('wrapper')}>
                <div className={cx('chat-menu')}>
                    <div className={cx('chat-menu-container')}>
                        <input placeholder="Search for friends" className={cx('chat-menu-input')} />
                        <hr className={cx('hr')} />
                        {conversations.map((conversation, index) => (
                            <div
                                key={conversation._id}
                                onClick={() => setCurrentChat(conversation)}
                            >
                                <Conversation
                                    conversation={conversation}
                                    currentUser={user}
                                    userCurrentChat={userCurrentChat}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('chat-box')}>
                    <div className={cx('chat-box-container')}>
                        {currentChat ? (
                            <>
                                <div className={cx('chat-box-top')}>
                                    {/* đang bị lỗi key */}
                                    {messages.map((message) => (
                                        <div ref={scrollRef} key={message._id}>
                                            <Message
                                                message={message}
                                                own={message.senderId === user._id}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className={cx('chat-box-bottom')}>
                                    <textarea
                                        ref={textareaRef}
                                        className={cx('chat-box-message-input')}
                                        placeholder="Write something..."
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    ></textarea>
                                    <button
                                        className={cx('chat-box-submit-btn')}
                                        onClick={handleSubmit}
                                    >
                                        Send
                                    </button>
                                </div>
                            </>
                        ) : (
                            <span className={cx('no-conversation-text')}>
                                Open a conversation to start a chat.
                            </span>
                        )}
                    </div>
                </div>
                <div className={cx('chat-online')}>
                    <div className={cx('chat-online-container')}>
                        <ChatOnline
                            onlineUsers={onlineUsers}
                            currentId={user._id}
                            setCurrentChat={setCurrentChat}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messenger;
