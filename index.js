const Discord = require('discord.js');
const fs = require('fs');
const bot = new Discord.Client();
const commands = JSON.parse(fs.readFileSync('json/commands.json', 'utf8'));
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

    if((msg.content == "cool cool cool") && (msg.author.id = '85614143951892480')) {
        msg.channel.send("cool cool cool cool cool")
    }

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
        }

        if (msg.content.toLowerCase().includes("lucas ") || msg.content.toLowerCase().includes("lulu ") || msg.content.toLowerCase() === "lucas" || msg.content.toLowerCase() === "lulu") {
            msg.channel.send("Dieu")
        }
        if (msg.content.startsWith("dv type ")) {
            var str = msg.content
            msg.delete()
            str = str.replace('dv type ', '')
            msg.channel.send(str)
        }
        if (msg.content.startsWith("dv help")) {
            const embed = new Discord.RichEmbed().setColor(0x20B2AA)
            for (var cmd in commands) {
                embed.addField('\n' + commands[cmd].name + '\n', '\n**Description:** ' + commands[cmd].desc + '\n\n**Usage:** ' + commands[cmd].usage + '\n\n')
            }
            embed.setFooter("N'hésitez pas à me DM si vous avez une suggestion ou bien repéré un bug !")
            embed.setDescription('**Commandes du bot David Ghetto**\n')
            msg.channel.send(embed)
        }
        if (msg.content.startsWith("dv cat")) {
            msg.channel.send("Actualités\nAfrique\nAlcool\nAmitié\nAmour\nArgent\nArmes\nAvenir\nBattle\nBonheur\nBusiness\nCinéma\nClash\nCouple\nDélinquance\nDieu\nDivers\nDrogue\nDrôle\nÉchec\nÉcole\nEgo Trip\nÉté\nExplicit Lyrics\nFamille\nFemme\nFilm\nFoot\nFrance\nFreestyle\nGeek\nIntégration\nInternet\nJalousie\nJeu de mots\nJeunesse\nJeux Vidéo\nJustice\nLeçon de vie\nManga\nMédias\nMère\nMort\nNoël\nNuit\nOld School\nPauvreté\nPolice\nPolitique\nPresse\nPrison\nProverbe\nRacisme\nRap Game\nRap US\nRateau\nReligion\nRéussite\nRue\nRupture\nSanté\nSexe\nSociété\nSport\nTélévision\nTemps\nTerrorisme\nTolérance\nTravail\nTriste\nVie\nViolence\nVoiture\n")
        }
        if (msg.content.toLowerCase() === "dv punch " || msg.content.toLowerCase() === "dv punch") {
            var i = Math.floor(Math.random() * (punch.length - 1))
            msg.channel.send(punch[i].content)
            LastPunch.lastId = i
        }
        if (msg.content.startsWith("dv punch ") && arr.length > 2 && arr[2] !== undefined) {
            str = msg.content.replace('dv punch ', '')
            if (str.charAt(str.length - 1) == " ") {
                str = str.slice(0, -1);
            }
            var tab = []
            var t = punch.length
            var x = 0
            for (i = 0; i < t; i++) {
                var size = punch[i].tags.length
                for (var y = 0; y < size; y++) {
                    if (punch[i].tags[y] == str) {
                        tab.push(punch[i])
                        tab[x].id = i
                        x++
                    }
                }
            }
            i = Math.floor(Math.random() * (tab.length - 1))
            if (tab.length > 0) {
                msg.channel.send(tab[i].content)
                LastPunch.lastId = tab[i].id
            } else {
                msg.channel.send("Sorry fréro ta catégorie a pas été trouvée, mdr msk comment elle doit être rincée")
            }
        }
        if (msg.content.toLowerCase().includes("dv auteur ") || msg.content.toLowerCase() === "dv auteur") {
            msg.channel.send("La punch est de " + punch[LastPunch.lastId].author + " du titre " + punch[LastPunch.lastId].title + ", album " + punch[LastPunch.lastId].album)
        }
        if (msg.content.toLowerCase().includes("kaktus ") || msg.content.toLowerCase() === "kaktus") {
            msg.channel.send("Lpb des rappeuses")
        }
        if (msg.content.toLowerCase().includes("coco ") || msg.content.toLowerCase() === "coco") {
            msg.channel.send("Lpb des rappeurs")
        }
        if (msg.content.toLowerCase().includes("virgile ") || msg.content.toLowerCase().includes("vivi ") || msg.content.toLowerCase() === "virgile" || msg.content.toLowerCase() === "vivi") {
            msg.channel.send("Mon humble maître, souverain et vénéré créateur de toute chose")
        }
        if (msg.content.toLowerCase().includes("océ ") || msg.content.toLowerCase() === "océ") {
            msg.channel.send("Lpb des Serpentard")
        }
        if (msg.content.toLowerCase().includes("nejma ") || msg.content.toLowerCase() === "nejma") {
            msg.channel.send("BoT des îles et lpb des amatrices de tiramisu")
        }
        if (msg.content.toLowerCase().includes("claire ") || msg.content.toLowerCase() === "claire") {
            msg.channel.send("L'enfant de Columbiiiine, est au pieds des montaaagnes :musical_note:")
        }
        if (msg.content.toLowerCase().includes("julien ") || msg.content.toLowerCase() === "julien") {
            msg.channel.send(":flag_ma:")
        }
        if (msg.content.toLowerCase().includes("athem ") || msg.content.toLowerCase() === "athem") {
            msg.channel.send("C'est le H devant fils de pute")
        }
        if (msg.content.toLowerCase().includes("geo") || msg.content.toLowerCase().includes("géo") || msg.content.toLowerCase() === "geo" || msg.content.toLowerCase() === "géo") {
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
                case 12:
                  msg.channel.send("Géomis de mettre des blagues marrantes sur ce bot")
                  break
                case 13:
                  msg.channel.send("rges Bush")
                  break
                case 14:
                  msg.channel.send("rges Washington")
                  break
                case 15:
                  msg.channel.send("ffrey de Secret Story 5", {
                    files: [
                      "./assets/img/geoffrey.jpg"
                    ]
                  })
                  break
                case 16:
                  msg.channel.send("Géorganisé une partouze familiale et alors ?")
                  break
                case 17:
                  msg.channel.send("Géoccasionné la fin du monde à cause de mon humour")
                  break
                case 18:
                  msg.channel.send("Géobligé Virgile à pas être trop méchant sous peine de rétrogradage")
                  break
                case 19:
                  msg.channel.send("Géofficialisé ma relation avec Lucas")
                  break
                case 20:
                  msg.channel.send("Géopté pour CAP kebabier après le bac")
                  break

            }
        }


        if (msg.content.toLowerCase() === "vas-y charge le") {
            msg.channel.send("Rien qu'ça téfri...").then(function (msg) {
                var interval = setTimeout(function () {
                    msg.edit("Rien qu'ça téfri.....")
                }, 1 * 1000)
                var interval = setTimeout(function () {
                    msg.edit("Rien qu'ça téfri..........")
                }, 1 * 1000)
                var interval = setTimeout(function () {
                    msg.edit("Rien qu'ça téfri toujours..............")
                }, 1 * 1000)
                var interval = setTimeout(function () {
                    msg.edit("```(____((____________()~~~```")
                }, 1 * 1000)
            })
        }

    }
})

bot.login('MzM0MDkzMDMxNzAxNjEwNTA2.DifLJQ.jGTvGhIBgI-nhb-SwoqjCihszak')
