# 用户中心（上）

## 需求分析

- 登录/注册
- 用户管理（仅管理员可见）对用户的查询或者修改
- 用户校验（仅星球用户）

---

## 技术选型

<<<<<<< HEAD

- 前端：三件套+React+组件库 Ant design+Umi+Ant Design Pro(现成的管理系统)
- # 后端： java Spring（依赖注入框架，帮助你管理 Java 对象，集成一些其他内容） Spring-mvc（web 框架，提供接口访问、restful 接口等能力） mybatis（java 操作数据库的框架，持久层框架，对 jdbc 的封装） mybatis-plus（对 mybatis 的增强，不用写 sql 也能实现增删改查） springboot（快速启动，快速集成项目，不用自己管理 spring 配置，不用自己整合各种框架） junit 单元测试库 mysql
- 前端：三件套+React+组件库 Ant design+Umi+Ant Design Pro(现成的管理系统)
- 后端： java Spring（依赖注入框架，帮助你管理 Java 对象，集成一些其他内容） Spring-mvc（web 框架，提供接口访问、restful 接口等能力） mybatis（java 操作数据库的框架，持久层框架，对 jdbc 的封装） mybatis-plus（对 mybatis 的增强，不用写 sql 也能实现增删改查） springboot（快速启动，快速集成项目，不用自己管理 spring 配置，不用自己整合各种框架） junit 单元测试库 mysql
  > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757
- 部署：服务器/容器（平台）

---

## 计划

### 初始化项目

- 前端初始化 <<<<<<< HEAD

1. 初始化项目
2. 引入一些组件之类的
3. 框架介绍/瘦身

- 后端初始化

1. 准备环境（mysql 之类的）验证 mysql 是否安装成功-联接一下
2. 初始化后端项目，springboot，引入框架

- 数据库设计
- 登录/注册

1. 前端
2. 后端

- 用户管理（仅管理员可见）

1. # 前端 2.后端
1. 初始化项目
1. 引入一些组件之类的
1. 框架介绍/瘦身

- 后端初始化

1. 准备环境（mysql 之类的）验证 mysql 是否安装成功-联接一下
2. 初始化后端项目，springboot，引入框架

- 数据库设计
- 登录/注册

1. 前端
2. 后端

- 用户管理（仅管理员可见）

1. 前端 2.后端
   > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

---

## 前端初始化

<<<<<<< HEAD

### 1. 下载并安装 node.js

### 2. 初始化 Ant Design pro 脚手架

![Untitled](/Users/kaiweizhao/Desktop/Export-e291470a-3a9b-4119-a49f-e7a1e2cd0651/pics/Untitled 1.png)

新建一个空的文件夹，通过 cmd 命令打开，我们也可以直接 cd 到目录下

- # 输入官网创建 Ant Design Pro 的命令

### 1. 下载并安装 node.js

### 2. 初始化 Ant Design pro 脚手架

![Untitled](/usercenter_frontend/Untitled 1.png)

新建一个空的文件夹，通过 cmd 命令打开，我们也可以直接 cd 到目录下

- 输入官网创建 Ant Design Pro 的命令
  > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

```bash
# 使用 npm
npm i @ant-design/pro-cli -g
pro create myapp
```

- 选择`umi@3`
- 创建完成之后打开项目，运行`npm`
- 在终端运行`yarn`，安装项目所需依赖包 <<<<<<< HEAD
- # Umi 插件的构建，运行
- Umi 插件的构建，运行
  > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

```bash
yarn add @umijs/preset-ui -D
```

启动项目

<<<<<<< HEAD

1.

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%201.png)

# 2.使用 npm 命令

1.

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%201.png)

2.使用 npm 命令

> > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

```bash
npm start cross-env UMI_ENV=dev umi dev
```

<<<<<<< HEAD 两种启动命令的区别，start：dev 比 start 多了一个 MOCK=none，这是把模拟的数据关闭了，这里我们还没有初始化后端，所以使用 dev 去登录，会登录失败

### UMI 模版添加

======= 两种启动命令的区别，start：dev 比 start 多了一个 MOCK=none，这是把模拟的数据关闭了，这里我们还没有初始化后端，所以使用 dev 去登录，会登录失败

### UMI 模版添加

> > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%202.png)

### 项目瘦身

<<<<<<< HEAD

1. 减少国际化内容路径：src→locales
2. # 在 package.json 中找到`i18n-remove`并运行
3. 减少国际化内容路径：src→locales
4. 在 package.json 中找到`i18n-remove`并运行
   > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

### 项目结构

| 文件/文件夹 | 介绍 |
| ----------- | ---- |

<<<<<<< HEAD | .vscode | 配置 vscode 的插件 | | config | 存储配置（比如本地代理、路由） | | dist | 这是我们最终部署的项目就已经编译好的项目目录 | | mock | 模拟数据存放的地方，假数据 | | public | 存放静态资源，比如这个网站的 logo 图标、视频音频等 | ======= | .vscode | 配置 vscode 的插件 | | config | 存储配置（比如本地代理、路由） | | dist | 这是我们最终部署的项目就已经编译好的项目目录 | | mock | 模拟数据存放的地方，假数据 | | public | 存放静态资源，比如这个网站的 logo 图标、视频音频等 |

> > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757 | src | 我们写代码的主要常用目录 | | components | 存放组件 | | e2e | 集成测试（删掉） | | pages | 存放页面 | | locales | 国际化组件，删除 | | service/ant_design_pro/swagger | 这个是接口文档工具 | | one.api.json | 定义了整个项目用到的接口 | <<<<<<< HEAD | globel.less | 全员样式的代码（和 css 差不多） | | service-worker.js | 前端的一些页面缓存 | | typings.d.ts | 定义了一些 ts 的类型 | | tests | 测试（一般情况下，前端不太会用到测试，删掉） | | .editorconfig | 编辑器的配置（比如你需要这个代码空几个，然后编辑器会自动帮你格式化） | | .prettierrc.js | 检查 js 语法 | | jest.config.js | 测试工具 |

# | .stylelintrc.js | 检验 css 语法文件 |

| globel.less | 全员样式的代码（和 css 差不多） | | service-worker.js | 前端的一些页面缓存 | | typings.d.ts | 定义了一些 ts 的类型 | | tests | 测试（一般情况下，前端不太会用到测试，删掉） | | .editorconfig | 编辑器的配置（比如你需要这个代码空几个，然后编辑器会自动帮你格式化） | | .prettierrc.js | 检查 js 语法 | | jest.config.js | 测试工具 | | .stylelintrc.js | 检验 css 语法文件 |

> > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757 | playwright.config.ts | 自动化测试工具，帮你在火狐或者谷歌自动测试，不能真实的打开浏览器就能测试 |

---

## 后端初始化

<<<<<<< HEAD

### 安装 mysql

选择符合浏览器的版本

### 直接在 IntellJ 里面导入

=======

### 安装 mysql

选择符合浏览器的版本

### 直接在 IntellJ 里面导入

> > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

1. 选择依赖

![Untitled](%E7%94%A8%E6%88%B7%E4%B8%AD%E5%BF%83%EF%BC%88%E4%B8%8A%EF%BC%89%20e1df624484b24498931602cf9358b320/Untitled%203.png)

### 链接本地数据库

<<<<<<< HEAD

1. 点击 database
2. 添加 mysql
3. 测试连接后添加
4. 引入 mybatis-plus
5. 新建一个数据库的表
6. 自己在 IDEA 中创建一个数据库
7. Jump to Query Console
8. 把下面代码复制进去 5.尝试插入数据，构建成功
9. # 引入依赖到 pom.xml
10. 点击 database
11. 添加 mysql
12. 测试连接后添加
13. 引入 mybatis-plus
14. 新建一个数据库的表
15. 自己在 IDEA 中创建一个数据库
16. Jump to Query Console
17. 把下面代码复制进去 5.尝试插入数据，构建成功
18. 引入依赖到 pom.xml
    > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

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
<<<<<<< HEAD
```

```sql
<dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.5.2</version>
</dependency>
```

1. 修改 appication 的后缀名，在.yml 中写入项目名和端口号

=======

````

```sql
<dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.5.2</version>
</dependency>
````

1. 修改 appication 的后缀名，在.yml 中写入项目名和端口号

> > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

```sql
spring:
  application:
    name: user-center
server:
    port: 8080
```

<<<<<<< HEAD

1. # 更新数据库的配置放在 application.xml 中
1. 更新数据库的配置放在 application.xml 中
   > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

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

<<<<<<< HEAD

1. # 在 Springboot 中添加@MapperScan 的注解，扫描 Mapper 文件夹
1. 在 Springboot 中添加@MapperScan 的注解，扫描 Mapper 文件夹
   > > > > > > > bdb4b04c8d0225aa727cffc172da3d82f3c3d757

```sql
@SpringBootApplication
@MapperScan("com.baomidou.mybatisplus.samples.quickstart.mapper")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
<<<<<<< HEAD
```

1. 我们还没有 Mapper 文件夹，在 com.kanezhao.usercenter 中新建一个
2. Spingboot 启动类:全局启动入口，UserCenterApplication.java,

```sql
@MapperScan("com.yupi.usercenter.Mapper")
```

1. 编码创建一个 model 文件夹，放入官方文档的代码

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

编写 Mapper 类，UserMapper.java，同样复制官方文档的代码

```sql
public interface UserMapper extends BaseMapper<User> {

}
```

开始使用，添加测试类，引入 Junit

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

修改 Autowired 为 Resources 安装 Junit 依赖到项目中，放入 pom.xml

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

=======
```

1. 我们还没有 Mapper 文件夹，在 com.kanezhao.usercenter 中新建一个
2. Spingboot 启动类:全局启动入口，UserCenterApplication.java,

```sql
@MapperScan("com.yupi.usercenter.Mapper")
```

1. 编码创建一个 model 文件夹，放入官方文档的代码

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

编写 Mapper 类，UserMapper.java，同样复制官方文档的代码

```sql
public interface UserMapper extends BaseMapper<User> {

}
```

开始使用，添加测试类，引入 Junit

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

修改 Autowired 为 Resources 安装 Junit 依赖到项目中，放入 pom.xml

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

>>>>>>> bdb4b04c8d0225aa727cffc172da3d82f3c3d757
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
