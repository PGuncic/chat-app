// Api model
export default function createApi({
    onMessagesUpdate,
    onReady
  } = {}) {
    const drone = new Scaledrone('DOKxbdrSiehFAXBb');
    const room = drone.subscribe('chat_room');
    const messages = [];
  
    room.on('open', error => {
        if (error) {
            return console.error(error);
        }
        console.log('connected to room');
        onReady();
    });
  
    room.on('message', message => {
        // Received a message sent to the room
        messages.push(message.data);
        onMessagesUpdate(messages);
    });
  
    return {
        sendMessage(message) {
            return drone.publish({
                room: 'chat_room',
                message: message
            });
        }
    };
  }