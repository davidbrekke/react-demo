export default () => {
  return (
    <article id="configure-webpack">
      <h2>configure webpack</h2>
      <p>
        In order for webpack to know how to bundle our files we need to add a
        webpack.config.js file in the root of our project and add some basic
        configuration
      </p>
      <pre className="code">
        {`
    const HtmlWebpackPlugin = require("html-webpack-plugin")
    const mode = process.env.NODE_ENV || "development"
    
    module.exports = {
      mode,
    
      resolve: {
        extensions: [".js", ".jsx"],
      },
    
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
        ],
      },
    
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ],
    
      devServer: {
        contentBase: "./dist",
        hot: true,
      },
    }
    
    `}
      </pre>
    </article>
  )
}
