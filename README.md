# git-history-webpack-plugin

```
npm i @priccc/git-history-webpack-plugin
```

```
<!-- webpack.config.js -->
const GitHistory = require('@priccc/git-history-webpack-plugin')

...

plubins: [
  new GitVersion({
    floderName: 'dist',
    txtName: '测试版本信息'
  }),
]
```