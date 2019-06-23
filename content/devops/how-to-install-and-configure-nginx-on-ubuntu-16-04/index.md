---
title: How To Install and Configure Nginx on Ubuntu 16.04
description: In this tutorial you will learn how to install and configure Nginx web server on Ubuntu 16.04.
date: 2019-04-08
draft: false
author: Krunal Shah
banner: './images/how-to-install-nginx.jpg'
tags:
  - ubuntu
  - nginx
versions:
  ubuntu: '16.04'
---

Nignx is a free, open-source, high-performanec HTTP server that powers some of the largest sites around the globle. It is more refource friendly and can be used as a web server or a reverse proxy.

## Prerequisites

Before you begin installation, you should have logged in as a non-root user with `sudo` privileges configured on your web server.

## Step 1: Install Nginx

Nginx is avaliable in default repositories of Ubuntu distribution, so you can simply execute the following commands:

```bash
sudo apt update
sudo apt install nginx
```

Once the installation is completed, you can check the status of Ngix by typing:

```bash
sudo systemctl status nginx
```

Output of the above command should be like this:

```output:title=output
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Sun 2018-01-05 15:44:04 UTC; 1min 59s ago
 Main PID: 1291 (nginx)
   CGroup: /system.slice/nginx.service
           ├─1291 nginx: master process /usr/sbin/nginx -g daemon on; master_process on
           └─1293 nginx: worker process
```

## Step 2: Adjust the Firewall

Before we can run Nginx on Port 80 and 443 we have to allow Nginx in `ufw` firewall.

You can enable 'Nginx Full' profile which includes all the necessary rules for both ports:

```bash
sudo ufw allow 'Nginx Full'
```

## Step 3: Test the Installation

To verify the Nginx installation process completed sucessfully you can head over to your `http://server_domain_or_IP`

Nginx will show default page like below:
![Nginx Default Page](images/nginx-default.png)

## Step 4: Manage the Nginx service with systemctl

You can manage the Nginx services using sysetmd unit.

- To stop your web server, type:

```bash
sudo systemctl stop nginx
```

- To start the web server again, type:

```bash
sudo systemctl start nginx
```

- To stop and start the service, type:

```bash
sudo systemctl restart nginx
```

- Reload server after making configuration changes, type:

```bash
sudo systemctl reload nginx
```

- To disable Nginx service to run at boot, type:

```bash
sudo systemctl disable nginx
```

- To enable Nginx at boot, type:

```bash
sudo systemctl enable nginx
```

## Conclusion

Congratulation, you have sucessfully installed and configured Nginx on your server. Now you can many options for serving the content and technologies you want.
