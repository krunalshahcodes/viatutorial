---
title: How To Install Go on Debian 9
description: This tutorial will guide you through installing Go on Debian 9, as well as creating a “Hello, World!” program.
date: 2019-07-07
draft: false
author: Krunal Shah
banner: './images/how-to-install-go-on-debian-9.jpg'
tags:
  - Debian
  - Go
---

## Introduction

Golang also known as Go is an open source programming language that makes it easy to build simple, reliable, and efficient software. It was developed in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson at Google and open sourced in 2009.

This tutorial will guide you through installing Go on Debian 9, as well as creating a “Hello, World!” program.

## Step 1: Downloading Go

Before continuing with this step, make sure you are logged in as a sudo user.

First visit [official downloads page](https://golang.org/dl/) and find the URL for the current binary release.

Download the Go tarball with the using wget command:

```bash
wget https://dl.google.com/go/go1.12.5.linux-amd64.tar.gz
```

You can use the sha256sum utility to verify the downloaded file checksum:

```bash
sha256sum go1.12.5.linux-amd64.tar.gz
```

```output:title=output
Output
go1.12.5.linux-amd64.tar.gz
aea86e3c73495f205929cfebba0d63f1382c8ac59be081b6351681415f4063cf  go1.12.5.linux-amd64.tar.gz
```

Compare the hash in your output to the checksum value on the Go download page. If they match, then it is safe.

## Step 2: Extracting the Go tarball

The following command will extract the downloaded tarball to the /usr/local directory:

```bash
sudo tar -C /usr/local -xzf go1.12.5.linux-amd64.tar.gz
```

## Step 3: Adjust Path Variables

We need to edit the PATH environment variable so that our system detects where the Go executable are located.

```bash
nano ~/.profile
```

Append the following line:

```bash
export PATH=\$PATH:/usr/local/go/bin

```

Next, refresh your profile by running:

```bash
source ~/.profile
```

## Step 4: Test the Installation

Now that Go is installed and the paths are set for your server, you can ensure that Go is working as expected.

Create the workspace directory:

```bash
mkdir ~/go
```

Create a simple “Hello World” Go file:

```bash
mkdir -p ~/go/src/hello
```

and in that directory create a file named `hello.go`

```go
package main

import "fmt"

func main() {
    fmt.Printf("Hello, World!\n")
}
```

Next step is to build the files:

```bash
cd ~/go/src/hello
go build
```

The command above will build an executable named `hello`.

With the program compiled, you can run it by executing the command:

```bash
./hello
```

Go is successfully installed and functional if you see the following output:

```output:title=output
Output
Hello, World!
```

If you see the same output as the one above, then you have successfully installed Go.

## Conclusion

After installing and testing the latest Go package, you can start working on your Go projects. You can also checkout the official documentation on [How to Write Go Code](https://golang.org/doc/code.html) for more information.
