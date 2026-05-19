// 移动端导航菜单开关
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// 问卷链接：如需修改问卷地址，优先修改这里或 index.html 按钮上的 data-form-url
const QUESTIONNAIRE_URL = "https://icnpo99vzu6r.feishu.cn/base/GQ6ObsULoaAxwpsIC9xcvd2bnPc?from=from_copylink";

// 问卷按钮：点击后会在新窗口打开飞书问卷
const questionnaireButton = document.querySelector(".questionnaire-button");

if (questionnaireButton) {
  questionnaireButton.addEventListener("click", () => {
    const formUrl = questionnaireButton.dataset.formUrl || QUESTIONNAIRE_URL;

    if (!formUrl || formUrl === "FEISHU_FORM_URL") {
      alert("请先在 script.js 或 index.html 中替换飞书问卷链接。");
      return;
    }

    window.open(formUrl, "_blank", "noopener,noreferrer");
  });
}

// 二维码图片不存在时，显示清晰的占位提示
const qrImage = document.querySelector(".qr-box img");

if (qrImage) {
  qrImage.addEventListener("error", () => {
    qrImage.closest(".qr-box").classList.add("is-missing");
  });
}
