---
title: VS Code behind a proxy
subtitle: Update your VS Code settings
description: 'Wondering why your NPM Modules are failing to load? Timing out behind a corporate network?'
image: img/2020-09-01-VsCode-Proxy/index.png
tags:
  - VSCode
author: Josh C
---

## VS Code Preferences

The following error, in my case, was VS Code failing to download .NET Core library dependecies from behind my proxy:

![vscode-proxy-error](/img/2020-09-01-VsCode-Proxy/vscode-proxy-error.png)

All that is required is to update your VS Code proxy config (Preferences > Settings):

```json
{
  "http-proxy": "http:myProxy.proxy"
}
```

Restart VS Code and you'll be off and running to install new extensions.
