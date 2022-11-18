import showFeedBack from './feedback.js';

const scoreList = document.querySelector('.list-of-scores');
const gameId = 'tn99E7UcmDeIUso1FvxP';

export const displayScores = ({ user, score }) => {
  const div = document.createElement('div');
  div.className = 'score-item';
  div.innerHTML = `
  <i class="fa-solid fa-user-tie"></i>
  <span class="name">${user}</span>
  <span class="score">${score}</span>
    `;

  return div;
};

export const getAllGameScores = async () => {
  try {
    const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
    const data = await res.json();

    if (!res.ok) {
      return data;
    }

    const scores = data.result;

    scoreList.innerHTML = '';
    scores.forEach((score) => {
      scoreList.append(displayScores(score));
    });

    return scores;
  } catch (error) {
    return error;
  }
};

export const addNewScore = async (newScore) => {
  try {
    const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScore),
    });
    const data = await res.json();

    if (!res.ok) {
      showFeedBack(data.message);
      return data;
    }

    getAllGameScores();
    showFeedBack(data.result);
    return data;
  } catch (error) {
    return error;
  }
};

export const createNewGame = async () => {
  const newGame = {
    name: 'Victoria Tumwebaze Game',
  };

  try {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    });

    const data = await res.json();

    if (!res.ok) {
      return data;
    }
    return data;
  } catch (error) {
    return error;
  }
};
