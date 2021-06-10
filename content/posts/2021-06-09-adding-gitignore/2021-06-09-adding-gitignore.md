---
title: Adding a .gitignore file
subtitle:
description: Adding .gitignore to an existing project.
image: img/2021-06-09-adding-gitignore/index.png
tags:
  - Git
author: Josh
createdAt: 2021-06-09 08:00
---

# Why do I need a .gitignore?

The <code class="language-bash">.gitignore</code> file is used to explicitly list untracked files that Git should ignore. We're talking files with secrets and other details you don't want to be included in your project's repository. The <code class="language-bash">.gitignore</code> file can list specific files, directories, and also name patterns for exclusion.

Not only secrets but also annoying OS specific cache files can be excluded, what ever you want to add to the list.

# Problem

When first creating a project you usually add a <code class="language-bash">.gitignore</code> template for the technology you'll be working with. However, often times we either forget or need to modify the <code class="language-bash">.gitignore</code> file after our first merge and files have either been added or excluded by mistake. Modifying your <code class="language-bash">.gitignore</code> file will not immeditiatley update your project, the Git cache can prevent your intended changes.

We can instruct Git to ignore the .gitignore cache and accept our new changes by doing the following.

# Example - Adding a .gitignore to an Existing Project

**_COMMIT ALL PENDING CHANGES BEFORE CONTINUING_**
<br/>

## Step 0. Update your .gitignore file

Make the changes to your <code class="language-bash">.gitignore</code> file, either add or exclude a file or directory.

```bash
#FILE: .gitignore sample

# *NEW CHANGE
# Comment out client diretory from exlusion, we want to add it to the repository tracking
# ./client

# * NEW CHANGE
# New Exclusion:  DS_Store file (macOS),  we don't want 'em.
.DS_Store


# Already Excluded pattern appsettings.json
**/appsettings.json
**/appsettings.*.json

# Already Excuded ROOT ENV files
.env
.env.local

```

<br/>

## Step 1. Reset Cache

We want to reset the Git cache for our <code class="language-bash">.gitignore</code> updates.

```bash
# RECOMMENDED: To remove a specific file or directory cache, use the following:
# -r is a recursive call to remove contents when a directory is specified.
git rm -r --cached ./clientapp
git rm -r --cached ./.DS_Store
```

```bash
# To remove ALL cache you'd use the following command (Worst case scenario)
git rm -r --cached .
```

<br/>

## Step 2. Add the file/ directory back with the updated .gitignore changes.

Add our changes.

```bash
# RECOMMENDED: Git add the specific changed files/ directory
git add ./clientapp
git add ./.DS_Store
```

```bash
# This option will add any other pending changes to your branch.
# -A add ALL changes: additions, modifications, deletes
git add -A
```

<br/>

## Step 3. Commit

Commit the updates.

```bash
# Git Commit your .gitignore updates
git commit -m "Updates to .gitignore"
```

<br/>

### Check Status

You can always check status after each step to see the changes being made.

```bash
git status
```
