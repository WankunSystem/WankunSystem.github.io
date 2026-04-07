# 泓冠系統網站

此專案為 GitHub Pages 可直接部署的靜態網站，包含：

- 首頁（含橫幅圖片與公司簡介）
- 四個服務頁面：
    1. 家居/商業日用品代理
    2. 健康個案處理
    3. 空氣/水質淨化
    4. 其他服務

內容使用 Lorem Ipsum 作為示意文字，整體介面支援桌面與手機裝置。

## 專案結構

- `index.html`
- `service-agency.html`
- `service-healthcase.html`
- `service-airwater.html`
- `service-other.html`
- `assets/css/styles.css`
- `assets/images/*`

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可預覽。

## GitHub Pages 部署

1. 將整個專案推送到 GitHub repository。
2. 進入 GitHub repository 的 **Settings**。
3. 在 **Pages** 中將來源設為：
     - **Build and deployment** -> **Source: Deploy from a branch**
     - **Branch: main**（或你的預設分支）
     - **Folder: /(root)**
4. 儲存後等待部署完成，即可取得公開網址。