import fs from "fs";
import path from "path";
import { parseSync as parseSVG } from "svgson";
import webpack from "webpack";

const icons = {};
let iconDir = path.resolve(__dirname, "node_modules/simple-icons/icons");
for (const icon of fs.readdirSync(iconDir).map((file) => ({ name: path.parse(file).name, content: fs.readFileSync(path.join(iconDir, file)) }))) {
    const svg = parseSVG(icon.content);
    icons[icon.name] = {
        viewBox: svg.attributes.viewBox,
        path: svg.children.find((child) => child.name == "path").attributes.d
    };
}

/** @type {import('webpack').Configuration} */
const config = {
    mode: "development",
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "simple-icons.js"
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.DefinePlugin({
            "process.env.ICONS": JSON.stringify(icons)
        })
    ]
};

export default config;
