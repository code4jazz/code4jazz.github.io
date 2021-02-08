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
	let data = {
			'chat_id' : ChatID,
			'text' : text,
		};

		fetch('https://api.telegram.org/bot1123142071:AAGu6LFpa9NpM_yKnLsrv2XMh5mODUjLhjY/sendMessage',{
					method : 'POST',
					headers : {
						'Content-type' : 'application/json'
					},
					body : JSON.stringify(data)			
				}
			)
			.then(res => res.text())
			.then(teks => console.log(teks))
			.catch(err => console.log(err));
};
	
}
Scratch.extensions.register(new StudioBloxTelegram())
