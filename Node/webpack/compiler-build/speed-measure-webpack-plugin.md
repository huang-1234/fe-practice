# webapck 打包构建速度

## 使用 `speed-measure-webpack-plugin`

### 1. 首次测试 多入口

```js
  done [====================] 99% (261.1 s)

 SMP  ⏱
General output time took 4 mins, 21.051 secs

 SMP  ⏱  Plugins
IgnorePlugin took 1 min, 17.59 secs
HotModuleReplacementPlugin took 1.088 secs
FriendlyErrorsWebpackPlugin took 0.245 secs
ProgressPlugin took 0.093 secs
MiniCssExtractPlugin took 0.079 secs
HtmlWebpackPlugin took 0.026 secs
CleanWebpackPlugin took 0.006 secs
WatchIgnorePlugin took 0.001 secs

 SMP  ⏱  Loaders
modules with no loaders took 2 mins, 49.57 secs
  module count = 4125
cache-loader, and
css-loader, and
sass-loader took 58.28 secs
  module count = 19
esbuild-loader took 56.39 secs
  module count = 143
css-loader, and
sass-loader took 33.45 secs
  module count = 12
@svgr/webpack took 12.95 secs
  module count = 1
json-loader took 6.51 secs
  module count = 5
css-loader took 6.14 secs
  module count = 3
css-loader, and
postcss-loader, and
less-loader took 5.94 secs
  module count = 1
url-loader took 0.538 secs
  module count = 1
style-loader, and
css-loader took 0.251 secs
  module count = 3
style-loader, and
css-loader, and
sass-loader took 0.167 secs
  module count = 12
html-webpack-plugin took 0.033 secs
  module count = 1
style-loader, and
cache-loader, and
css-loader, and
sass-loader took 0.031 secs
  module count = 19
style-loader, and
css-loader, and
postcss-loader, and
less-loader took 0.002 secs
  module count = 1



Build completed in 309.536s

assets by path *.js 15.5 MiB
  asset lib.bundle.js 6.96 MiB [emitted] (name: lib) (id hint: lib) 1 related asset
  asset chunk-otherVendors.bundle.js 3.87 MiB [emitted] (name: chunk-otherVendors) (id hint: otherVendors) 1 related asset
  asset antd.bundle.js 1.63 MiB [emitted] (name: antd) (id hint: antVendor) 1 related asset
  asset wang_editor_react.bundle.js 806 KiB [emitted] (name: wang_editor_react) (id hint: editorVendor) 1 related asset
  asset styles.bundle.js 636 KiB [emitted] (name: styles) (id hint: styles) 1 related asset
  asset chunk-common.bundle.js 392 KiB [emitted] (name: chunk-common) (id hint: common) 1 related asset
  asset main.bundle.js 276 KiB [emitted] (name: main) 1 related asset
  asset selectGoods.bundle.js 275 KiB [emitted] (name: selectGoods) 1 related asset
  asset recoil.bundle.js 271 KiB [emitted] (name: recoil) (id hint: recoilVendor) 1 related asset
  asset leva.bundle.js 151 KiB [emitted] (name: leva) (id hint: levaVendor) 1 related asset
  asset src_global_domain_guides_index_tsx.bundle.js 101 KiB [emitted] 1 related asset
  + 22 assets
asset fd430a62fe505e180757.png 9.46 KiB [emitted] [immutable] [from: src/global/materials/load-more/imgs/common.png] (auxiliary name: chunk-common, selectGoods) (auxiliary id hint: common)
asset index.html 823 bytes [emitted]
Entrypoint main 13.6 MiB (10.2 MiB) = 6 assets 6 auxiliary assets
Entrypoint selectGoods 13.4 MiB (9.92 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB styles.bundle.js 636 KiB chunk-otherVendors.bundle.js 3.87 MiB selectGoods.bundle.js 275 KiB 6 auxiliary assets
Entrypoint auto 13.3 MiB (9.84 MiB) = 6 assets 6 auxiliary assets
Entrypoint vendor 12.8 MiB (9.63 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB recoil.bundle.js 271 KiB chunk-otherVendors.bundle.js 3.87 MiB vendor.bundle.js 52.4 KiB 5 auxiliary assets
orphan modules 762 KiB [orphan] 938 modules
```


### 2. 单入口

```js

  done [====================] 99% (85.6 s)

 SMP  ⏱
General output time took 1 min, 25.59 secs

 SMP  ⏱  Plugins
IgnorePlugin took 17.82 secs
HotModuleReplacementPlugin took 0.213 secs
FriendlyErrorsWebpackPlugin took 0.037 secs
MiniCssExtractPlugin took 0.028 secs
HtmlWebpackPlugin took 0.014 secs
ProgressPlugin took 0.014 secs
CleanWebpackPlugin took 0.005 secs
WatchIgnorePlugin took 0.001 secs

 SMP  ⏱  Loaders
modules with no loaders took 50.84 secs
  module count = 4125
esbuild-loader took 20.95 secs
  module count = 143
cache-loader, and
css-loader, and
sass-loader took 18.24 secs
  module count = 19
css-loader, and
sass-loader took 12.48 secs
  module count = 12
@svgr/webpack took 5.33 secs
  module count = 1
css-loader, and
postcss-loader, and
less-loader took 2.65 secs
  module count = 1
css-loader took 2.13 secs
  module count = 3
json-loader took 0.614 secs
  module count = 5
html-webpack-plugin took 0.167 secs
  module count = 1
url-loader took 0.151 secs
  module count = 1
style-loader, and
css-loader took 0.147 secs
  module count = 3
style-loader, and
cache-loader, and
css-loader, and
sass-loader took 0.023 secs
  module count = 19
style-loader, and
css-loader, and
sass-loader took 0.015 secs
  module count = 12
style-loader, and
css-loader, and
postcss-loader, and
less-loader took 0.001 secs
  module count = 1



Build completed in 103.811s

assets by path *.js 15.1 MiB
  asset lib.bundle.js 6.96 MiB [emitted] (name: lib) (id hint: lib) 1 related asset
  asset chunk-otherVendors.bundle.js 3.87 MiB [emitted] (name: chunk-otherVendors) (id hint: otherVendors) 1 related asset
  asset antd.bundle.js 1.63 MiB [emitted] (name: antd) (id hint: antVendor) 1 related asset
  asset wang_editor_react.bundle.js 806 KiB [emitted] (name: wang_editor_react) (id hint: editorVendor) 1 related asset
  asset styles.bundle.js 636 KiB [emitted] (name: styles) (id hint: styles) 1 related asset
  asset main.bundle.js 276 KiB [emitted] (name: main) 1 related asset
  asset recoil.bundle.js 271 KiB [emitted] (name: recoil) (id hint: recoilVendor) 1 related asset
  asset src_pages_daren_select-goods_index_tsx-data_image_svg_xml_3Csvg_width_2720_27_height_2720_27_-d466df.bundle.js 206 KiB [emitted] 1 related asset
  asset chunk-common.bundle.js 157 KiB [emitted] (name: chunk-common) (id hint: common) 1 related asset
  asset leva.bundle.js 151 KiB [emitted] (name: leva) (id hint: levaVendor) 1 related asset
  asset src_global_domain_guides_index_tsx.bundle.js 101 KiB [emitted] 1 related asset
  + 22 assets
asset fd430a62fe505e180757.png 9.46 KiB [emitted] [immutable] [from: src/global/materials/load-more/imgs/common.png]
asset index.html 681 bytes [emitted]
Entrypoint main 13.6 MiB (10.2 MiB) = 6 assets 6 auxiliary assets
Entrypoint vendor 12.8 MiB (9.63 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB recoil.bundle.js 271 KiB chunk-otherVendors.bundle.js 3.87 MiB vendor.bundle.js 52.4 KiB 5 auxiliary assets
orphan modules 762 KiB [orphan] 938 modules

```


### 3. 多入口

```js

 SMP  ⏱
General output time took 1 min, 19.18 secs

 SMP  ⏱  Plugins
IgnorePlugin took 18.48 secs
HotModuleReplacementPlugin took 0.445 secs
MiniCssExtractPlugin took 0.082 secs
FriendlyErrorsWebpackPlugin took 0.078 secs
HtmlWebpackPlugin took 0.015 secs
CleanWebpackPlugin took 0.012 secs
ProgressPlugin took 0.006 secs
WatchIgnorePlugin took 0 secs

 SMP  ⏱  Loaders
modules with no loaders took 49.92 secs
  module count = 4125
esbuild-loader took 18.21 secs
  module count = 143
cache-loader, and
css-loader, and
sass-loader took 17.94 secs
  module count = 19
css-loader, and
sass-loader took 13.81 secs
  module count = 12
@svgr/webpack took 3.76 secs
  module count = 1
css-loader took 1.66 secs
  module count = 3
json-loader took 1.64 secs
  module count = 5
css-loader, and
postcss-loader, and
less-loader took 1.32 secs
  module count = 1
style-loader, and
css-loader, and
sass-loader took 0.096 secs
  module count = 12
style-loader, and
css-loader took 0.089 secs
  module count = 3
url-loader took 0.059 secs
  module count = 1
style-loader, and
cache-loader, and
css-loader, and
sass-loader took 0.028 secs
  module count = 19
html-webpack-plugin took 0.026 secs
  module count = 1
style-loader, and
css-loader, and
postcss-loader, and
less-loader took 0.001 secs
  module count = 1



Build completed in 125.021s

assets by path *.js 15.5 MiB
  asset lib.bundle.js 6.96 MiB [emitted] (name: lib) (id hint: lib) 1 related asset
  asset chunk-otherVendors.bundle.js 3.87 MiB [emitted] (name: chunk-otherVendors) (id hint: otherVendors) 1 related asset
  asset antd.bundle.js 1.63 MiB [emitted] (name: antd) (id hint: antVendor) 1 related asset
  asset wang_editor_react.bundle.js 806 KiB [emitted] (name: wang_editor_react) (id hint: editorVendor) 1 related asset
  asset styles.bundle.js 636 KiB [emitted] (name: styles) (id hint: styles) 1 related asset
  asset chunk-common.bundle.js 392 KiB [emitted] (name: chunk-common) (id hint: common) 1 related asset
  asset main.bundle.js 276 KiB [emitted] (name: main) 1 related asset
  asset selectGoods.bundle.js 275 KiB [emitted] (name: selectGoods) 1 related asset
  asset recoil.bundle.js 271 KiB [emitted] (name: recoil) (id hint: recoilVendor) 1 related asset
  asset leva.bundle.js 151 KiB [emitted] (name: leva) (id hint: levaVendor) 1 related asset
  asset src_global_domain_guides_index_tsx.bundle.js 101 KiB [emitted] 1 related asset
  + 22 assets
asset fd430a62fe505e180757.png 9.46 KiB [emitted] [immutable] [from: src/global/materials/load-more/imgs/common.png] (auxiliary name: chunk-common, selectGoods) (auxiliary id hint: common)
asset index.html 823 bytes [emitted]
Entrypoint main 13.6 MiB (10.2 MiB) = 6 assets 6 auxiliary assets
Entrypoint selectGoods 13.4 MiB (9.92 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB styles.bundle.js 636 KiB chunk-otherVendors.bundle.js 3.87 MiB selectGoods.bundle.js 275 KiB 6 auxiliary assets
Entrypoint auto 13.3 MiB (9.84 MiB) = 6 assets 6 auxiliary assets
Entrypoint vendor 12.8 MiB (9.63 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB recoil.bundle.js 271 KiB chunk-otherVendors.bundle.js 3.87 MiB vendor.bundle.js 52.4 KiB 5 auxiliary assets
orphan modules 762 KiB [orphan] 938 modules
```


### 4. 加入`thread-loader`

sass-loader 从58s 到 19s

```js
  done [====================] 99% (110.8 s)

 SMP  ⏱
General output time took 1 min, 50.82 secs

 SMP  ⏱  Plugins
IgnorePlugin took 23.16 secs
HotModuleReplacementPlugin took 0.315 secs
FriendlyErrorsWebpackPlugin took 0.066 secs
MiniCssExtractPlugin took 0.027 secs
HtmlWebpackPlugin took 0.014 secs
ProgressPlugin took 0.009 secs
CleanWebpackPlugin took 0.005 secs
WatchIgnorePlugin took 0.001 secs

 SMP  ⏱  Loaders
modules with no loaders took 1 min, 1.39 secs
  module count = 4125
thread-loader, and
esbuild-loader took 26.073 secs
  module count = 143
cache-loader, and
thread-loader, and
css-loader, and
sass-loader took 19.28 secs
  module count = 19
css-loader, and
sass-loader took 10.061 secs
  module count = 12
@svgr/webpack took 8.67 secs
  module count = 1
css-loader, and
postcss-loader, and
less-loader took 3.86 secs
  module count = 1
json-loader took 2.41 secs
  module count = 5
css-loader took 1.49 secs
  module count = 3
style-loader, and
css-loader took 0.31 secs
  module count = 3
html-webpack-plugin took 0.12 secs
  module count = 1
url-loader took 0.035 secs
  module count = 1
style-loader, and
cache-loader, and
thread-loader, and
css-loader, and
sass-loader took 0.024 secs
  module count = 19
style-loader, and
css-loader, and
sass-loader took 0.017 secs
  module count = 12
style-loader, and
css-loader, and
postcss-loader, and
less-loader took 0.001 secs
  module count = 1



Build completed in 135.48s

assets by path *.js 15.5 MiB
  asset lib.bundle.js 6.96 MiB [emitted] (name: lib) (id hint: lib) 1 related asset
  asset chunk-otherVendors.bundle.js 3.87 MiB [emitted] (name: chunk-otherVendors) (id hint: otherVendors) 1 related asset
  asset antd.bundle.js 1.63 MiB [emitted] (name: antd) (id hint: antVendor) 1 related asset
  asset wang_editor_react.bundle.js 806 KiB [emitted] (name: wang_editor_react) (id hint: editorVendor) 1 related asset
  asset styles.bundle.js 656 KiB [emitted] (name: styles) (id hint: styles) 1 related asset
  asset chunk-common.bundle.js 392 KiB [emitted] (name: chunk-common) (id hint: common) 1 related asset
  asset main.bundle.js 276 KiB [emitted] (name: main) 1 related asset
  asset selectGoods.bundle.js 275 KiB [emitted] (name: selectGoods) 1 related asset
  asset recoil.bundle.js 271 KiB [emitted] (name: recoil) (id hint: recoilVendor) 1 related asset
  asset leva.bundle.js 151 KiB [emitted] (name: leva) (id hint: levaVendor) 1 related asset
  asset src_global_domain_guides_index_tsx.bundle.js 101 KiB [emitted] 1 related asset
  + 22 assets
asset fd430a62fe505e180757.png 9.46 KiB [emitted] [immutable] [from: src/global/materials/load-more/imgs/common.png] (auxiliary name: chunk-common, selectGoods) (auxiliary id hint: common)
asset index.html 823 bytes [emitted]
Entrypoint main 13.6 MiB (10.2 MiB) = 6 assets 6 auxiliary assets
Entrypoint selectGoods 13.4 MiB (9.92 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB styles.bundle.js 656 KiB chunk-otherVendors.bundle.js 3.87 MiB selectGoods.bundle.js 275 KiB 6 auxiliary assets
Entrypoint auto 13.3 MiB (9.84 MiB) = 6 assets 6 auxiliary assets
Entrypoint vendor 12.8 MiB (9.63 MiB) = lib.bundle.js 6.96 MiB antd.bundle.js 1.63 MiB recoil.bundle.js 271 KiB chunk-otherVendors.bundle.js 3.87 MiB vendor.bundle.js 52.4 KiB 5 auxiliary assets
orphan modules 762 KiB [orphan] 938 modules
```


## 5. 加了cache之后的二次打包

```js
  done [====================] 99% (14.4 s)

 SMP  ⏱
General output time took 14.39 secs

 SMP  ⏱  Plugins
TerserPlugin took 5.3 secs
FriendlyErrorsWebpackPlugin took 1.31 secs
IgnorePlugin took 0.021 secs
MiniCssExtractPlugin took 0.009 secs
HtmlWebpackPlugin took 0.009 secs
ProgressPlugin took 0.004 secs
HotModuleReplacementPlugin took 0 secs
CleanWebpackPlugin took 0 secs

 SMP  ⏱  Loaders
cache-loader, and
thread-loader, and
css-loader, and
sass-loader took 2.13 secs
  module count = 2
css-loader, and
sass-loader took 1.01 secs
  module count = 1



Build completed in 14.898s

assets by status 6.17 MiB [cached] 30 assets
assets by path . 309 KiB
  asset selectGoods.bundle.js 146 KiB [emitted] [minimized] (name: selectGoods) 2 related assets
  asset main.bundle.js 143 KiB [emitted] [minimized] (name: main) 2 related assets
  asset auto.bundle.js 15.3 KiB [emitted] [minimized] (name: auto) 2 related assets
  asset vendor.bundle.js 4.16 KiB [emitted] [minimized] (name: vendor) 1 related asset
  asset index.html 823 bytes [emitted]
Entrypoint main 5.18 MiB (11.9 MiB) = 6 assets 6 auxiliary assets
Entrypoint selectGoods 5.1 MiB (11.5 MiB) = lib.bundle.js 2.55 MiB antd.bundle.js 827 KiB styles.bundle.js 271 KiB chunk-otherVendors.bundle.js 1.34 MiB selectGoods.bundle.js 146 KiB 6 auxiliary assets
Entrypoint auto 5.04 MiB (11.5 MiB) = 6 assets 6 auxiliary assets
Entrypoint vendor 4.78 MiB (11.3 MiB) = lib.bundle.js 2.55 MiB antd.bundle.js 827 KiB recoil.bundle.js 82 KiB chunk-otherVendors.bundle.js 1.34 MiB vendor.bundle.js 4.16 KiB 5 auxiliary assets
cached modules 9.71 MiB (javascript) 9.46 KiB (asset) [cached] 4342 modules
```