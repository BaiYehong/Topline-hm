module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 错误代码： 报错级别
    // process.env.NODE_ENV === 'production' 可以判定当前代码运行环境
    // 如果你的是开发环境，则它是false, 如果是生产环境，则它是true

    // 关闭 console.log 校验
    'no-console': 'off',
     // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}
