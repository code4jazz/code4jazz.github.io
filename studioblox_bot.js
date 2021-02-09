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
			"jenis" : "chat",
			"chat_id" : ChatID,
			"text" : teks
		}

	return	fetch("https://script.google.com/macros/s/AKfycbxtA-vR75ljZKLcwn5p21HYNuBL8fZjWL4Eot1iDu6gg9QVhog/exec?",{
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
