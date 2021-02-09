class TelegramBot {
	constructor() {
    }

	getInfo() {
		return {
			"id": "StudioBloxTelegram",
			"name": "Telegram Blox",
			"iconURI" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DE" +
            "UIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==",
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
				"text": "MsgReceived"
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

	readMsg() {
		return fetch("https://script.google.com/macros/s/AKfycbxtA-vR75ljZKLcwn5p21HYNuBL8fZjWL4Eot1iDu6gg9QVhog/exec?jenis=read",{
					"method" : "GET"		
				}
			)
			.then(response => response.text())
		//var obj = JSON.parse(data)
		//return data
	}

}
Scratch.extensions.register(new TelegramBot())
