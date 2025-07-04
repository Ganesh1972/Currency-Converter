# 💱 Currency Converter

A simple and responsive web application that allows users to **convert between currencies** using **real-time exchange rates**, with visual support for **country flags** alongside currency codes for an enhanced user experience.

---

## 🚀 Features

- 🔄 Live currency conversion using latest exchange rates  
- 🏳️ Country flag display for selected currencies  
- 💻 Clean, responsive UI built with HTML, CSS, and JavaScript

---

## 🔌 APIs Used

### 1. 🌐 Country Flags API
- **URL Format:** `https://flagsapi.com/{countrycode}/flat/64.png`  
- **Description:** Returns a country flag image for the given 2-letter country code.

### 2. 💱 Exchange Rate API
- **GitHub Source:** [currency-api by @fawazahmed0](https://github.com/fawazahmed0/currency-api)  
- **URL Format:**  
  `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base-curr}.json`  
- **Description:** Provides real-time exchange rates for various global currencies.

---

## 📁 Project Structure

| File         | Description                                      |
|--------------|--------------------------------------------------|
| `index.html` | Main HTML file that structures the web app       |
| `style.css`  | Contains all styles for layout and UI            |
| `app.js`     | Handles API integration and currency conversion  |
| `code.js`    | Stores key-value pairs for currency and country codes |

---

## 🛠 Getting Started

### ✅ Prerequisites
- Any modern web browser  
- Code editor (e.g., VS Code)

### ⚙️ Installation
```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
