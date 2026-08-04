document.addEventListener("DOMContentLoaded", function () {
  if (!window.React || !window.ReactDOM) {
    return;
  }

  const e = window.React.createElement;

  const navItems = [
    { key: "home", href: "index.html", label: "首頁" },
    { key: "airwater", href: "service-airwater.html", label: "空氣/水質淨化" },
    { key: "agency", href: "service-agency.html", label: "日用品代理" },
    { key: "healthcase", href: "service-healthcase.html", label: "健康個案處理" },
    { key: "other", href: "service-other.html", label: "其他服務" }
  ];

  function Header(props) {
    const currentPage = props.page || "home";

    return e(
      "header",
      { className: "site-header" },
      e(
        "div",
        { className: "container header-row" },
        e(
          "a",
          { className: "logo", href: "index.html" },
          "泓冠系統",
          e("small", null, "WANKUN SYSTEM")
        ),
        e(
          "button",
          {
            className: "nav-toggle",
            type: "button",
            "aria-expanded": "false",
            "aria-controls": "site-nav"
          },
          "選單"
        ),
        e(
          "nav",
          { id: "site-nav", className: "site-nav", "aria-label": "主選單" },
          navItems.map(function (item) {
            return e(
              "a",
              {
                key: item.key,
                href: item.href,
                className: item.key === currentPage ? "active" : ""
              },
              item.label
            );
          })
        )
      )
    );
  }

  function Footer() {
    return e(
      "footer",
      { className: "site-footer" },
      e(
        "div",
        { className: "container footer-row" },
        e("span", null, "© " + new Date().getFullYear() + " 泓冠系統 Wankun System"),
        e("span", null, "Powered by Kalalib")
      )
    );
  }

  const headerRootElement = document.getElementById("site-header-root");
  if (headerRootElement) {
    const page = headerRootElement.getAttribute("data-page") || "home";
    window.ReactDOM.createRoot(headerRootElement).render(e(Header, { page: page }));
  }

  const footerRootElement = document.getElementById("site-footer-root");
  if (footerRootElement) {
    window.ReactDOM.createRoot(footerRootElement).render(e(Footer));
  }
});
