---
title: MercurySQL主题简介
---

# MercurySQL 简介
MercurySQL是一个旨在以更Pythonic的方式操作SQL数据库的库。它提供了一种简洁且易于理解的API，帮助您避免复杂的SQL语句，确保数据库的安全，并允许您直接在Python中进行调试。

## 特点
- 更Pythonic的操作方式：提供与Python风格更为契合的API，使得SQL数据库操作更加简洁易懂。
- 避免复杂SQL语句：减少学习和理解SQL语法的负担。
- 更安全的数据库操作：自动提交事务，保护数据库安全，防止数据丢失。
- 使用Python进行调试：可以直接在Python中调试和检查数据库，无需复杂的SQL终端调试。

## 示例
- 创建数据库：
  ```python
  db = DataBase('test')
  ```
- 创建表格：
  ```python
  table = db['test']
  table.newColumn('id', int, primaryKey=True)
  ```
- 删除表格：
  ```python
  del db['test']
  ```
- 添加记录：
  ```python
  table.insert(id=1, name='Bernie Huang')
  ```
- 查询记录：
  ```python
  rec = table.select((table['id'] == 1) & (table['name'] == 'test'))
  ```
- 删除记录：
  ```python
  ((table['id'] == 1) & (table['name'] == 'test')).delete()
  ```

## 依赖
无其他依赖，只需Python自带的sqlite3库。

## 贡献者
Bernie Huang [@BernieHuang2008](https://github.com/BernieHuang2008)
Nathan Chen [@Nathancgy](https://github.com/Nathancgy)
Lanbin Leo [@lanbinshijie](https://github.com/lanbinshijie)

## 为何命名为MercurySQL
- 速度与灵活性：Mercury（水星）在罗马神话中是速度与灵活性的象征。此命名意在传达库在处理SQL数据库时的快速与敏捷。
- 轻巧：水星是一种相对较轻的金属，这可能意味着该库设计得轻巧，适用于资源敏感环境。
- 流动性：水星是常温下的液态金属，具有良好的流动性。这可能象征该库提供了流畅的API，使得对SQL数据库的操作更加灵活容易。
- 精准与稳定：水星在温度变化下体积稳定，常用于温度计中。这可能表示该库在处理数据时精准可靠。
- 化学稳定性：水星是化学上稳定的元素，不易与其他元素反应。这可能意味着该库在与其他Python库或框架集成时稳定，不易产生冲突。