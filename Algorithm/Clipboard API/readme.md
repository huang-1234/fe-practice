## Clipboard API

浏览器允许 JavaScript 脚本读写剪贴板，自动复制或粘贴内容。

一般来说，脚本不应该改动用户的剪贴板，以免不符合用户的预期。但是，有些时候这样做确实能够带来方便，比如"一键复制"功能，用户点击一下按钮，指定的内容就自动进入剪贴板。

目前，一共有三种方法可以实现剪贴板操作。

Document.execCommand()方法
异步的 Clipboard API
copy 事件和 paste 事件
本文逐一介绍这三种方法。