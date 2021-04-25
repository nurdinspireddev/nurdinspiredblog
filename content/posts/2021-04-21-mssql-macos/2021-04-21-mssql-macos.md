---
title: MSSQL + macOS
subtitle: MSSQL 2019 running on macOS
description: Running SQL Server on a Mac is possible, thanks Docker!
image: img/2021-04-21-mssql-macos/index.png
tags:
  - macOS
  - SQL Server
author: Josh
---

# Intro

Taking a shot at the [Microsoft quickstart](https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver15&pivots=cs1-bash). This post will go over my walkthrough to get SQL Server (2019) running locally on my machine.

## Step 1: Installing Docker

---

### (If you have Docker already installed Skip to step 2)

Hopefully you have a working knowledge of Docker. If you don't, let's walk through the steps of setting up a Community Edition version of Docker for Mac. Download the free Community Edition from the [Docker Store](https://store.docker.com/editions/community/docker-ce-desktop-mac).

You may be required to create an account in order to download the .dmg file. Once downloaded, start the .dmg file and drop the file into your Applications folder to install it.

![Docker Mac Drag Drop](/img/2021-04-21-mssql-macos/docker_mac_dragdrop.png)

Once installed, you'll be prompted for a privileged access. Enter your password and let it do it's thing.

### Configure Docker Preferences

You can modify your system resources for docker by clicking on the Preferences option from the Docker icon in the toolbar.  In the Docker window, click on the cog (Settings) button in the app and view the _Resources_ tab. 

![Docker System Resources](/img/2021-04-21-mssql-macos/docker_mac_system_resources.png)

Microsoft's original article I linked in the intro specifies system preferences as the following:

- **Docker Engine 1.8+**
- **Minimum of 2 GB of disk space**
  - _(Disk space will increase with the size of your DB.....)_
- **Minimum of 2 GB of RAM**
  - _(I prefer to extend to 4GB if you'll be using this heavily in testing and supporting other local apps)_



<blockquote class="blockquote">As you can see, I have allocated the following resources (these are all default settings by the way) <br>
- 4 CPUs<br>
- 2 GB RAM<br>
- 1 GB Swap<br>
- Disk space: 59.6 GB<br>
 </blockquote>



<blockquote class="blockquote">Reminder! - Any System resource changes will require a Docker Restart.</blockquote>

## Step 2: Setup the SQL Container

---

At this point, Docker is installed. If it isn't running already, double click the Docker App Icon in the Applications folder to get it started.  

You will see the Docker _whale_ icon in the toolbar. A single click on it will show the Docker status.

![Docker Preferences](/img/2021-04-21-mssql-macos/docker_mac_menu_preference.png)

With Docker running, let's open a terminal window to execute the next series of commands.

We will pull down the SQL container image from the Docker Hub with the following command:

<code class="language-bash">docker pull mcr.microsoft.com/mssql/server:2019-latest</code>

![Docker Sql Image Terminal](/img/2021-04-21-mssql-macos/docker_mac_sqlImage_pull.png)

Once the Pull is complete, ow we need to run the container to setup the SQL instance. Remember the back slashes below indicate a new line or else you can just type this all on one line without the backslashes.  

```bash
sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<YourStrong!Passw0rd>' \
   -p 1433:1433 --name sql1 \
   -d mcr.microsoft.com/mssql/server:2019-latest
```

Run the command above to initialize the following:

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| -e        | Environment variables for the Docker Container: (1) End user licensing agreement, (2) specify SA Password (REMEMBER THIS!) |
| -p        | Docker host port number (first) and Docker exposed port number (second)                                                    |
| --name    | Specify the name of the Docker container. This must be a unique name for each container Docker is running.                 |
| -d        | Executing the SQL 2019 image                                                                                               |

The Docker image will be downloaded if it isn't already, then it's installed, and initialized with the flags in the command.

From the screenshows below, the next command `docker container ls` will list the containers in your Docker instance. You can see that the name you specified in the command statement is now listed.

![Docker Run](/img/2021-04-21-mssql-macos/docker_container_list.png)

## Step 3: Connecting to MSSQL

---

The database container has been created but we need to get into the container and create our new database.

### Connect via Command Line

Connect to the container:

<code class="language-bash">docker exec -it sql1 "bash"</code>

Once in the container, you'll have a <code class="language-bash">:/#</code> prompt.

Now we can connect to the SQL Instance:

<code class="language-bash">/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P '<YourNewStrong!Passw0rd>'</code>

You can leave out the <code class="language-bash">-P</code> flag and you will be prompted for the password. Once connected to the SQL instance, you will now have the <code class="language-bash">1></code> prompt.

![Docker Container Connect](/img/2021-04-21-mssql-macos/docker_mac_connect_container.png)

A simple script in the SQLCMD prompt can be tested with the prompt below.
From within the SQLCMD prompt, you can feed any T-SQL statement followed with the <code class="language-sql">GO</code> statement to run the command.

```sql
SELECT Name FROM Sys.Databases;
Go
```

In the screenshot above you can see the list of databases that exist in our DB instance.

To exit the SQL Server Prompt: <code class="language-bash">Ctrl + c</code>

To exit the Docker image: <code class="language-bash">exit</code> 

## Summary

---

If you followed along with this walkthrough, you:

- Downloaded and Setup Docker Desktop for Mac (Community Edition)
- Pulled the SQL 2019 Image
- Ran and initialized a new SQL Database Instance
- Connected to the new Docker container and SQL Command Prompt to interact with the SQL Database

[msdocs]: https://docs.microsoft.com/en-us/
[msdocssql]: https://docs.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?v
