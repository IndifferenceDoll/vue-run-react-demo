const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: [ '.js', '.vue', '.ts', '.tsx' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [//按顺序
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ],
        include: [ path.resolve(__dirname, "../src/vueComp") ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true,//此配置用来打开利于css调试的sourcemap
              modules: {//此配置用来开启样式模块化，为true时启用，false时关闭，未设置localIdentName时样式名为无规则乱码
                //localIdentName，此配置在3.2.0之前与modules平级，3.2.0之后，modules可为对象(为对象时，默认开启模块化)，配置与其中
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          }
        ],
        include: [ path.resolve(__dirname, "../src/reactComp") ]
      },
      // {
      //   test: /\.tsx?$/i,
      //   use: [
      //     {
      //       loader: 'ts-loader'
      //     }
      //   ],
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html'
    }),
    new VueLoaderPlugin()
  ],
}