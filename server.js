const { syncAndSeed } = require('./db');
const init = async () => {
  try {
    await syncAndSeed();
    console.log('ready');
  } catch (error) {
    console.log(error);
  }
};

init();
