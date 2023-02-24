const scoreForm = document.getElementById('score-form');

const showFeedBack = (msg) => {
  const msgContent = document.createElement('span');

  if (msg.includes('provide')) {
    msgContent.className = 'error';
    msgContent.textContent = `${msg}`;
    scoreForm.append(msgContent);
  } else {
    msgContent.className = 'success';
    msgContent.textContent = `${msg}`;
    scoreForm.append(msgContent);
  }

  setTimeout(() => {
    scoreForm.removeChild(msgContent);
  }, 4000);
};

export default showFeedBack;
