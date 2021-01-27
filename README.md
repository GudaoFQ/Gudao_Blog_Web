# 孤岛个人博客网站

> Vue+Element-UI搭建前端

## 启动前需要添加

```shell
# 添加自己的网站logo
将.ioc结尾的文件放到static，因为index.html的logo路径为/static/logo.ioc；若想修改，请更改index.html文件中的<link>标签

# 设置自己的网站背景图片
位置为：src/assets/images下；图片名称为：left.jpg、portrait.jpg、welcome.jpg，分别是左界面图width为280px-790px、个人头像界面图100px-100px、欢迎界面1680px-1000px
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
