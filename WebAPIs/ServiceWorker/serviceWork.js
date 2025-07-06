const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const frameWorkUrl = 'https://lf3-fe.ecombdstatic.com/obj/ecom-cdn-default/ecom/alliance_shop/main/main/static/js/framework_8330e9cd.js';
      const registration = await navigator.serviceWorker.register("frameWorkUrl", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("正在安装 Service worker");
      } else if (registration.waiting) {
        console.log("已安装 Service worker installed");
      } else if (registration.active) {
        console.log("激活 Service worker");
      }
    } catch (error) {
      console.error(`注册失败：${error}`);
    }
  }
};

// …

registerServiceWorker();
