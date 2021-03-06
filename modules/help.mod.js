const colors = require("colors");

exports.id = "help";

exports.onLoad = api => {
	api.commands.add("help", (msg) => {
		// Sends message to author.
		msg.author.send({embed: {
			title: ":envelope_with_arrow: Help",
			description: "Prefix: `$`",
			fields: [{
				name: "daily",
				value: "Gives you 20 Cash every 24 hours.",
			}, {
				name: "delete",
				value: "Deletes your account. Costs 50 Cash.",
			},{
				name: "fiftyfifty [Amount]",
				value: "Has a fifty fifty chance of giving you the amount, or taking it from you.",
			}, {
				name: "flip [heads / tails] [Amount]",
				value: "Flips a coin.",
			}, {
				name: "help",
				value: "This menu.",
			}, {
				name: "invite",
				value: "Gets the invite for the bot and support server.",
			}, {
				name: "new",
				value: "Creates a new account.",
			}, {
				name: "pay [Mention] [Amount]",
				value: "Pay someone an amount.",
			}, {
				name: "pickpocket [Mention]",
				value: "Has a chance of taking 10% of someone's Cash.",
			}, {
				name: "ping",
				value: "Pong!",
			}, {
				name: "private",
				value: "Prevent money being given to you and taken from you.",
			}, {
				name: "roll [1- 6] [Amount]",
				value: "Rolls a die.",
			}, {
				name: "roulette [red / black / green] [Amount]",
				value: "Spins a roulette wheel."
			}, {
				name: "servers",
				value: "Gets the amount of servers this bot is in."
			},{
				name: "slots [Amount]",
				value: "Use the slot machine."
			}, {
				name: "wallet",
				value: "Tells how much money you have.",
			}],
			thumbnail: {
				url: "https://images.emojiterra.com/twitter/512px/1f4e9.png"
			}
		}});

		// Sends message to DMs.
		msg.channel.send({embed: {
			title: ":envelope_with_arrow: Help",
			description: "Sent to the DMs!",
			thumbnail: {
				url: "https://images.emojiterra.com/twitter/512px/1f4e9.png"
			}
		}});

		// Logs in console.
		console.log(colors.green(`[Bot] ${msg.author.username} used the help command.`));
	});
};