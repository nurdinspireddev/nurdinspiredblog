---
title: VS Code behind a proxy
subtitle: Update your VS Code settings
description: 'Wondering why your NPM Modules are failing to load? Timing out behind a corporate network?'
image: img/2021-04-19-VsCode-Proxy/index.png
tags:
  - VSCode
author: Josh
createdAt: 2021-04-19 08:00
---

## VS Code Preferences

The following error, in my case, was VS Code failing to download .NET Core library dependecies from behind my proxy:

![vscode-proxy-error](/img/2021-04-19-VsCode-Proxy/vscode-proxy-error.png)

All that is required is to update your VS Code proxy config (Preferences > Settings):

```json
{
  "http-proxy": "http:myProxy.proxy"
}
```

Restart VS Code and you'll be off and running to install new extensions.
