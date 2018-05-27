const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
bot.user.setPresence({
    game: {
        name: 'Rouler des dinosaures',
        type: 0
    }
});
});

bot.on('message', function (msg) {

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

        if(msg.content.toLowerCase().includes("lucas") || msg.content.toLowerCase().includes("lulu")) {
            msg.channel.send("Dieu")
        }
        if(msg.content.toLowerCase().includes("maja")) {
            msg.channel.send("La meuf à Virgile")
        }
        if(msg.content.toLowerCase().includes("kaktus")) {
            msg.channel.send("Lpb des rappeuses")
        }
        if(msg.content.toLowerCase().includes("pingu")) {
            msg.channel.send("Nique ta mère emoji de mort")
        }
        if(msg.content.toLowerCase().includes("coco")) {
            msg.channel.send("Lpb des rappeurs")
        }
        if(msg.content.toLowerCase().includes("virgile") || msg.content.toLowerCase().includes("vivi")) {
            msg.channel.send("Mon humble maître, souverain et vénéré créateur de toute chose")
        }
        if(msg.content.toLowerCase().includes("océ")) {
            msg.channel.send("Lpb des Serpentard")
        }
        if(msg.content.toLowerCase().includes("luka")) {
            msg.channel.send("Le mec à l'aise")
        }
        if(msg.content.toLowerCase().includes("nejma")) {
            msg.channel.send("BoT des îles et lpb des amatrices de tiramisu")
        }
        if(msg.content.toLowerCase().includes("isma")) {
            msg.channel.send(":poop: Roi des cacas :poop:")
        }
        if(msg.content.toLowerCase().includes("remy")) {
            msg.channel.send("J'ai bien entendu \"Rémy\" le Roi des fdp ?")
        }
        if(msg.content.toLowerCase().includes("claire")) {
            msg.channel.send("L'enfant de Columbiiiine, est au pieds des montaaagnes :musical_note:")
        }
        if(msg.content.toLowerCase().includes("geo") || msg.content.toLowerCase().includes("géo")) {
            //var i = Math.floor(Math.random() * 12)
            var i = 10
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
                        file: "./assets/img/geo2.png"
                    })
                    break
                case 11:
                    msg.channel.send("", {
                        files: [
                            "./assets/img/geo1.jpg"
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


bot.login('MzM0MDkzMDMxNzAxNjEwNTA2.Dd5u3Q.YwSESfsiZ-9RTStB9bsC9SRxPOk')
