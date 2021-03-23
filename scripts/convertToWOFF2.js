var path = require("path");
var fs = require("fs-extra");
var ttf2woff2 = require("ttf2woff2");
var yargs = require("yargs");

const DEST_PATH = path.resolve("dist/fonts");

async function convertToWOFF2(fontInputPath) {
	console.log(`Converting "${fontInputPath}" to WOFF2 format...`);
	const outputPath = path.join(
		DEST_PATH,
		path.dirname(fontInputPath),
		`${path.basename(fontInputPath, ".ttf")}.woff2`
	);

	const inputPath = path.join("source", fontInputPath);

	await fs.outputFile(outputPath, ttf2woff2(fs.readFileSync(inputPath)));
	console.log(`Done! Saved the font to "${outputPath}".`);
}

module.exports = convertToWOFF2;

// Allow using from CLI
const fontPaths = yargs.argv._;

if (fontPaths.length > 0) {
	for (const fontPath of fontPaths) {
		convertToWOFF2(fontPath);
	}
} else {
	var fontsJSON = require("../dist/fonts.json");

	for (const fontType in fontsJSON) {
		fontsJSON[fontType].fontFiles.forEach((fileName) => {
			const fontPath = path.join(
				fontType,
				path.basename(fileName, ".woff2")
			);

			convertToWOFF2(`${fontPath}.ttf`);
		});
	}
}
