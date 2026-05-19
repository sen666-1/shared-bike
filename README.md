# 共享自行车收集转运系统设计网页

这是一个可直接通过 GitHub Pages 发布的静态项目展示网页，只使用 HTML、CSS 和 JavaScript，不需要后端、数据库或安装依赖。

## 文件说明

- `index.html`：网页内容结构，包含项目介绍、技术路线、调查问卷和团队信息。
- `style.css`：网页视觉样式，可修改颜色、布局、字体大小等。
- `script.js`：移动端导航、问卷按钮和二维码缺失提示。
- `assets/questionnaire-qr.png`：调查问卷二维码图片。
- `.nojekyll`：让 GitHub Pages 按静态文件方式发布。

## 1. 如何替换问卷链接

打开 `index.html`，找到下面这一行：

```html
<button class="btn primary questionnaire-button" type="button" data-form-url="FEISHU_FORM_URL">点击填写调查问卷</button>
```

把 `FEISHU_FORM_URL` 替换成你的飞书问卷链接，例如：

```html
data-form-url="https://example.feishu.cn/share/base/form/xxxx"
```

如果还没有替换链接，点击网页按钮时会提示：

```text
请先在 script.js 或 index.html 中替换飞书问卷链接。
```

## 2. 如何替换二维码图片

把飞书问卷二维码图片放入 `assets` 文件夹，并命名为：

```text
questionnaire-qr.png
```

完整路径应为：

```text
assets/questionnaire-qr.png
```

如果图片不存在，网页会显示占位提示，提醒你放入二维码图片。

## 3. 如何通过 GitHub Pages 发布

1. 将本项目所有文件上传到 GitHub 仓库。
2. 进入仓库的 `Settings`。
3. 找到 `Pages`。
4. `Source` 选择 `Deploy from a branch`。
5. `Branch` 选择 `main`。
6. 文件夹选择 `/root`。
7. 点击保存，等待 GitHub Pages 生成访问网址。

## 4. 如何更新网页内容

- 修改项目标题、副标题：编辑 `index.html` 首页 Banner 区域。
- 修改项目背景、系统介绍、核心功能：编辑 `index.html` 中对应版块文字。
- 修改团队信息：编辑 `index.html` 里的“团队信息”版块。
- 修改颜色和页面风格：编辑 `style.css` 顶部的颜色变量。
- 修改问卷链接：编辑 `index.html` 中按钮的 `data-form-url`。
- 修改二维码：替换 `assets/questionnaire-qr.png`。

更新完成后，把修改后的文件提交并推送到 GitHub 仓库，GitHub Pages 会自动更新网页。
