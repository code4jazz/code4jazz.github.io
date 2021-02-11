const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');


class Scratch3TelegramBlox {
	constructor(runtime) {
		this.runtime = runtime;
    }

	getInfo() {
		return {
			"id": "telegramblox",
			"name": "Telegram Blox",
			"blocks": [
			{
				"opcode": "sendMsg",
				"blockType": "command",
				"text": "Send [teks] To [ChatID]",
				"arguments": {
					"ChatID": {
						"type": "string",
						"defaultValue": "TelegramChatID"
					},
					"teks": {
						"type": "string",
						"defaultValue": "Hi"
					}
				}
			},
			{
				"opcode": "readMsg",
				"blockType": "reporter",
				"text": "MsgReceived [teks]",
				"arguments": {
					"ChatID": {
						"type": "string",
						"defaultValue": "TelegramChatID"
					},
					"teks": {
						"type": "string",
						"defaultValue": "MsgReceived"
					}
				}
			}]
		};
	}

	sendMsg({ChatID, teks}) {
	var data = {
			"jenis" : "chat",
			"chat_id" : ChatID,
			"text" : teks
		}

	return	fetch("https://script.google.com/macros/s/AKfycbxtA-vR75ljZKLcwn5p21HYNuBL8fZjWL4Eot1iDu6gg9QVhog/exec?jenis=chat&chat_id="+ ChatID + "&text=" + teks,{
					"method" : "GET"		
				}
			)
			.then(response => response.text())
	}

	readMsg({ChatID, teks}) {
	return  fetch("https://script.google.com/macros/s/AKfycbxtA-vR75ljZKLcwn5p21HYNuBL8fZjWL4Eot1iDu6gg9QVhog/exec?jenis=read",{
					"method" : "GET"		
				}
			)
			.then(response => response.text())
	}

}
Scratch.extensions.register(new Scratch3TelegramBlox())
