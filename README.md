- node version: >= 18.15.0
- npm version: >= 9.5.0
- vite:  v5.3.3 

# install package
npm i

# run web
npm run dev

- assets: chứa ảnh, css, js,...
- component: chứa component common
- hooks: chứa các file hooks
- i18next: chứa file translate
- layouts: chứa layout common
- pages: các pages
- redux: chứa các state action
- routes: src\routes
- template: các template từ pages
- themes: cấu hình themes
- utils: các function, constant,...

# luồng
- main.jsx > app.jsx > routes > pages (layouts > pages ) > template > component