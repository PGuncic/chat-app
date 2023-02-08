import defineComponent from "../helpers/define-component.js";

const MessageList = defineComponent({
    propTypes: {
        currentUser: String,
        messages: Array
    },
    isMyMessage(message) {
        return this.props.currentUser === message.author;
    },
    template() {
        return `
            <div>
                <p class="currentUserName">${this.props.currentUser}</p>
                <ul class="messageList">
                    ${this.props.messages.map(message => `
                        <li class="messageBox ${this.isMyMessage(message) ? 'myMessage' : 'recipientMessage'}">
                            <span class="author">${message.author}</span>
                            <p class="text">${message.text}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
  });

  export default MessageList;