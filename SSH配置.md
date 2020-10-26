# SSH配置

1. 检查是否配置过ssh

   ```
   git config --global --list
   存在显示
   user.name = ??
   user.email = ??
   ```

2. 未配置,进行配置

   ```
   git config --global user.name
   git config --global user.email
   ```

3. 生成密钥

   ```
   ssh-keygen -t rsa -C 'user.email'
   ```

4. 确认保存路径(如果不需要修改路径则直接回车)

   1. 如果保存的路径有密钥文件,则确认是否覆盖
      1. 不需要覆盖直接回车
      2. 需要覆盖则拷贝到其他目录后再覆盖

5. 创建密码

6. 确认密码

7. 进入gihub项目(settings)

   1. SSH and GPG keys
   2. 选择 New SSH key
   3. 打开之前生成的 id_rsa.pub文件 copy key输入框(可命名)

