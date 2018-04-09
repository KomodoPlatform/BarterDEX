const os = require('os'),
  exec = require('child_process').exec,
  electron = require('electron'),
  app = electron.app,
  osPlatform = os.platform();

// kill rogue marketmaker copies on start
killMarketmaker = function (data, quit) {
  if (data == true) {
    let marketmakerGrep;

    switch (osPlatform) {
      case 'darwin':
        marketmakerGrep = "ps -p $(ps -A | grep -m1 marketmaker | awk '{print $1}') | grep -i marketmaker";
        break;
      case 'linux':
        marketmakerGrep = 'ps -p $(pidof marketmaker) | grep -i marketmaker';
        break;
      case 'win32':
        marketmakerGrep = 'tasklist';
        break;
    }
    exec(marketmakerGrep, function (error, stdout, stderr) {
      if (stdout.indexOf('marketmaker') > -1) {
        const pkillCmd = osPlatform === 'win32' ? 'taskkill /f /im marketmaker.exe' : 'pkill -15 marketmaker';
        console.log('found another marketmaker process(es)');

        exec(pkillCmd, function (error, stdout, stderr) {
          console.log(`${pkillCmd} is issued`);
          if (quit) { app.quit(); }
          if (error !== null) { console.error(`${pkillCmd} exec error: ${error}`); };
        });
      } else {
        if (quit) { app.quit(); }
      }

      if (error !== null) { console.error(`${marketmakerGrep} exec error: ${error}`); };
    });
  }
}

module.exports = killMarketmaker;