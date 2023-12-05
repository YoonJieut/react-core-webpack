const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 진입점 설정: TypeScript 파일을 진입점으로 설정
  entry: './src/index.tsx', // 또는 index.ts
  mode: 'development', // mode를 설정해주고 script로 빠르게 시작할 수 있다.
  // 출력 설정
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 모듈 해석 방법 설정: TypeScript와 JavaScript 파일을 해석
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // 모듈 처리 방법 설정
  module: {
    rules: [
      // TypeScript 파일 처리
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSS 파일 처리
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // 개발 서버 설정
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },

  // 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML 템플릿 파일 경로
    }),
  ],
};
