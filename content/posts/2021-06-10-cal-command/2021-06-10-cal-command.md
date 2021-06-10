---
title: cal Command
subtitle: Helpful terminal command for *nix systems.
description: Easily display a calendar in your *nix terminal
image: img/2021-06-10-cal-command/index.png
tags:
  - macOS
author: Josh
createdAt: 2021-06-10 08:00
---

# cal Command in Unix/Linux OS's

The <code class="language-bash">cal</code> command is a utility to display a full calendar month, year, or even a range of months.

<br/>

## <code class="language-bash">cal</code> _Default command to show current month._

![Cal Default](/img/2021-06-10-cal-command/cal-default.png)

<br/>

## <code class="language-bash">cal -3</code> _Show previous, current, and next month._

![Cal -3](/img/2021-06-10-cal-command/cal-3.png)

<br/>

## <code class="language-bash">cal -m [month]</code> _Show specific month 1,..,12 of current year_

![Cal -m](/img/2021-06-10-cal-command/cal-m.png)

<br/>

## <code class="language-bash">cal [month] [year]</code> _Show specific month 1,..,12 of specified year YYYY._

![Cal -m-y](/img/2021-06-10-cal-command/cal-m-y.png)

<br/>

## <code class="language-bash">cal -y[optional] [year]</code> _Show specific a year YYYY, all 12 months._

![Cal -y](/img/2021-06-10-cal-command/cal-y.png)

<br/>

## <code class="language-bash">cal -j</code> _Show day count of the year since January 1, Julian Dates._

Default will display current month, you can also enter any specific month and year to calculate days from January 1st such as: <code class="language-bash">cal -j 02 2021</code>.

![Cal -j](/img/2021-06-10-cal-command/cal-j.png)

<br/>

## <code class="language-bash">cal | pbcopy</code> _Copy cal output to clipboard._

![Cal -pbcopy](/img/2021-06-10-cal-command/cal-pbcopy.png)

Paste text value...

![Cal -paste](/img/2021-06-10-cal-command/cal-paste.png)
