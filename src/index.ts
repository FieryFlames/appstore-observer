import { EmbedBuilder, WebhookClient } from "discord.js";
import type { Lookup } from "./lookup.js";

if (!process.env.WEBHOOK || !process.env.APPLICATION_ID) {
	console.log("Missing configuration data! set WEBHOOK and APPLICATION_ID environment variables!");
	process.exit(1);
};

const webhook = new WebhookClient({ url: process.env.WEBHOOK });

let latestVersion = "0.0";

async function checkForUpdates() {
	const lookup = await (await fetch(`https://itunes.apple.com/lookup?id=${process.env.APPLICATION_ID}`)).json() as Lookup

	const app = lookup.results[0]

	if (latestVersion !== app.version) {
		latestVersion = app.version

		const updateEmbed = new EmbedBuilder({
			author: {
				name: app.trackName,
				url: app.trackViewUrl
			},
			thumbnail: {
				url: app.artworkUrl512
			},
			title: `New version released - ${app.version}`,
			description: app.releaseNotes,
			timestamp: app.currentVersionReleaseDate,
			footer: {
				text: app.bundleId
			}
		})

		await webhook.send({ embeds: [updateEmbed] })
	}

	setTimeout(async () => await checkForUpdates(), 15 * 1000 * 60)
}

await checkForUpdates()
