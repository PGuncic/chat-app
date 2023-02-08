import defineComponent from "../helpers/define-component.js";

const MessageForm = defineComponent({
    propTypes: {
        isLoading: Boolean,
        onNewMessage: Function
    },
    setupEvents() {
        this.htmlElement.addEventListener('submit', event => {
            event.preventDefault();
  
            const newMessageInput = this.htmlElement.querySelector('.newMessageInput');
            const newMessage = newMessageInput.value.trim(); 
  
            if (newMessage.length > 0) {
                this.props.onNewMessage(newMessage);
                newMessageInput.value = '';
            }
        });
    },
    template() {
        return `
            <form autocomplete="off" class="newMessageForm">
                <input
                    class="newMessageInput"
                    type="text"
                    name="reply"
                    value=""
                    placeholder="Enter your message"
                />
                <button type="submit" class="newMessageBtn">Pošalji</button>
            </form>
        `;
    }
  });

  export default MessageForm;