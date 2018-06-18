const electron = require('electron'),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow,
  path = require('path'),
  url = require('url'),
  os = require('os'),
  osPlatform = os.platform(),
  fsnode = require('fs'),
  fs = require('fs-extra'),
  mkdirp = require('mkdirp'),
  exec = require('child_process').exec,
  spawn = require('child_process').spawn,
  portscanner = require('portscanner'),
  fixPath = require('fix-path'),
  numCPUs = require('os').cpus().length,
  killmm = require('./killmm'),
  request = require('request'),
  { ipcMain } = require('electron');

var ps = require('ps-node'),
  shepherd = '',
  assetChainPorts = require('./ports.js'),
  BarterDEXBin,
  BarterDEXDir;

Promise = require('bluebird');

// SETTING OS DIR TO RUN MARKETMAKER FROM
// SETTING APP ICON FOR LINUX AND WINDOWS
switch (osPlatform) {
  case "darwin":
    fixPath();
    BarterDEXBin = path.join(__dirname, '../assets/bin/osx/marketmaker');
    BarterDEXDir = `${process.env.HOME}/Library/Application Support/BarterDEX`;
    CoinsDBDir = `${process.env.HOME}/Library/Application Support/BarterDEX/CoinsDB`;
    CoinsDBIconsDir = `${process.env.HOME}/Library/Application Support/BarterDEX/CoinsDB/icons`;
    break;
  case "linux":
    BarterDEXBin = path.join(__dirname, '../assets/bin/linux64/marketmaker');
    BarterDEXDir = `${process.env.HOME}/.BarterDEX`;
    CoinsDBDir = `${process.env.HOME}/.BarterDEX/CoinsDB`;
    CoinsDBIconsDir = `${process.env.HOME}/.BarterDEX/CoinsDB/icons`;
    break;
  case "win32":
    BarterDEXBin = path.join(__dirname, '../assets/bin/win64/marketmaker.exe');
    BarterDEXBin = path.normalize(BarterDEXBin);
    BarterDEXDir = `${process.env.APPDATA}/BarterDEX`;
    BarterDEXDir = path.normalize(BarterDEXDir);
    CoinsDBDir = `${process.env.APPDATA}/BarterDEX/CoinsDB`;
    CoinsDBDir = path.normalize(CoinsDBDir);
    CoinsDBIconsDir = `${process.env.APPDATA}/BarterDEX/CoinsDB/icons`;
    CoinsDBIconsDir = path.normalize(CoinsDBIconsDir);
    BarterDEXIcon = path.join(__dirname, '/assets/icons/barterdex/barterdex.ico');
    break;
}
_BarterDEXSettingsFile = `${BarterDEXDir}/settings.json`;
// DEFAULT COINS LIST FOR MARKETMAKER
defaultCoinsListFile = path.join(__dirname, '../assets/coins.json');
// DEFAULT BARTERDEX SETTINGS FILE
defaultBarterDEXSettingsFile = path.join(__dirname, '../assets/settings.json');

//Make empty zeroconf log files if not there
fs.ensureFile(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`)
  .then(() => {
    console.log('success!')
    fs.readJson(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`, (err, zconf_deposit_log) => {
      if (err) console.error(err)
      var isitjson = typeof zconf_deposit_log == 'object';
      if (isitjson == false) {
        fs.appendFile(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`, `[]`, function (err) {
          if (err) throw err;
          console.log('ZeroConf deposit log updated!');
        });
      }
    })
  })
  .catch(err => { console.error(err); })

fs.ensureFile(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`)
  .then(() => {
    console.log('success!')
    fs.readJson(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`, (err, zconf_claim_log) => {
      if (err) console.error(err)
      var isitjson = typeof zconf_claim_log == 'object';
      if (isitjson == false) {
        fs.appendFile(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`, `[]`, function (err) {
          if (err) throw err;
          console.log('ZeroConf claim log updated!');
        });
      }
    })
  })
  .catch(err => { console.error(err); })


fs.pathExists(_BarterDEXSettingsFile, (err, exists) => {
  if (exists === true) {
    console.log('barterdex settings file exist');
  } else if (exists === false) {
    console.log('barterdex settings file doesn\'t exist');
    fs.copy(defaultBarterDEXSettingsFile, _BarterDEXSettingsFile)
      .then(() => { console.log('barterdex settings file copied!') })
      .catch(err => { console.error(err) })
  }
  if (err) { console.error(err) } // => null
});

ipcMain.on('shepherd-command', (event, arg) => {
  console.log('Shepard arg: ' + JSON.stringify(arg.command))  // prints arg
  switch (arg.command) {
    case 'ping':
      event.returnValue = 'pong'
      break;
    case 'login':
      console.log(BarterDEXBin + '\n' + BarterDEXDir);
      event.returnValue = 'Logged In';
      //const _passphrase = 'scatter quote stumble confirm extra jacket lens abuse gesture soda rebel seed nature achieve hurt shoot farm middle venture fault mesh crew upset cotton';
      StartMarketMaker({ "passphrase": arg.passphrase });
      break;
    case 'logout':
      killmm(true);
      event.returnValue = 'Logged Out';
      break;
    case 'mmstatus':
      portscanner.checkPortStatus(7783, '127.0.0.1', function (error, status) {
        console.log(status)
        event.returnValue = status;
      })
      break;
    case 'update_zeroconf_log':
      UpdateZeroConfLogs(arg.data);
      event.returnValue = 'Zeroconf log updated';
      break;
    case 'read_zeroconf_log':
      if (arg.type == 'deposit') {
        fs.readJson(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`)
          .then(zconf_deposit_log_file => { event.returnValue = zconf_deposit_log_file; })
          .catch(err => { console.error(err) })
      }
      if (arg.type == 'claim') {
        fs.readJson(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`)
          .then(zconf_claim_log_file => { event.returnValue = zconf_claim_log_file; })
          .catch(err => { console.error(err) })
      }
      break;
    case 'remove_finished_swap_file':
      fs.remove(`${BarterDEXDir}/DB/SWAPS/${arg.requestid}-${arg.quoteid}.finished`)
        .then(() => {
          console.log('Removed: ' + `${BarterDEXDir}/DB/SWAPS/${arg.requestid}-${arg.quoteid}.finished`)
          event.returnValue = 'removed';
        })
        .catch(err => {
          console.error(err)
          event.returnValue = 'error';
        })
      break;
    case 'read_settings':
      fs.readJson(`${BarterDEXDir}/settings.json`)
        .then(barterdex_settings_file_output => { event.returnValue = barterdex_settings_file_output; })
        .catch(err => { console.error(err) })
      break;
    case 'update_settings':
      UpdateBarterDEXSettings(arg.data);
      event.returnValue = 'BarterDEX settings updated';
      break;
    case 'reset_settings':
      fs.copy(defaultBarterDEXSettingsFile, _BarterDEXSettingsFile, { overwrite: true })
        .then(() => { console.log('barterdex settings file copied!') })
        .catch(err => { console.error(err) })
      event.returnValue = 'reset_done';
      break;
    case 'app_info':
      var return_app_info_data = {"app_version": app.getVersion(),"BarterDEXDir": BarterDEXDir, "CoinsDBDir": CoinsDBDir, "CoinsDBIconsDir": CoinsDBIconsDir};
      event.returnValue = return_app_info_data;
      break;
    case 'get_lang_data':
      console.log(arg.lang);
      fs.readJson(path.join(__dirname, `../assets/languages/${arg.lang}.json`))
        .then(barterdex_deflang_file_output => {
          event.returnValue = barterdex_deflang_file_output;
        })
        .catch(err => { console.error(err) })
      break;
    case 'get_lang_file_list':
      fs.readdir(path.join(__dirname, `../assets/languages/`), function (err, lang_files) {
        if (err) throw err;
        console.log(lang_files);
        event.returnValue = lang_files;
      });
      break;
    case 'coins_db_dl':
      console.log(arg);
      CoinsDBDownloadFiles(arg.data);
      event.returnValue = 'CoinsDB command executed';
      break;
    case 'coins_db_get_coins_file':
      console.log('Getting Coins DB file...');
      fs.readJson(path.join(`${CoinsDBDir}/coins`))
        .then(coins_db_coins_local_file => {
          event.returnValue = coins_db_coins_local_file;
        })
        .catch(err => { console.error(err) })
      break;
    case 'coins_db_update_coins_json_file':
      const _coinsListFile = BarterDEXDir + '/coins.json'
      fs.writeJsonSync(_coinsListFile, arg.data, function (err) {
        if (err) throw err;
        console.log('Coins JSON file updated!');
        event.returnValue = 'Coins JSON file updated!';
      });
      break;
    case 'coins_db_read_db':
      fs.readJson(`${CoinsDBDir}/coins`)
        .then(coins_db_file => { event.returnValue = coins_db_file; })
        .catch(err => { console.error(err) })
      break;
    default:
      event.returnValue = 'Command not found';
  }
})


StartMarketMaker = function (data) {
  try {
    
    //Delete coins.json file so that BarterDEX always gets the same copy of coins.json from default file.
    //Disable this line when coinsDB feature is enabled.
    fs.unlink(BarterDEXDir + '/coins.json');
    
    // check if marketmaker instance is already running
    portscanner.checkPortStatus(7783, '127.0.0.1', function (error, status) {
      // Status is 'open' if currently in use or 'closed' if available
      if (status === 'closed') {
        const _coinsListFile = BarterDEXDir + '/coins.json'

        fs.pathExists(_coinsListFile, (err, exists) => {
          if (exists === true) {
            console.log('file exist');
            var coinslist_filedata = fs.readJsonSync(_coinsListFile, { throws: false });
            data.coinslist = ProcessCoinsList(coinslist_filedata);
            // data.coinslist is not used under Windows, if coins.json already exists
            // it will be directly used by marketmaker
            ExecMarketMaker(data);
          } else if (exists === false) {
            console.log('file doesn\'t exist');
            fs.copy(defaultCoinsListFile, _coinsListFile)
              .then(() => {
                console.log('file copied!')
                var coinslist_filedata = fs.readJsonSync(_coinsListFile, { throws: false });
                data.coinslist = ProcessCoinsList(coinslist_filedata);
                if (os.platform() === 'win32') { fs.writeJsonSync(_coinsListFile, data.coinslist); } // ver.2
                ExecMarketMaker(data);
              })
              .catch(err => { console.error(err) })
          }
          if (err) { console.error(err) } // => null
        })
      } else { console.error(`port 7783 marketmaker is already in use`); }
    });
  } catch (e) { console.error(`failed to start marketmaker err: ${e}`); }
}

let mmid;
ExecMarketMaker = function (data) {
  const _customParam = {
    'gui': 'simplegui',
    'client': 1,
    'profitmargin': 0.01,
    'userhome': `${process.env.HOME}`,
    'passphrase': data.passphrase,
    'coins': data.coinslist
  };

  let params = _customParam;
  if (osPlatform !== 'win32') {
    params = JSON.stringify(_customParam);
    params = `'${params}'`;
  } else {
    BarterDEXBin = '"' + BarterDEXBin + '"';
    params.userhome = process.env.APPDATA;
    // if not undefined and true for Windows we should use coins.json file, and don't pass coins in command line
    if (!!params.coins) { delete params.coins; }
    params = JSON.stringify(_customParam);
    params = params.replace(/"/g, '\\"');
    params = '"' + params + '"';

  }

  var logStream = fs.createWriteStream(`${BarterDEXDir}/logFile.log`, { flags: 'a' });
  console.log('mm start\n' + `${BarterDEXBin} ${params}`)
  mmid = exec(`${BarterDEXBin} ${params}`, {
    cwd: BarterDEXDir,
    maxBuffer: 1024 * 50000 // 50 mb
  }, function (error, stdout, stderr) {
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    if (error !== null) { console.error(`exec error: ${error}`); }
  });

  mmid.stdout.on('data', (data) => { console.log(`child stdout:\n${data}`); }).pipe(logStream);
  mmid.stderr.on('data', (data) => { console.error(`child stderr:\n${data}`); }).pipe(logStream);
}

UpdateZeroConfLogs = function (zeroconf_log_data) {
  if (zeroconf_log_data.type == 'deposit') {
    fs.ensureFile(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`)
      .then(() => {
        console.log('success!')
        fs.readJson(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`, (err, zconf_deposit_log) => {
          if (err) console.error(err)
          var isitjson = typeof zconf_deposit_log == 'object';
          if (isitjson == false) {
            fs.appendFile(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`, `[` + zeroconf_log_data.logdata + `]`, function (err) {
              if (err) throw err;
              console.log('ZeroConf deposit log updated!');
            });
          } else {
            console.log(zconf_deposit_log);
            zconf_deposit_log.push(JSON.parse(zeroconf_log_data.logdata));
            console.log('===============\n' + zconf_deposit_log);
            fs.writeJsonSync(`${BarterDEXDir}/ZeroConf_Deposit_logFile.log`, zconf_deposit_log, function (err) {
              if (err) throw err;
              console.log('ZeroConf deposit log updated!');
            });
          }
        })
      })
      .catch(err => { console.error(err); })
  }

  if (zeroconf_log_data.type == 'claim') {
    fs.ensureFile(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`)
      .then(() => {
        console.log('success!')
        fs.readJson(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`, (err, zconf_claim_log) => {
          if (err) console.error(err)
          var isitjson = typeof zconf_claim_log == 'object';
          if (isitjson == false) {
            fs.appendFile(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`, `[` + zeroconf_log_data.logdata + `]`, function (err) {
              if (err) throw err;
              console.log('ZeroConf claim log updated!');
            });
          } else {
            JSON.parse(zeroconf_log_data.logdata)
            zconf_claim_log.push(JSON.parse(zeroconf_log_data.logdata));
            fs.writeJsonSync(`${BarterDEXDir}/ZeroConf_Claim_logFile.log`, zconf_claim_log, function (err) {
              if (err) throw err;
              console.log('ZeroConf claim log updated!');
            });
          }
        })
      })
      .catch(err => { console.error(err); })
  }
}

UpdateBarterDEXSettings = function (settings_data) {
  console.log(settings_data);

  fs.ensureFile(_BarterDEXSettingsFile)
    .then(() => {
      fs.writeJsonSync(_BarterDEXSettingsFile, settings_data, function (err) {
        if (err) throw err;
        console.log('ZeroConf claim log updated!');
      });
    })
    .catch(err => { console.error(err); })
}



function ProcessCoinsList(coins) {
  if (osPlatform === 'darwin') { fixPath(); };
  coins = JSON.stringify(coins);
  switch (osPlatform) {
    case "darwin":
      coins = coins.replace(/USERHOME/g, `${process.env.HOME}/Library/Application Support`);
      coins = coins.replace(/\/\./g, '/');
      break;
    case "linux":
      coins = coins.replace(/USERHOME/g, `${process.env.HOME}`);
      break;
    case "win32":
      coins = coins.replace(/USERHOME/g, `${process.env.APPDATA}`);
      coins = coins.replace(/\/\./g, '/');
      coins = path.normalize(coins);
      // coins = coins.replace(/\\/g, "\\\\");
      coins = coins.replace(/\\/g,'/');  // FIXED - ERROR on windows
      break;
  }
  coins = JSON.parse(coins);
  return coins;

}


/* Coins DB IPC calls and functions */

var coin_db_img_url = 'https://raw.githubusercontent.com/jl777/coins/master/icons/';
var coins_db_coins_url = 'https://raw.githubusercontent.com/jl777/coins/master/coins';

CoinsDBDownloadFiles = function (action_data) {
  console.log(action_data);

  var cdb_dl_fn = function(url, dest, cb) {
      var file = fs.createWriteStream(dest);
      var sendReq = request.get(url);

      // verify response code
      sendReq.on('response', function(response) {
          if (response.statusCode !== 200) {
              return cb('Response status was ' + response.statusCode);
          }
      });

      // check for request errors
      sendReq.on('error', function (err) {
          fs.unlink(dest);
          return cb(err.message);
      });

      sendReq.pipe(file);

      file.on('finish', function() {
          file.close(cb);  // close() is async, call cb after close completes.
      });

      file.on('error', function(err) { // Handle errors
          fs.unlink(dest); // Delete the file async. (But we don't check the result)
          return cb(err.message);
      });
  };

  switch (action_data.cmd) {
    case 'dl_icons':
      console.log('Shepherd IPC Command ==> CoinsDB Command --> downloading selected coins icons...');
      console.log(action_data.coin_array)

      // Ensure that CoinsDB/icons directory exists locally with promises:
      fs.ensureDir(CoinsDBIconsDir)
      .then(() => {
        console.log('CoinsDB Status: Ensured CoinsDB icons directory exists: ' + CoinsDBIconsDir);
        console.log('CoinsDB Status: Downloading coins icons: ' + CoinsDBIconsDir);

        for (var i = 0, l = action_data.coin_array.length; i < l; i++ ) {
          console.log(action_data.coin_array[i]);
          console.log(coin_db_img_url + action_data.coin_array[i] + '.png');
          cdb_dl_fn(coin_db_img_url + action_data.coin_array[i] + '.png', `${CoinsDBIconsDir}/${action_data.coin_array[i]}.png`, function(cb) {
            console.log(cb);
          });
        }

      })
      .catch(err => {
        console.error(err)
      })
      break;
    case 'update_coins_file':
      console.log('Shepherd IPC Command ==> CoinsDB Command --> updating coins file...');

      // Ensure that CoinsDB directory exists locally with promises:
      fs.ensureDir(CoinsDBDir)
      .then(() => {
        console.log('CoinsDB Status: Ensured CoinsDB directory exists: ' + CoinsDBDir);
        console.log('CoinsDB Status: Downloading Coins File: ' + CoinsDBDir);
            // Remove existing file and download fresh copy of coins file
            fs.remove(`${CoinsDBDir}/coins`)
            .then(() => {
                cdb_dl_fn(coins_db_coins_url, `${CoinsDBDir}/coins`, function(cb) {
                    console.log(cb);
                });
            })
            .catch(err => {
                console.error(err)
            })
      })
      .catch(err => {
        console.error(err)
      })
      break;
    default:
      console.log('CoinsDB command not found');
  }

}

/* Coins DB IPC calls and functions END */