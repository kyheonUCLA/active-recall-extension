const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')


module.exports = {
  entry: {
    popup: path.resolve('src/popup/index.tsx'),
    background: path.resolve('src/background/background.ts'),
    content: path.resolve('src/content/index.tsx'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: insertInShadow,
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        type: 'assets/resource',
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CopyPlugin({
      patterns: [{
        from: path.resolve('src/static'),
        to: path.resolve('dist')
      }]
    }),
    ...getHtmlPlugins([
      'popup',
      'content'
    ])
  ],
  resolve: {
    extensions: ['.tsx', '.js', '.ts']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'content';
      },
      
    }
  }
}

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'React Extension',
    filename: `${chunk}.html`,
    chunks: [chunk]
  }))
}


function insertInShadow(styles) {
  if (window.location.pathname === '/') {
    const appContainer = document.createElement('div');
    appContainer.id = 'active-recall-shadow-root';
    appContainer.style.visibility = 'hidden';
    const shadowRoot = appContainer.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(styles);
    document.body.appendChild(appContainer);
    // window._shadowRoot = shadowRoot; // Store the shadow root in a global variable
  } else {
    document.head.appendChild(styles)
  }
}
