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

	return	fetch("https://script.google.com/macros/s/AKfycbxtA-vR75ljZKLcwn5p21HYNuBL8fZjWL4Eot1iDu6gg9QVhog/exec?jenis=chat&chat_id="+ ChatID + "&text=" + teks,{
					"method" : "GET"		
				}
			)
			.then(response => response.text())
	}

}
Scratch.extensions.register(new TelegramBot())
