(async function() {
  try {
      await fetch("http://httpstat.us/500");
  } catch (err) {
      console.error(err.message);
  }
})();