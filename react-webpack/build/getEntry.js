const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ENTRY_NUM = 12;

function getEntry() {
  const entry = {};
  for (var i = 1; i <= ENTRY_NUM; i++) {
    let q = i;
    if (i < 10) {
      q = '0' + i;
    }
    entry[`demo${q}`] = [`./src/demo${q}/index.jsx`];
  }
  entry.entry = ['./src/entry/index.jsx'];
  return entry;
}
function getHtmlWebpackPlugin() {
  const array = [];
  for (var i = 1; i <= ENTRY_NUM; i++) {
    let q = i;
    if (i < 10) {
      q = '0' + i;
    }
    array.push(
      new HtmlWebpackPlugin({
        path: path.resolve('./dist'),
        template: './index.html',
        filename: `./demo${q}/index.html`,
        chunks: [`demo${q}`],
      })
    );
  }
  return array;
}

const htmlEntry = getHtmlWebpackPlugin();

htmlEntry.push(
  new HtmlWebpackPlugin({
    template: './index.html',
    filename: `./index.html`,
    chunks: ['entry'],
  })
);

module.exports = {
  entry: getEntry(),
  htmlEntry,
};
