# Official BarterDEX README

The BarterDEX application created by Komodo Platform allows trading cryptocurrency coins without a counterparty risk.
 The protocol is open-source and trading is available for any coin that any developers choose to connect to The BarterDEX.
 The parent project, Komodo Platform, freely provides BarterDEX technology through open-source philosophy. BarterDEX fully realizes decentralized order matching, trade clearing, and settlement. The order
-matching aspect uses a low-level pubkey-to-pubkey messaging protocol, and the final settlement is executed through an atomic cross-chain swap. 

[Komodo Platform Official Site](https://komodoplatform.com)  
[Komodo BarterDEX Support Page](https://support.komodoplatform.com/support/solutions/29000034533)  
[Komodo Whitepaper](https://komodoplatform.com/whitepaper)


# BarterDEX App

BarterDEX App includes all things required to run. You don't need to do anything else. Just use the following instructions to start using it.

It has the pre-compiled `marketmaker` bundled with it. But in any case you still wish to compile `marketmaker` yourself, you can follow these instructions:

https://github.com/KomodoPlatform/KomodoPlatform/wiki/Compile-marketmaker-Binary-with-Static-nanomsg-in-Linux
https://github.com/KomodoPlatform/KomodoPlatform/wiki/Compile-marketmaker-Binary-with-Static-nanomsg-in-MacOS

### Setup

#### Requirements
- Git
- Node.js - v7.10.0 or above


To get started, follow these steps:
```shell
git clone https://github.com/KomodoPlatform/BarterDEX.git
cd BarterDEX
git checkout dev
git pull
npm install
npm start
```

It will download "BarterDEX". Open "BarterDEX", and from there open "index.html" file in your web browser.

### Update
To update, follow these steps:
```shell
cd BarterDEX
git pull
git checkout dev
git pull
```

#### For end users

To build the production-ready app, install `electron-packager` and `electron-prebuilt` packages from npm
```shell
sudo npm install electron-packager -g
sudo npm install -g electron --unsafe-perm=true
```


### Instructions to test
1. Start BarterDEX
2. Login with a `passphrase` (either pre-generated or make a new one).
3. Add the coins you want to test in Native mode or Electrum mode (electrum does not require downloading blockchain data)
4. Fund your addresses. Once sent, it will start reflecting there in a minute.
5. Click Exchange button to go to trading page
5. Give the maximum price that you would like to pay for REVS. Example: 1.6
6. Give the maximum amount of REVS you would like to buy. Example: 1
7. Wait and watch the REVS balance increasing as trades happen.

#### Report Issues
Please feel free to test and post any bugs or issues found here: https://github.com/KomodoPlatform/BarterDEX/issues

#### Testing Notes
If your wallet is encrypted, the app will not work with it. This feature will be made available in coming releases.


### **Build the App**
Refer to the original [electron-packager](https://github.com/electron-userland/electron-packager) repository for more detailed information.


##### Quick Build Instructions
Make sure you have already done `npm install` or `npm upgrade` before executing these commands:

```shell
cd BarterDEX

# Linux
npm run package:linux

# Mac
npm run package:mac

# Windows
npm run package:win
```

##### Linux
Change directory to BarterDEX and execute the following command to build the Linux app
```shell
cd BarterDEX
electron-packager . --platform=linux --arch=x64 --icon=assets/icons/barterdex/128x128.png --out=build/ --buildVersion=VERSION_NUMBER_HERE --ignore=assets/bin/win64 --ignore=assets/bin/osx --overwrite
```
change architecture build parameter to ```--arch=x32``` for 32 bit build

##### OSX
Change directory to BarterDEX and execute the following command to build the OSX app
```shell
cd BarterDEX
electron-packager . --platform=darwin --arch=x64 --icon=assets/icons/barterdex/barterdex.icns --out=build/ --buildVersion=VERSION_NUMBER_HERE --ignore=assets/bin/win64 --ignore=assets/bin/linux64 --overwrite
```

##### Windows
Change directory to BarterDEX and execute the following command to build the Windows app
```shell
dir BarterDEX
electron-packager . --platform=win32 --arch=x64 --icon=assets/icons/barterdex/barterdex.ico --out=build/ --buildVersion=VERSION_NUMBER_HERE --ignore=assets/bin/osx --ignore=assets/bin/linux64 --overwrite

# If generating 32bit desktop package
electron-packager . --platform=win32 --arch=ia32 --icon=assets/icons/barterdex/barterdex.ico --out=build/ --buildVersion=VERSION_NUMBER_HERE --ignore=assets/bin/osx --ignore=assets/bin/linux64 --overwrite

# To build both x64 and x86 desktop package
electron-packager . --platform=win32 --arch=all --icon=assets/icons/barterdex/barterdex.ico --out=build/ --buildVersion=VERSION_NUMBER_HERE --ignore=assets/bin/osx --ignore=assets/bin/linux64 --overwrite
```
change architecture build parameter to ```--arch=x64``` for 64 bit build



## Localization Instructions

BarterDEX follows language and country code list localization file names. Please use the following links to get more info on the standard codes for country and language codes:

https://datahub.io/core/language-codes

https://datahub.io/core/country-list


## Troubleshooting

Windows users might need to install required DLL file(s) for `marketmaker.exe`.

You can install this in case you find BaeterDEX GUI keep loading and not ending up to login screen.

Visual C++ Redistributable for Visual Studio 2015
https://www.microsoft.com/en-US/download/details.aspx?id=48145



## License

MIT License                                        

Copyright (c) 2017 Komodo Platform

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The aforementioned copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.    

## Disclaimer
THIS SOFTWARE IS PROVIDED "AS IS" AND ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE REGENTS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
