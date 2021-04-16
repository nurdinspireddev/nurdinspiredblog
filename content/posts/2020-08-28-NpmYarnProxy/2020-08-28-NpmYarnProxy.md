---
title: NPM and Yarn Behind a Proxy
subtitle: Update your proxy config settings
description: 'Wondering why your NPM Modules are failing to load? Timing out behind a corporate network?'
image: img/2020-08-28-NpmYarnProxy/index.png
tags:
  - Npm
  - Yarn
author: Josh C
---

# NPM

> Wondering why your NPM Modules are failing to load? Timing out behind a corporate network?

## Lets review the npm config file

You can see your current `http` and `https` proxy configurations, if any. To view your current NPM config file in your terminal, enter the following command:

```js
npm config list
```

To update these configs, let's walk through the following commands...

### Update http & https proxy

```bash
npm config set proxy http://proxy.myProxy/

npm config set https-proxy http://proxy.myProxy/
```

Once the changes are made, go back to list the config file to see your changes.

> How do you remove the configs you say?

```bash
npm config rm proxy

npm config rm https-proxy
```

# YARN

### Almost the same mods are needed for a Yarn Config

```bash
yarn config list
```

### Update http & https proxy

```bash
yarn config set proxy http://proxy

yarn config set https-proxy http://proxy
```

### Removing config (uses delete keyword)

```bash
yarn config delete proxy

yarn config delete https-proxy
```
