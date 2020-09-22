/* eslint-disable no-console */
import noUiSlider from 'nouislider';

const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.pause');
const audioPlayer = document.querySelector('audio');

audioPlayer.addEventListener('loadstart', () => {
  audioPlayer.play();
});

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
  }
});

stopButton.addEventListener('click', () => {
  if (audioPlayer.played) {
    audioPlayer.pause();
  }
});

// eslint-disable-next-line import/prefer-default-export
export const fetchFile = () => fetch('http://localhost:3000/api/tracks/file/1')
  .then((response) => response.blob())
  .then((track) => {
    const audio = document.querySelector('audio');
    audio.src = URL.createObjectURL(track);
    audio.load();
  })
  .catch(console.error);

const slider = document.querySelector('#slider');

noUiSlider.create(slider, {
  start: 0,
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  },
});
