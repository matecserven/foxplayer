const trackList = document.querySelector('.trackList');
const BACKEND = 'http://localhost:3000';

const trackHandler = {
  createRow(id, trackTitle, trackDuration) {
    const row = document.createElement('div');
    const serial = document.createElement('div');
    const title = document.createElement('div');
    const duration = document.createElement('div');
    row.classList.add('trackRow');

    row.appendChild(serial);
    row.appendChild(title);
    row.appendChild(duration);

    serial.innerText = id;
    title.innerText = trackTitle;
    const minutes = Math.floor(trackDuration / 60);
    const seconds = trackDuration - minutes * 60;
    duration.innerText = `${minutes}:${seconds}`;

    return row;
  },

  createList(list) {
    list.forEach((track, id) => {
      trackList.appendChild(this.createRow(id + 1, track.title, track.duration));
    });
  },

  async fetchTracklist() {
    try {
      const result = await fetch(`${BACKEND}/api/tracks`);
      return result.json();
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default trackHandler;
