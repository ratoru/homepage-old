---
title: What your terminal should look like
published: true
datePublished: 03/07/2021
author: Raphael Ruban
authorPhoto: /personal-picture.png
canonicalUrl: https://ratoru.com/blog/terminal
---

My friends keep asking me about my terminal setup. Instead of repeating myself, I thought I'd share it with all of you. Take everything with a pinch of salt. These are just personal preferences. Also, note that most of these have features that go way beyond my competence level and are definitely worth investigating.

## iTerm2 + Nord :mount_fuji:

I use iTerm2 instead of the normal Mac Terminal. Apart from looking nice, check out these [features](https://iterm2.com/features.html), too.

By far my favorite color scheme is [Nord](https://www.nordtheme.com/). They provide you with themes for a variety of applications, but you will probably want to install the one for [iTerm](https://github.com/arcticicestudio/nord-iterm2).

## Vim

Vim has an endless amount of shortcuts you can use. Here are some of the [basics](https://learnxinyminutes.com/docs/vim/). I highly recommend being an active learner. So, whenever you think there should be a faster way to do this, go and look it up!

### Remapping your esc key

Since your escape key is one of your most used keys, but is not that accessible, I highly recommend you overwrite your caps lock key. This way you can always hit escape with your left pinky without moving your hand at all.

To do so, go to **System Preferences >> Keyboard >> Modifier Keys...** and select ⎋Escape for ⇪Caps Lock.

### Your `~.vimrc` file

If you are in your root directory and `ls -a` you should be able to see you `~.vimrc` file. This is basically the settings file for vim. To be honest this is one of these areas where I barely know any of the options that you can enable here.

You can still check out my vimrc file below. Please make sure that you **comment** any setting you put in yours. Believe me, after 3 months you won't remember what everything does.

```.vimrc
"  Set-up relative and absolute line number handling
"  ------------------------------------------------
   set number
   set relativenumber


"  UI Configurations
"  ------------------------------------------------
  set showcmd           " show command in bottom bar


"  General settings
"  ------------------------------------------------
   set nowrap		        " dont wrap lines
   set tabstop=4        " a tab is four spaces
   set shiftwidth=4     " number of spaces to use for autoindenting
   set expandtab
   set autoindent       " always set autoindenting on
   set ignorecase       " ignore case when searching
   set smartcase        " ingonore case if search pattern is all lowercase,
                        "      case-sensitive otherwise
   set hlsearch         " highlight search term
   set incsearch        " show search matches as you type


"  Syntax Highlighting
"  ------------------------------------------------
   syntax on
   set showmatch        " highlight matching [{()}]
```

## Making your terminal fancy :tada:

The following is not really a necessity, but I'll assume you enjoy playing around with your terminal setup as much as I do.

### Homebrew :beer:

To start us off, we have the package manager [Homebrew](https://brew.sh/). Homebrew will take good care of the software you install. It often allows for one-line installs with `brew install ...` and allows you to quickly update all your software with `brew update`. For a more complete list on how and why to use Homebrew please check out their website.

### Zsh

I use `zsh` as my shell (instead of `bash`). It allows for great customization and has a truckload of features. Since macOS Catalina zsh is actually the default shell, so you might already have it as your default. For a comparsion check out [this article](https://sunlightmedia.org/bash-vs-zsh/). To be honest, I don't feel competent enough to give a definite recommendation, but it's definitely worth checking out.

### Starship :rocket:

This wonderful prompt for your shell is courtesy of Rust - and might be the coolest tip I give you in this post. Check out [starship here](https://starship.rs/). Take a look at the demo to get a feel for how it looks. When installing, make sure to use `brew` and add the init script to your correct shell.

### fzf :mag:

Oh boy. I can't count the number of times I've used this command-line [fuzzy finder](https://github.com/junegunn/fzf). Just hit ctrl-r and start typing snippets of the command you'd like to use. Any previously used commands that look similar will pop up. Works like a charm.

### espanso

This is not directly related to your terminal setup, but it's another awesome Rust application.

Do you ever feel like you're typing the same thing over and over again? Then check out [espanso](https://espanso.org/). It let's you create shortcuts that will expand into longer texts. My most common use case is for expanding LateX. For example, writing :x1n expands to $X_1, \dots, X_n$.

## In closing

I hope this was helpful to at least some of you. It took quite some time to put together. I use a couple of additional plugins, as well. Yet, I don't know how up to date they really are, so I didn't want to recommend them here. Feel free to reach out for more recommendations. Most importantly, if you have a way I can improve my setup, **please** tell me.
