class StudioBloxTelegram implements ScratchExtension {
	getInfo(): ExtensionMetadata {
		return {
			id: "StudioBloxTelegram",
			name: "Telegram Bot",
			blocks: [{
				opcode: "sendMsg",
				blockType: Scratch.BlockType.COMMAND,
				text: "SendTo [ChatID] [text]",
				func: "sendMsg",
				arguments: {
					ChatID: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: "TelegramChatID"
					},
					text: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: "Hi..Chat with SB-Lion here..."
					}
				}
			}]
		}
	}

sendMsg(ChatID, text) {
	const Http = new XMLHttpRequest();
	const url='https://api.telegram.org/botTOKEN/sendMessage?chat_id='+ ChatID + '&text=' + text;
	Http.open("POST", url);
	Http.send();
};
	
}
Scratch.extensions.register(new StudioBloxTelegram())
