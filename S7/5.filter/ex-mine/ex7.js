const input = document.querySelector('input');

input.addEventListener('input', () => {
  const word = event.target.value;

  const filteredStreamers = streamers.filter(streamer => streamer.name.includes(word));

  console.log(filteredStreamers);
});