const { resolve } = require('path');
const { PROJECT_PATH, isDev } = require('../constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PLUGINS = [
	// 配置html，自动引入打包出的js文件
	new HtmlWebpackPlugin({
		template: resolve(PROJECT_PATH, './public/index.html'),
		filename: 'index.html',
		cache: false,
		minify: isDev
			? false
			: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
					collapseBooleanAttributes: true,
					collapseInlineTagWhitespace: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true,
					minifyCSS: true,
					minifyJS: true,
					minifyURLs: true,
					useShortDoctype: true,
				},
	}),
];

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
              sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
              importLoaders: 0, // 指定在 CSS loader 处理前使用的 laoder 数量
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被 less-loader 处理，所以这里设置为 1
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
      {
        // 通用文件则使用 asset，此时会按照默认条件自动决定是否转换为 Data URI
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset",
        parser: {
          // 如果文件大小小于 8kb，那么会转换为 data URI，否则为单独文件。
          // 8kb 是默认值，你可以根据需要进行调整
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
    ]
  },
  plugins: PLUGINS,
}
