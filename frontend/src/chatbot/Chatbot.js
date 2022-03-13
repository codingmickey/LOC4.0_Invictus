/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Post from './Post';
import Link from './Link';
import Link2 from './Link2';
import Link3 from './Link3';
import './ChatBot.css';
import Link4 from './Link4';
const theme = {
  background: '#fdfeff',
  fontFamily: 'Poppins',
  headerBgColor: '#208de2',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#208de2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#1c3f65'
};

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot'
};

const Chatbot = () => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname'
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname'
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true;
                } else {
                  return 'Please input alphabet characters only.';
                }
              },
              trigger: 'rmcbot'
            },
            {
              id: 'rmcbot',
              message: 'Hi,{previousValue} I am Connectify Bot! Where can I help you? ',
              trigger: 'qtype'
            },
            {
              id: 'qtype',
              options: [
                { value: 1, label: 'Instagram?', trigger: '4' },
                { value: 2, label: ' LinkedIn?', trigger: '3' },
                { value: 3, label: 'FaceBook?', trigger: '5' },
                { value: 4, label: 'Twitter?', trigger: '6' }
              ]
            },
            {
              id: '3',
              component: <Link3 />,
              trigger: 'qtype'
            },
            {
              id: '4',
              component: <Link />,
              trigger: 'qtype'
            },
            {
              id: '5',
              component: <Link4 />,
              trigger: 'qtype'
            },
            {
              id: '6',
              component: <Link2 />,
              trigger: 'q-submit'
            },
            {
              id: 'q-submit',
              message: 'Do you have any other questions !?',
              trigger: 'submit'
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'no-submit' },
                { value: 'n', label: 'No', trigger: 'end-message' }
              ]
            },
            {
              id: 'no-submit',
              options: [
                { value: 1, label: 'Instagram?', trigger: '4' },
                { value: 2, label: ' LinkedIn?', trigger: '3' },
                { value: 3, label: 'FaceBook?', trigger: '5' },
                { value: 4, label: 'Twitter?', trigger: '6' }
              ]
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true
            }
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => {
            return (
              startChat()
            )
          }}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Chatbot;
