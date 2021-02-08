class TelegramBot {
	constructor() {
    }

	getInfo() {
		return {
			"id": "StudioBloxTelegram",
			"name": "TelegramBot",
			"blocks": [{
				"opcode": "sendMsg",
				"blockType": "COMMAND",
				"text": "Send [text] To [ChatID]",
				"func": "sendMsg",
				"arguments": {
					"ChatID": {
						"type": "STRING",
						"defaultValue": "TelegramChatID"
					},
					"text": {
						"type": "STRING",
						"defaultValue": "Hi"
					}
				}
			}]
		}
	


	
}
}
Scratch.extensions.register(new TelegramBot())
