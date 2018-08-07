const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', ready => {
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setGame("Discord.js")
})

client.on('message', message => {

const arraySay = ['Que dirais-tu d\'une nouvelle maison? (James)',
'Cherches-tu à investir?  (James)',
'Je me demande pourquoi cette maison est si bon marché.  (James)',
'Les frais de guilde pour ce mois sont de...  (Dony)',
'Tu... Tu désires fonder une guilde?  (Dony)',
'Je peux t\'aider?  (Sofia)',
'Tu dois d\'abord prendre un numéro  (Sofia)',
'Waa! Regarde-toi! Tu grandis à vue d\'œil!  (Amy)',
'Youhou! Que dirais-tu d\'un petit familier?  (Amy)',
'Si ça concerne les familiers, je te répondrai volontiers  (Amy)',
'Que dirais-tu de jeter un coup d\'œil à mes marchandises? (Crispin)',
'Bienvenue! Content de te voir  (Crispin)',
'Déjà entendu parler d\'une armure en écaille de Dragon?  (Davy)',
'Hé! Salut! Alors, combien de dragons as-tu déjà tué?  (Davy)',
'Si tu as soif, pourquoi ne pas en profiter pour goûter une de mes nouvelles potions?  (Daisy)',
'Eeh... Ça ne nous rajeunit pas tout ça...  (Jérémy)',
'Ouais! T\'es génial(e)!  (Léo)',
'T\'as qu\'à demander: t\'es trop génial(e)!  (Léo)',
'J\'aimerais être aussi génial que toi quand j\'serai grand  (Léo)',
'Tout va bien pour l\'instant: j\'ouvre l\'œil, et le bon!  (Victor)',
'Bien le bonjour; que puis-je faire pour toi?  (Victor)',
'Quelque chose te tracasse?  (Colin)',
'Ce manteau ne te servira à rien par ce temps!  (Steven Jr)',
'Avons-nous à faire?  (Colin)',
'Qu\'est-ce qui t\'a amené(e) à venir me trouver ici?  (Steven Jr)',
'En quoi puis-je t\'être utile?  (Vincent)',
'Bien le bonjour!  (Vincent)',
'Wow! Quel temps magnifique!  (Cindy)',
'Qu\'est-ce qui t\'amène auprès de moi?  (Cindy)',
'N\'aurais-tu pas croisé des jeunes et arrogants fils à papa sur ta route?  (Cindy)',
'soupir... Je suppose qu\'il me reste encore beaucoup à apprendre  (Edeline)',
'Et si tu commençais par arrêter de me regarder comme ça?  (Cindy)',
'As... As-tu besoin de me parler?  (Edeline)',
'Que... Que puis-je faire pour toi?  (Edeline)',
'Rien de tel qu\'une jeunesse active!  (Evan)',
'Cette armure s\'alourdit d\'année en année...  (Evan)',
'Salut! Alors, quoi de neuf?  (Rony)',
'La magie n\'est pas une chose aisée!  (Edeline)',
'Il n\'y a personne pour venir boire un thé?  (Rony)',
'Tel maître, tel épée. À quoi ressemble la tienne?  (Evan)',
'Tu dois être parfaitement préparé si tu veux servir dignement quelqu\'un!  (Evan)',
'Rien de tel qu\'une bonne blonde bien fraîche  (Rudolph)',
'Viens te détendre autour d\'un p\'ti verre!  (Rudolph)',
'J\'espère que le ciel va rester dégagé!  (Florane)',
'Il faut prendre le temps de bien se reposer avant de repartir à l\'aventure  (Florane)',
'Bienvenue! Nous proposons les meilleures chambres de la ville!  (Florane)',
'tchling tchling  (Chef Brutus)']


    if (message.content === "!say") {
        message.reply(arraySay[Math.floor(Math.random() * arraySay.length)])
    }
})



client.login('token')
