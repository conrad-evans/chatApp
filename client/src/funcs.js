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

const addActiveChat = (chats, messages) => {
  if (chats !== undefined) {
    return [...chats, messages];
  }
  return [messages];
};

const addActiveChatReverse = (chats, message) => {
  if (chats && chats.length > 0) {
    const { from } = chats[0];
    if (from === message.from) {
      return [message, ...chats];
    }
    return chats;
  }
  return [];
};

export {
  addChat,
  addChatReverse,
  addMessage,
  addActiveChat,
  addActiveChatReverse,
};
