if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pk-app/sw.js', { scope: '/pk-app/' })})}