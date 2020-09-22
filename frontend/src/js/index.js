/* eslint-disable no-console */
import '../css/index.css';
// import { fetchFile } from './audioControl';
import trackHandler from './trackList';

const loadTracks = async () => {
  try {
    const list = await trackHandler.fetchTracklist();
    trackHandler.createList(list);
  } catch (error) {
    console.error('Something bad happened', error);
  }
};

loadTracks();
