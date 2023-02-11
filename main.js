import './style.css';
import getRandomUsername from './helpers/get-random-username.js';
import MessageList from './components/message-list.js';
import MessageForm from './components/message-form.js';

const drone = new Scaledrone('DOKxbdrSiehFAXBb');
const room = drone.subscribe('chat_room');
const appContainer = document.querySelector(".app");
const currentUser = getRandomUsername();
const messages = [];

const messageList = new MessageList({
    currentUser: currentUser,
    messages: messages
});
const messageForm = new MessageForm({
    isLoading: true,
    onNewMessage: newMesageText => {
        drone.publish({
            room: 'chat_room',
            message: {
                author: currentUser,
                text: newMesageText
            }
        });
    }   
});

appContainer.append(messageList.htmlElement);
appContainer.append(messageForm.htmlElement);
  
room.on('message', message => {
    // Received a message sent to the room
    messages.push(message.data);
    messageList.updateProp('messages', messages);
});