const { AoiClient } = require("aoi.js");
const client = new AoiClient({
	token: process.env.TOKEN,
	prefix: ',',
	intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildMembers'],
	events: ['onMessage', 'onInteractionCreate'],
  database: {
    type: 'aoi.db',
    db: require('@akarui/aoi.db'),
    dbType: 'KeyValue',
    tables: ['main'],
    securityKey: 'a-32-characters-long-string-here',
  }
 });

client.loadCommands('./commands/', true);

require('./resources/clientStatus.js')(client);
require('./resources/customFunctions.js')(client);
require('./resources/globalVariables.js')(client);
require('./resources/userVariables.js')(client);
require('./resources/messageVariables.js')(client);

/*
client.functionErrorCommand({
	channel: '1160373722092425226',
	code: `
	$title[— Error encontrado!]
	$addField[🐛 Dados do Problema:;> 📄 Nome do Comando: $handleError[command]\n> ⭕ Função: $handleError[function]]
	$addField[🐛 Erro:;$handleError[error]]
	$color[#FF0000]
	$addTimestamp
	$channelSendMessage[$channelID;❌ — Ocorreu um erro inesperado! Espere alguns minutos para usar o comando novamente.]
	`
});*/