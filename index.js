const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { 
  const date = new Date();
  const options = {
    timeZone: '	Africa/Casablanca', //https://www.zeitverschiebung.net and find your city and enter here.
    hour12: true,//set false if you want 24 hour.
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('VALUE') // make your bot in discord.com/developers and paste the application ID here.
    .setType('STREAMING')//set the type of activity [ STREAMING ; LISTENING ; WATCHING ...].
    .setURL('VALUE') //Must be a youtube video link or twitch.
    .setState('VALUE')//Set the name of label (title).
    .setName('VALUE')
    .setDetails(`VALUE`) //[${formatTime()}] and this for showing time of stream (chrono).
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('VALUE') //You can put links in tenor or discord and etc. 
    .setAssetsLargeText('VALUE') //Text when you hover the Large image
    
.setAssetsSmallImage('VALUE') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('VALUE') //Text when you hover the Small image
    .addButton('BUTON 1', 'LINK 1')
    .addButton('BUTON 2', 'LINK 2');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `VALUE`; //[${newTime}] set this for time OR keep it with no value 
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }); // Update every second
});


client.login("PUT AACOUNT TOKEN HERE");
