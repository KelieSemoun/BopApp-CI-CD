import * as path from 'path';

export default {
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true },
        },
        enforce: 'post',
        include: path.join(__dirname, '..', 'src'),
        exclude: [/\.cy\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
      },
    ],
  },
};
