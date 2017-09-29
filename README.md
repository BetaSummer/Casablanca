# Casablanca

![](https://img.shields.io/badge/language-JavaScript-green.svg)

> β-house 成员管理 http://member.betahouse.us

## 技术栈
Vue.js + Koa

## 本地开发

``` bash
# install dependencies
npm install

# install nodemon
npm install nodemon -g

# serve with hot reload at localhost:8080
npm run dev

# startup a back-end local server
npm run server
```

## 部署

1. ` npm install`
2. `touch server/config/config.prod.js` 编写后端相关配置，可参考`server/config/config.dev.js`。
3. `npm run build`
4. `npm run start`

注：`npm script`具体内容请见`package.json`；生产环境使用`pm2`部署`Node`服务。

## 截图预览

![登录页面](http://o6ljw8wcq.bkt.clouddn.com/blog/casablanca_login.png)

![成员列表](http://o6ljw8wcq.bkt.clouddn.com/blog/casablanca_view.png)

![成员编辑](http://o6ljw8wcq.bkt.clouddn.com/blog/casablanca_edit.png)

## 小结

> 《Casablanca》是一部1942年的美国爱情电影。在上个世纪80年代，美国音乐人 Bertie Higgins 和他女友共同观看了《Casablanca》这部电影，两人都喜欢非常这部爱情片。结合这部电影带给他的感觉，Bertie Higgins 为他的女朋友写了与《Casablanca》同名的一首歌。

成员管理系统，乍一看就是简单的 CRUD，但是要写用户体验良好且线上可以用的应用也不是特别容易，一路写下来踩过不少坑，之后我会以博文的形式将项目涉及知识点进行总结。

界面是自己瞎设计的。纯手写 CSS 之后感觉 CSS 才是这个项目中最难搞定的一部分……

写这个项目的起因 [@elliot](https://github.com/huangxutao) 学长在写工作室官网时觉得处理成员数据太麻烦，便提议说我们需要一个成员管理系统。

之前工作是官网的成员数据都是保存在一个`json`文件中，然后再由前端读取`json`文件将成员信息展现再页面上。

这种解决方案的缺点是

1. 每次成员信息的变动（主要是新成员的加入），都需要手动修改`json`文件。
2. 前端由`data => view`这个过程不优雅。具体可见[beta2017/info.js](https://github.com/BetaSummer/beta2017/blob/master/assets/js/src/info.js)。

那么，把数据存到数据库就简单多了嘛，然后开放 api 给官网项目，再提供一个图形用户界面来给大家编辑成员信息。

Casablanca 项目很简单，就做了上述的这么一件事……

***

欢迎工作室的小伙伴提 issue 或 PR😜