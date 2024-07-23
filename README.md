# React + Vite

狀態管理
```
npm i react-redux @reduxjs/toolkit redux-persist
```

UI框架
```
npm i @nextui-org/react framer-motion
```

tailwind
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js 設定修改
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

在main.jsx的index.css加入
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```