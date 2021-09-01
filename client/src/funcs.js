const addChat = (prevData, message) => {
  const { from } = message;
  const chatToBeUpdated = prevData[from];
  const newData = { ...prevData };

  if (chatToBeUpdated !== undefined) {
    chatToBeUpdated.push(message);
    newData[from] = chatToBeUpdated;
    return newData;
  }
  newData[from] = [message];
  return newData;
};

const addChatReverse = (prevData, message) => {
  const { to } = message;
  const chatToBeUpdated = prevData[to];
  const newData = { ...prevData };

  if (chatToBeUpdated !== undefined) {
    chatToBeUpdated.push(message);
    newData[to] = chatToBeUpdated;
    return newData;
  }
  newData[to] = [message];
  return newData;
};

function addMessage(chats, message) {
  const newChats = chats.filter((chat) => chat.from !== message.from);
  return [...newChats, message];
}

export { addChat, addChatReverse, addMessage };
