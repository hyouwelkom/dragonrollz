const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
let punch = JSON.parse(fs.readFileSync('json/punchlines.json', 'utf8'));
var LastPunch = {};

bot.on('ready', () => {
    bot.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
bot.user.setPresence({
    game: {
        name: "J'gratte j'gratte",
        type: 0
    }
});
});

bot.on('message', function (msg) {
    var arr = msg.content.split(" ");

    if(!msg.author.bot) {
        switch (msg.content.toLowerCase()) {
            case 'roule un dragon':
                msg.channel.send("FUME UN DRAGON")
                break
            case 'fume un dragon':
                msg.channel.send("CHARGE UN DRAGON")
                break
            case 'charge un dragon':
                msg.channel.send("VISE LES TES-TÊÊÊÊ")
                break
            case "viens dans l'hall":
                msg.channel.send("J'AI DES DRAGON BALLS")
                break
            case "dragonhelp":
                msg.channel.send("```Roule un dragon --> Fume un dragon\n Fume un dragon --> Charge un dragon\n Charge un dragon --> Vise les tes-têêê\n Viens dans l'hall --> J'ai des dragon balls\n--------------------------------------------\n vas-y charge le --> Le bot roule un dragon```")
                break
        }

        if(msg.content.toLowerCase().includes("lucas ") || msg.content.toLowerCase().includes("lulu ") || msg.content.toLowerCase() === "lucas" || msg.content.toLowerCase() === "lulu" ) {
            msg.channel.send("Dieu")
        }
        if(msg.content.startsWith("david type ")) {
            var str = msg.content
            msg.delete()
            str = str.replace('david type ', '')
            msg.channel.send(str)
        }
        if(msg.content.toLowerCase() === "david punch " || msg.content.toLowerCase() === "david punch") {
            var i = Math.floor(Math.random() * (punch.length-1))
            msg.channel.send(punch[i].content)
            LastPunch.lastId = i
        }
        if(msg.content.startsWith("david punch ") &&arr.length>2 && arr[2] !== undefined) {
            str = msg.content.replace('david punch ', '')
            if(str.charAt(str.length-1) == " ") { str.slice(-1); }
            var i = Math.floor(Math.random() * (punch.length-1))
            while(!(punch[i].tags.includes(str))) {
                i = Math.floor(Math.random() * (punch.length-1))
            }
            msg.channel.send(punch[i].content)
            LastPunch.lastId = i
        }
        if(msg.content.toLowerCase().includes("david auteur ") || msg.content.toLowerCase() === "david auteur") {
            msg.channel.send("La punch est de "+punch[LastPunch.lastId].author+" du titre "+punch[LastPunch.lastId].title+", album "+punch[LastPunch.lastId].album)
        }
        if(msg.content.toLowerCase().includes("kaktus ") || msg.content.toLowerCase() === "kaktus") {
            msg.channel.send("Lpb des rappeuses")
        }
        if(msg.content.toLowerCase().includes("coco ") || msg.content.toLowerCase() === "coco") {
            msg.channel.send("Lpb des rappeurs")
        }
        if(msg.content.toLowerCase().includes("virgile ") || msg.content.toLowerCase().includes("vivi ") || msg.content.toLowerCase() === "virgile" || msg.content.toLowerCase() === "vivi") {
            msg.channel.send("Mon humble maître, souverain et vénéré créateur de toute chose")
        }
        if(msg.content.toLowerCase().includes("océ ") || msg.content.toLowerCase() === "océ") {
            msg.channel.send("Lpb des Serpentard")
        }
        if(msg.content.toLowerCase().includes("nejma ") || msg.content.toLowerCase() === "nejma") {
            msg.channel.send("BoT des îles et lpb des amatrices de tiramisu")
        }
        if(msg.content.toLowerCase().includes("claire ") || msg.content.toLowerCase() === "claire") {
            msg.channel.send("L'enfant de Columbiiiine, est au pieds des montaaagnes :musical_note:")
        }
        if(msg.content.toLowerCase().includes("julien ") || msg.content.toLowerCase() === "julien") {
            msg.channel.send(":flag_ma:")
        }
        if(msg.content.toLowerCase().includes("athem ") || msg.content.toLowerCase() === "athem") {
            msg.channel.send("C'est le H devant fils de pute")
        }
        if(msg.content.toLowerCase().includes("geo") || msg.content.toLowerCase().includes("géo") || msg.content.toLowerCase() === "geo" || msg.content.toLowerCase() === "géo") {
            var i = Math.floor(Math.random() * 12)
            switch (i) {
                case 0:
                    msg.channel.send("graphie")
                    break
                case 1:
                    msg.channel.send("logie")
                    break
                case 2:
                    msg.channel.send("thermie")
                    break
                case 3:
                    msg.channel.send("politique")
                    break
                case 4:
                    msg.channel.send("Je fais des bisous avec le nez")
                    break
                case 5:
                    msg.channel.send("Géoublié de tirer la chasse")
                    break
                case 6:
                    msg.channel.send("morphologique")
                    break
                case 7:
                    msg.channel.send("métrie")
                    break
                case 8:
                    msg.channel.send("physicienne")
                    break
                case 9:
                    msg.channel.send("J'envoie des snap en 144p")
                    break
                case 10:
                    msg.channel.send("Geoxx la chaussure qui respire", {
                        files: [
                            "./assets/img/geo2.png"
                            ]
                    })
                    break
                case 11:
                    msg.channel.send("", {
                        files: [
                            "./assets/img/geo1.jpeg"
                            ]
                    })
                    break

            }
        }



        if(msg.content.toLowerCase() === "vas-y charge le") {
            msg.channel.send("J'effrite...").then(function (msg) {
                var interval = setTimeout(function() {
                    msg.edit("J'effrite.....")
                }, 1 * 1000)
                var interval = setTimeout(function() {
                    msg.edit("J'effrite..........")
                }, 1 * 1000)
                var interval = setTimeout(function() {
                    msg.edit("J'effrite toujours..............")
                }, 1 * 1000)
                var interval = setTimeout(function() {
                    msg.edit("C'est prêt ! ```(____((____________()~~~```")
                }, 1 * 1000)
            })
        }
    }

})


bot.login('MzM0MDkzMDMxNzAxNjEwNTA2.DifLJQ.jGTvGhIBgI-nhb-SwoqjCihszak')
