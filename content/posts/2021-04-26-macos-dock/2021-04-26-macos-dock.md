---
title: Organize macOS dock
subtitle: Tiddy up that screen
description: Add spacers on your dock to seperate apps
image: img/2021-04-26-macos-dock/index.png
tags:
  - macOS
author: Josh
createdAt: 2021-04-26 08:00
---

# Organize the Clutter

The more shortcut friendly you are, the more busy your macOS dock can become. Adding spacers to your dock can help organize those cluttered icons.

This isn’t a drag and drop GUI hack, but roll up your sleeves for a two line terminal process that will make your desktop look much cleaner.

- Step 1: Create the spacer

  ```bash
  defaults write com.apple.dock persistent-apps -array-add '{tile-type="spacer-tile";}'
  ```

- Step 2: Reset the dock

  ```bash
  killall Dock
  ```

The dock service is basically restarted and a newly added spacer will be available. Drag into the location as you please. Repeat both 1 & 2 for any additional spacers.

## Remove a spacer?

You can right click on the empty space and select the “Remove from Dock” option just like any other icon.

![remove-osx-dock-spacer](/img/2021-04-26-macos-dock/remove-macos-dock-spacer.jpg)
