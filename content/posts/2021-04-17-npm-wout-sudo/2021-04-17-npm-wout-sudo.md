---
title: npm without SUDO on macOS
subtitle: Save yourself from NPM Sudo headache
description: Less keystrokes makes us all better people
image: img/2021-04-17-npm-wout-sudo/index.png
tags:
  - Npm
author: Josh C
---

# NPM Without SUDO!

Using SUDO for every <code class="language-bash">npm install</code> is not a recommended practice. The simpliest way to circumvent this is to create your own node packages location within your \$HOME directory.

### This is a process followed by many others already, I'm just repeating this down the grapevine...

1. First of all, you need Node.js installed!
2. Create a hidden directory such as:

   ```bash
   mkdir ~/.npm-packages
   ```

   The tilda ~ is equivalent to your Home directory. You can verify this by echoing your home path from your terminal:

   ```bash
   echo $HOME
   ```

3. Tie this all together by telling npm where this newly created directory exists:

   ```bash
   npm config set prefix ~/.npm-packages
   ```

## Test your changes:

List your npm configs: <code class="language-bash">npm config list</code>
View your new npm directory path:

```bash
npm list -g --depth=0
```

You should only see NPM listed as the sole library.
