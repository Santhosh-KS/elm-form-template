export const flags = ({ env }) => {
  return {
    token: JSON.parse(window.localStorage.token || null),
  };
};

export const onReady = ({ env, app }) => {
  if (app.ports && app.ports.sendToLocalStorage) {
    app.ports.sendToLocalStorage.subscribe(({ key, value }) => {
      window.localStorage[key] = JSON.stringify(value);
    });
  }
};
