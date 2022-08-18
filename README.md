# 用户中心（上）

## 需求分析

- 登录/注册
- 用户管理（仅管理员可见）对用户的查询或者修改
- 用户校验（仅星球用户）

---

## 技术选型

- 前端：三件套+React+组件库Ant design+Umi+Ant Design Pro(现成的管理系统)
- 后端：
java
Spring（依赖注入框架，帮助你管理Java对象，集成一些其他内容）
Spring-mvc（web框架，提供接口访问、restful接口等能力）
mybatis（java操作数据库的框架，持久层框架，对jdbc的封装）
mybatis-plus（对mybatis的增强，不用写sql也能实现增删改查）
springboot（快速启动，快速集成项目，不用自己管理spring配置，不用自己整合各种框架）
junit单元测试库
mysql
- 部署：服务器/容器（平台）

---

## 计划

### 初始化项目

- 前端初始化
1. 初始化项目
2. 引入一些组件之类的
3. 框架介绍/瘦身
- 后端初始化
1. 准备环境（mysql之类的）验证mysql是否安装成功-联接一下
2. 初始化后端项目，springboot，引入框架
- 数据库设计
- 登录/注册
1. 前端
2. 后端
- 用户管理（仅管理员可见）
1. 前端
2.后端

---

## 前端初始化

### 1. 下载并安装node.js

### 2. 初始化Ant Design pro脚手架

![Untitled](/usercenter_frontend/Untitled 1.png)

新建一个空的文件夹，通过cmd命令打开，我们也可以直接cd到目录下

- 输入官网创建Ant Design Pro的命令

```bash
# 使用 npm
npm i @ant-design/pro-cli -g
pro create myapp
```

- 选择`umi@3`
- 创建完成之后打开项目，运行`npm`
- 在终端运行`yarn`，安装项目所需依赖包
- Umi插件的构建，运行

```bash
yarn add @umijs/preset-ui -D
```

启动项目

1. 

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%201.png)

2.使用npm命令

```bash
npm start cross-env UMI_ENV=dev umi dev
```

两种启动命令的区别，start：dev比start多了一个MOCK=none，这是把模拟的数据关闭了，这里我们还没有初始化后端，所以使用dev去登录，会登录失败

### UMI模版添加

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%202.png)

### 项目瘦身

1. 减少国际化内容
路径：src→locales
2. 在package.json中找到`i18n-remove`并运行

### 项目结构

| 文件/文件夹 | 介绍 |
| --- | --- |
| .vscode | 配置vscode的插件 |
| config | 存储配置（比如本地代理、路由） |
| dist | 这是我们最终部署的项目就已经编译好的项目目录 |
| mock | 模拟数据存放的地方，假数据 |
| public | 存放静态资源，比如这个网站的logo图标、视频音频等 |
| src | 我们写代码的主要常用目录 |
| components | 存放组件 |
| e2e | 集成测试（删掉） |
| pages | 存放页面 |
| locales | 国际化组件，删除 |
| service/ant_design_pro/swagger | 这个是接口文档工具 |
| one.api.json | 定义了整个项目用到的接口 |
| globel.less | 全员样式的代码（和css差不多） |
| service-worker.js | 前端的一些页面缓存 |
| typings.d.ts | 定义了一些ts的类型 |
| tests | 测试（一般情况下，前端不太会用到测试，删掉） |
| .editorconfig | 编辑器的配置（比如你需要这个代码空几个，然后编辑器会自动帮你格式化） |
| .prettierrc.js | 检查js语法 |
| jest.config.js | 测试工具 |
| .stylelintrc.js | 检验css语法文件 |
| playwright.config.ts | 自动化测试工具，帮你在火狐或者谷歌自动测试，不能真实的打开浏览器就能测试 |

---

## 后端初始化

### 安装mysql

选择符合浏览器的版本

### 直接在IntellJ里面导入

1. 选择依赖

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%203.png)

### 链接本地数据库

1. 点击database
2. 添加mysql
3. 测试连接后添加
4. 引入mybatis-plus
1. 新建一个数据库的表
2. 自己在IDEA中创建一个数据库
3. Jump to Query Console
4. 把下面代码复制进去
5.尝试插入数据，构建成功
6. 引入依赖到pom.xml

```sql
DROP TABLE IF EXISTS user;

CREATE TABLE user
(
    id BIGINT(20) NOT NULL COMMENT '主键ID',
    name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
    age INT(11) NULL DEFAULT NULL COMMENT '年龄',
    email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
    PRIMARY KEY (id)
);
```

```sql
<dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.5.2</version>
</dependency>
```

1. 修改appication的后缀名，在.yml中写入项目名和端口号

```sql
spring:
  application:
    name: user-center
server:
    port: 8080
```

1. 更新数据库的配置放在application.xml中

```sql
spring:
  application:
    name: user-center
  # DataSource Config
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://localhost:3306/yupi
    username: 你的数据库用户名
    password: 你的数据库密码
server:
    port: 8080
```

1. 在Springboot中添加@MapperScan的注解，扫描Mapper文件夹

```sql
@SpringBootApplication
@MapperScan("com.baomidou.mybatisplus.samples.quickstart.mapper")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
```

1. 我们还没有Mapper文件夹，在com.kanezhao.usercenter中新建一个
2. Spingboot启动类:全局启动入口，UserCenterApplication.java,

```sql
@MapperScan("com.yupi.usercenter.Mapper")
```

1. 编码
创建一个model文件夹，放入官方文档的代码

```sql
package com.yupi.usercenter.model;

import lombok.Data;

@Data
public class User {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```

   编写Mapper类，UserMapper.java，同样复制官方文档的代码

```sql
public interface UserMapper extends BaseMapper<User> {

}
```

   开始使用，添加测试类，引入Junit

```sql
@SpringBootTest
public class SampleTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<User> userList = userMapper.selectList(null);
        Assert.assertEquals(5, userList.size());
        userList.forEach(System.out::println);
    }

}
```

修改Autowired为Resources
安装Junit依赖到项目中，放入pom.xml

```sql
<!-- https://mvnrepository.com/artifact/junit/junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

写一个用例看下能不能跑起来

```java
package com.yupi.usercenter;

import com.yupi.usercenter.Mapper.UserMapper;
import com.yupi.usercenter.model.User;
import org.junit.Assert;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
public class SampleTest {

    @Resource
    private UserMapper userMapper;

    @Test
    public void testSelect() {
        System.out.println(("----- selectAll method test ------"));
        List<User> userList = userMapper.selectList(null);
        Assert.assertEquals(5, userList.size());
        userList.forEach(System.out::println);
    }

}
```
