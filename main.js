import './style.css';
import getRandomUsername from './helpers/get-random-username.js';
import createApi from './create-api.js';
import MessageList from './components/message-list.js';
import MessageForm from './components/message-form.js';

const appContainer = document.querySelector(".app");
const currentUser = getRandomUsername();

const messageList = new MessageList({
    currentUser: currentUser,
    messages: []
});
const messageForm = new MessageForm({
    isLoading: true,
    onNewMessage: newMesageText => {
        api.sendMessage({
            author: currentUser,
            text: newMesageText
        });
    }   
});

appContainer.append(messageList.htmlElement);
appContainer.append(messageForm.htmlElement);

const api = createApi({
    onReady() {
        messageForm.updateProp('isLoading', false);
    },
    onMessagesUpdate(updatedMessages) {
        messageList.updateProp('messages', updatedMessages);
    }
});