class ScratchKokaro {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Kokaro",
            "name": "Fetch",
            "blocks": [
                        {
                            "opcode": "ambilRujak",
                            "blockType": "reporter",
                            "text": "ambil rujak dari [warung]",
                            "arguments": {
                                "warung": {
                                    "type": "string",
                                    "defaultValue": "cak bocil"
                                },
                            }
                        },
                        {
                            "opcode": "colekPetis",
                            "blockType": "reporter",
                            "text": "colek [name] dari [tempat]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": "petis"
                                },
                                "tempat": {
                                    "type": "string",
                                    "defaultValue": "cobek"
                                },
                            }
                        },
                ],
        };
    }
    
    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
    
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}

Scratch.extensions.register(new ScratchKokaro())