//The service worker
self.onsystemmessage = (evt) => {
  console.warn('onsystemmessage');

  const serviceHandler = () => {
    if (evt.name === 'activity') {
      console.warn('About to handle activity.');
      handler = evt.data.webActivityRequestHandler();
      const { name: activityName, data: activityData } = handler.source;
      if (activityName === 'kaiteCallback') {
        const { code } = activityData;
        const url = `/index.html?code=${code}`;
        clients.openWindow(url);
      }
    }
  };
  evt.waitUntil(serviceHandler());
};
