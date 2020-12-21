# git-history-webpack-plugin


The plugin will output a text with git history in the dist folder after the building is complete.

#### install

```
npm i @priccc/git-history-webpack-plugin
```

#### example
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

#### staout txt
```
commit date:: 12/21/2020, 2:10:04 PM 
commit username:: master 
commit branch:: master 
commit hash:: 4e758f10b6aea0bdc3dcae16f78ac3359429926 
::commit history::
commit 4e758f10b6aea0bdc3dcae16f78ac3359429926
Author: priccc <zleipriccc@gmail.com>
Date:   Tue Dec 8 17:22:37 2020 +0800

    init

 .gitignore                    |    23 +
 README.md                     |    24 +
 babel.config.js               |     5 +
 package-lock.json             | 11961 ++++++++++++++++++++++++++++++++++++++++
 package.json                  |    42 +
 public/favicon.ico            |   Bin 0 -> 4286 bytes
 public/index.html             |    17 +
 src/App.vue                   |    28 +
 src/assets/logo.png           |   Bin 0 -> 6849 bytes
 src/components/HelloWorld.vue |    58 +
 src/main.js                   |     8 +
 11 files changed, 12166 insertions(+)
```