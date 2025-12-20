# 🌵 FF14 仙人微彩計算器 (Mini Cactpot Solver)

**FFXIV 金碟遊樂場攻略工具。**
**The Ultimate Mobile-First, Offline-Capable Mini Cactpot Solver for FFXIV.**

👉 **立即使用：[點擊開啟計算器](https://rarakumoai.github.io/cactpot-solver/)**

---

## 📖 專案簡介 (Introduction)

這是一個專為《Final Fantasy XIV》光之戰士打造的 **仙人微彩 (Mini Cactpot)** 輔助工具。

不同於傳統的網頁計算器，本專案採用 **PWA (Progressive Web App)** 技術，專為手機體驗優化。一旦開啟過一次，即可**離線使用**，並能像原生 App 一樣安裝在手機桌面上，擁有全螢幕沈浸體驗與精美的動畫音效。

## ✨ 核心特色 (Features)

* **🧠 雙核心最強運算 (Hybrid Algorithm)**：
    * **開局 (Perfect Start)**：移植自 **Yuryu** 的 `PerfectCactpot` 查表邏輯，確保開局的第一步與第二步擁有數學上的絕對最佳解。
    * **收尾 (Exact Solver)**：中盤後切換為全排列暴力運算，精確計算每一條線的期望值 (EV) 與 10,000 MGP / 3,600 MGP 的機率分佈。
* **⚡️ PWA 離線支援**：內建 Service Worker，支援斷網秒開，金碟遊樂場訊號不好也能用。
* **📱 極致手機體驗**：針對 iOS/Android 優化，支援「加入主畫面」全螢幕模式，並帶有觸感回饋般的音效體驗。
* **🌍 多國語言支援**：內建 7 國語言 (繁中 / 简中 / EN / JA / DE / FR / KO)，隨系統自動切換。
* **🎨 精美 UI 設計**：黑金配色 (Dark/Gold Theme)，完美契合金碟遊樂場的奢華氛圍。

## 🛠️ 技術架構 (Tech Stack)

* **Core:** HTML5, CSS3, JavaScript (ES6+)
* **Framework:** React 18 (Via CDN, no build step required)
* **Styling:** Tailwind CSS (Via CDN)
* **PWA:** Service Worker + Web App Manifest
* **Fonts:** Cinzel (Google Fonts)

## 🤝 致謝與授權 (Credits & Acknowledgments)

本專案是一個基於熱愛的非營利開源作品。

* **Creator / UI / Logic Integration:** **Raraku**
* **Co-Developer:** **Gemini AI** (Refactoring, PWA implementation, Multilingual support)
* **Core Algorithm:**
    * 核心演算法參考並移植自 **Yuryu** 的 [PerfectCactpot](https://github.com/super-aardvark/ff14-cactpot) 邏輯。
    * *The core algorithm logic represents a port based on Yuryu's PerfectCactpot.*

## 📲 如何安裝 PWA App

本工具支援 **PWA**，可以安裝到您的手機桌面，享受無網址列的全螢幕體驗：

### 🍎 iOS (Safari)
1.  使用 Safari 打開網頁。
2.  點擊下方分享按鈕 (Share Icon)。
3.  往下滑，選擇 **「加入主畫面」 (Add to Home Screen)**。

### 🤖 Android (Chrome)
1.  使用 Chrome 打開網頁。
2.  點擊右上角選單 (三點)。
3.  選擇 **「加到主畫面」 (Add to Home screen)** 或 **「安裝應用程式」**。

---

## 🚀 如何部署 (Deployment)

本專案為純靜態網頁 (Static Web Page)，無需後端伺服器。

1.  將 `index.html`, `sw.js`, `manifest.json`, `icon.png` 放入任意靜態空間 (如 GitHub Pages, Vercel, Netlify)。
2.  確保 `sw.js` 與 `index.html` 位於**同一層目錄**。
3.  完成！

---

## 📜 免責聲明 (Disclaimer)

* 本工具僅為數據計算輔助，不涉及任何遊戲封包修改或自動化操作，符合 FFXIV 使用規範。
* FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd.
* 本站僅使用 Google Analytics 進行匿名流量統計，不蒐集任何個人資料。

---

**Made with ❤️ by Raraku in Taiwan.**
