'use strict';

try {
  require('wtfnode').init();
} catch (err) {}
const { Client } = require('discord-rpc');
const clientId = '479323753847848969';
const rpcclient = new Client({ transport: 'ipc' });

rpcclient.on('ready', () => {
  rpcclient.subscribe('ACTIVITY_JOIN', ({ secret }) => {
    console.log('Хочет присоедениться:', secret);
  });
  rpcclient.subscribe('ACTIVITY_SPECTATE', ({ secret }) => {
    console.log('Хочет посмотреть вашу игру:', secret);
  });
  rpcclient.subscribe('ACTIVITY_JOIN_REQUEST', (user) => {
    console.log('Пользователь хочет присоедениться:', user);
  });

  rpcclient.setActivity({
    state: 'jail на SG',
    details: '178.170.189.242:27016',
    startTimestamp: new Date(),
    largeImageKey: 'ae_large',
    largeImageText: 'опа, а ты приемный!',
    smallImageKey: 'ae',
    smallImageText: 'лошок',
    partyId: 'snek_party',
    partySize: 99,
    partyMax: 100,
    matchSecret: 'slithers',
    joinSecret: 'boop',
    spectateSecret: 'sniff',
    instance: true,
  })
});

rpcclient.login({ clientId }).catch(console.error);
