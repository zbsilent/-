module.exports = {
  mode: 'development',
  entry:'./app/index.js',
  output:{
    filename:'bundle.js'
  },
  devServer:{
    inline:true,
    contentBase:'./app',
    port:9080,
    open:true
  },
  module:{
    rules:[{
      test:/\.css$/,
      use:['style-loader','css-loader']
    },
    {
      test:/\.js$/,
      use:['react-hot-loader','babel-loader'],
      exclude:/node_modules/
    }

  ]
  }


}
