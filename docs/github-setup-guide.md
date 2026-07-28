# 本机 Git / GitHub 操作指南（零基础版）

**目标：** 在你自己的电脑上，把我在这次对话里生成的规划文档（`docs/` 文件夹）推送到 GitHub，并开一个 Draft PR。跑通这一遍之后，以后我们做真正的代码修改，也是重复同样的流程。

**你的仓库信息（已确认）：**
- 本地文件夹：`C:\Users\win\Documents\Claude\Projects\Hong Kong Smart Parking`
- GitHub 仓库：`https://github.com/chucklondeo/smartparkinghongkong.git`
- 默认分支：`main`

---

## 第一步：检查电脑上有没有装 Git

1. 按键盘上的 `Win` 键（Windows 徽标键），输入 `powershell`，回车打开 **Windows PowerShell**。
2. 在弹出的黑色/蓝色窗口里输入：
   ```powershell
   git --version
   ```
   回车。
3. 如果显示类似 `git version 2.xx.x`，说明已经装好，跳到**第二步**。
4. 如果显示"'git' 不是内部或外部命令"之类的报错，说明没装，去 https://git-scm.com/download/win 下载安装包，双击安装，**一路点"Next"用默认选项就行**，装完重新打开一个新的 PowerShell 窗口，再执行一次 `git --version` 确认。

## 第二步：检查电脑上有没有装 GitHub CLI（`gh`）

这是让你能在命令行里登录 GitHub、推代码、开 PR 的工具。

1. 还是在 PowerShell 里输入：
   ```powershell
   gh --version
   ```
2. 如果显示版本号，跳到**第三步**。
3. 如果没装，最简单的方法是在 PowerShell 里直接输入（Windows 10/11 自带的 `winget` 安装器）：
   ```powershell
   winget install --id GitHub.cli
   ```
   等它跑完，**关掉 PowerShell 窗口，重新打开一个新的**（这一步很重要，不然新装的工具不生效），再输入 `gh --version` 确认装好了。
4. 如果 `winget` 也不能用，就去 https://cli.github.com/ 页面，点 "Download for Windows"，下载 `.msi` 安装包，双击安装，同样装完要开新窗口。

## 第三步：登录你的 GitHub 账号

1. 在 PowerShell 里输入：
   ```powershell
   gh auth login
   ```
2. 它会问几个问题，用键盘上下箭头选择，回车确认，按下面选：
   - `What account do you want to log into?` → 选 **GitHub.com**
   - `What is your preferred protocol for Git operations?` → 选 **HTTPS**
   - `Authenticate Git with your GitHub credentials?` → 选 **Yes**
   - `How would you like to authenticate GitHub CLI?` → 选 **Login with a web browser**
3. 它会显示一个一次性代码（一串字母数字，比如 `ABCD-1234`），**记住它**，然后会自动打开浏览器（或提示你按回车打开）。
4. 浏览器打开 GitHub 网页后，用你自己的 GitHub 账号密码登录（如果本来就登录着就不用），把刚才那个代码粘贴/输入进去，点 "Authorize"。
5. 回到 PowerShell 窗口，看到类似 `✓ Logged in as chucklondeo` 就说明成功了。
6. 输入以下命令再确认一次：
   ```powershell
   gh auth status
   ```
   应该显示已登录、账号名、以及 token 的权限范围（包含 `repo` 权限）。

> ⚠️ 全程不需要把任何密码或 Token 发给我，也不需要复制粘贴到聊天框里，都是在你自己的浏览器和终端里完成的。

## 第四步：打开终端，进到项目文件夹

1. 打开**文件资源管理器**，找到并进入这个文件夹：
   `C:\Users\win\Documents\Claude\Projects\Hong Kong Smart Parking`
2. 在文件资源管理器**顶部的地址栏**（显示路径的那一条）里，点一下让它变成可编辑状态，输入 `powershell`，回车。
   → 会在这个文件夹里直接打开一个 PowerShell 窗口，不用再 `cd` 来 `cd` 去。
3. 确认一下你在正确的位置，输入：
   ```powershell
   git status
   ```
   应该会看到类似：
   ```
   On branch main
   Your branch is up to date with 'origin/main'.
   Untracked files:
     .eslintrc.json
     docs/
     香港智慧停車整合解決方案.pptx
   ```
   看到 `docs/` 出现在 "Untracked files" 里，就说明是对的文件夹（`docs/` 就是我这次帮你生成的那五个文档所在的文件夹）。

## 第五步：同步一下远程仓库（保险起见）

```powershell
git fetch --all --prune
git pull --ff-only
```
第一条是去 GitHub 上看看有没有新东西；第二条是把 `main` 分支更新到最新（如果你本机没有别的未提交修改，这一步不会有任何冲突）。

## 第六步：建一个"备份分支"，推到 GitHub

这是为了在你改任何东西之前，先在 GitHub 上留一个"改动前"的快照，出问题随时能找回来。

```powershell
git switch -c backup/pre-londeo-site-optimization-20260728
git push -u origin backup/pre-londeo-site-optimization-20260728
```

- 第一条：基于当前的 `main`，新建并切换到一个叫 `backup/pre-londeo-site-optimization-20260728` 的分支（这一步只在你电脑上发生）。
- 第二条：把这个分支推到 GitHub 上（`-u` 是让以后 `git push` 不用再打分支名）。

跑完后可以打开浏览器访问 `https://github.com/chucklondeo/smartparkinghongkong/branches` 确认这个分支已经出现在 GitHub 上。

## 第七步：切回 main，再建"开发分支"

```powershell
git switch main
git switch -c claude/londeo-site-optimization-20260728
```

这个分支才是我们真正要提交改动的地方。名字里带 `claude/` 只是我们约定的命名习惯，方便区分这是哪次协作产生的分支。

## 第八步：把这次生成的文档提交（commit）

```powershell
git add docs/
git status
```
`git status` 会再显示一遍，确认只有 `docs/` 底下的 5 个文件被标记为绿色（准备提交），别的文件（`.eslintrc.json`、那个 pptx）不在里面——这一步是让你在真正提交前，亲眼确认没有提交不该提交的东西。

确认没问题后：
```powershell
git commit -m "docs: add site audit and rebuild planning documents"
```

## 第九步：推送到 GitHub

```powershell
git push -u origin claude/londeo-site-optimization-20260728
```

这一步需要联网，会用到你第三步登录的 GitHub 账号权限，正常几秒钟就完成。

## 第十步：创建 Draft Pull Request

```powershell
gh pr create --draft --title "Londeo Access website product, navigation and conversion optimization" --body-file docs/pr-description-template.md
```

跑完会输出一个 PR 链接（类似 `https://github.com/chucklondeo/smartparkinghongkong/pull/1`），打开它就能在网页上看到这个 Draft PR —— **Draft 状态意味着它不会被误合并**，只是给你和团队看进度用的。

因为这一轮只提交了文档，PR 描述模板里那些 `[TODO]` 占位（截图、测试结果等）现在还填不了，属于正常情况——先打开一个空壳 PR，等真正改代码的时候再逐步把内容和 commit 加进去，PR 描述可以随时在网页上编辑。

---

## 常见问题

**Q: `git push` 提示要输入用户名密码，输入了还是失败？**
GitHub 从 2021 年起不再支持密码推送，必须用 `gh auth login` 登录过（第三步），登录成功后 `git push` 会自动用这个身份，不会再弹密码框。如果还弹，重新执行一次 `gh auth login`。

**Q: PowerShell 报错 "无法加载文件，因为在此系统上禁止运行脚本"？**
这是 Windows 的执行策略限制，跟 `git`/`gh` 无关，通常发生在装了某些工具后。可以换成用 **Git Bash**（装 Git 时会一起装上）：在文件资源管理器里，在项目文件夹空白处右键，选 "Open Git Bash here"，用 Git Bash 跑上面所有命令（命令完全一样）。

**Q: `git switch -c ...` 提示分支已存在？**
说明这个分支名之前建过了，用 `git switch <分支名>` 直接切换过去就行，不用加 `-c`。

**Q: 我不确定当前在哪个分支？**
随时输入 `git branch --show-current` 查看。

**Q: 想反悔，不要这次的改动了？**
只要还没跑第八步的 `git commit`，直接关掉终端，什么都不会发生。已经 commit 但还没 push，可以用 `git switch main` 切回去，那个开发分支放着不管就行，不会影响 `main`。

---

## 之后呢？

跑完这十步，你就有了一个 Draft PR，`main` 分支完全没被动过。下次我们要真正开始改代码（导航、产品页等），流程是：你继续在 `claude/londeo-site-optimization-20260728` 这个分支上（或者告诉我你想重新开始），我给出具体要改的文件和内容，你（或者一个能访问你电脑/已登录 gh 的 Claude Code 会话）负责 `git add` / `git commit` / `git push` 这几步，我这边负责设计和写代码内容。
