module.exports = {
    content: [
      './index.html',       // 扫描根目录下的 index.html
      './script.js',        // 扫描根目录下的 script.js
      './styles.css',       // 扫描根目录下的 styles.css
      './src/**/*.{html,js,css}', // 扫描 src 目录下所有的 .html、.js 和 .css 文件
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  
