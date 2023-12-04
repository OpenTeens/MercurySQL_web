---
title: API速查
---

# 进阶开发手册📝

## API速查表

本文档提供了Mercury SQL内置的绝大部分API的速查表，以便于开发者快速查阅。

是新手？尝试阅读[快速入门](/page/快速入门)。

## 创建和管理数据库

### 创建数据库对象
  - **描述**: 为了开始使用数据库，你需要首先创建一个数据库对象。
  - **使用方法**: 
    ```python
    db = DataBase('my_database.db')
    ```
    这里 `'my_database.db'` 是你想要创建或连接的数据库文件名。

### 执行 SQL 命令
  - **描述**: 使用此方法执行任何 SQL 命令，例如创建表格、插入数据或执行更新。
  - **使用方法**: 
    ```python
    db.do("CREATE TABLE test (id INTEGER, name TEXT)")
    ```

### 创建表格
  - **描述**: 如果你需要在数据库中创建新表格，可以使用此方法。
  - **使用方法**:
    ```python
    table = db.createTable('users')
    ```
    这里 `'users'` 是你想要创建的表格名称。

### 获取表格对象
  - **描述**: 若要操作特定的表格，你需要先获取该表格的对象。
  - **使用方法**:
    ```python
    table = db['users']
    ```
    用表格名称 `'users'` 来获取表格对象。

### 删除表格
  - **描述**: 使用此方法可以从数据库中删除一个表格。
  - **使用方法**:
    ```python
    db.deleteTable('old_table')
    ```
    这里 `'old_table'` 是你想要删除的表格名称。

## 操作表格和数据

### 向表格中添加列
  - **描述**: 在已存在的表格中添加新列。
  - **使用方法**:
    ```python
    table.newColumn('age', int)
    ```
    这会在 `'table'` 表格中添加一个名为 `'age'` 的整型列。

### 插入数据
  - **描述**: 向表格中插入一行数据。
  - **使用方法**:
    ```python
    table.insert(name='Alice', age=30)
    ```
    在 `'table'` 表格中插入一行数据，包含 `'name'` 和 `'age'` 字段。

### 更新数据
  - **描述**: 更新表格中的数据。
  - **使用方法**:
    ```python
    table.update(table['name'] == 'Alice', age=31)
    ```
    这将更新 `'table'` 表格中 `'name'` 等于 `'Alice'` 的行的 `'age'` 字段。

### 查询数据
  - **描述**: 从表格中选择符合特定条件的数据。
  - **使用方法**:
    ```python
    results = table.select(table['age'] > 25)
    ```
    这将从 `'table'` 表格中选择 `'age'` 大于 25 的所有行。
