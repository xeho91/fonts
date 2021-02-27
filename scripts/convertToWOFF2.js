var path = require("path");
var fs = require("fs");
var ttf2woff2 = require("ttf2woff2");

function convertToWOFF2(fontInputPath, fontOutputPath) {
	const input = fs.readFileSync(fontInputPath);

	return fs.writeFileSync(fontOutputPath, ttf2woff2(input));
}

// Monospace
convertToWOFF2(
	path.resolve("monospace", "source", "FiraCode-VF.ttf"),
	path.join("monospace", "Fira-Code.woff2")
);

// Sans-serif
convertToWOFF2(
	path.resolve("sans-serif", "source", "WorkSans[wght].ttf"),
	path.join("sans-serif", "Work-Sans.woff2")
);
convertToWOFF2(
	path.resolve("sans-serif", "source", "WorkSans-Italic[wght].ttf"),
	path.join("sans-serif", "Work-Sans_italic.woff2")
);

// Serif
convertToWOFF2(
	path.resolve("serif", "source", "Fraunces[SOFT,WONK,opsz,wght].ttf"),
	path.join("serif", "Fraunces.woff2")
);
convertToWOFF2(
	path.resolve("serif", "source", "Fraunces-Italic[SOFT,WONK,opsz,wght].ttf"),
	path.join("serif", "Fraunces_italic.woff2")
);
