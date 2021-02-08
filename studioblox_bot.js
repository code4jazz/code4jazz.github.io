class TelegramBot {
	constructor() {
    }

	getInfo() {
		return {
			"id": "StudioBloxTelegram",
			"name": "TelegramBot",
			"blocks": [{
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
			}]
		};
	}

	sendMsg({ChatID, teks}) {
	var data = {
			"chat_id" : ChatID,
			"text" : teks,
		}

	return	fetch("https://api.telegram.org/bot1123142071:AAGu6LFpa9NpM_yKnLsrv2XMh5mODUjLhjY/sendMessage",{
					"method" : "POST",
					"headers" : {
						"Content-type" : "application/json"
					},
					"body" : JSON.stringify(data)			
				}
			)
			.then(response => response.text())
	}

}
Scratch.extensions.register(new TelegramBot())
