const path = require("path");
const outputPath = path.resolve(__dirname, "docs");

module.exports = {
    mode: "development",
    //mode: 'production',

    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "docs"),
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            includePaths: ["./node_modules"],
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

    devServer: {
        contentBase: outputPath,
        contentBasePublicPath: "/yamasaki-san",
        historyApiFallback: {
            index: "index.html",
        },
    },
};
