# CLI Links

## [bat](https://github.com/sharkdp/bat)

nananana

```zsh
brew install bat
```

## [fzf](https://github.com/junegunn/fzf)

Command line fuzzy finder will make you feel fuzzy inside. Definitely setup the `preview` alias also.

```zsh
brew install fzf
```

Don't forget the tabbed auto complete!

```zsh
cd **<TAB>
```

## [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy)

Just for the fancy git diffs

```zsh
brew install diff-so-fancy
git config --global core.pager "diff-so-fancy | less --tabs=4 -RFX"
git config --global interactive.diffFilter "diff-so-fancy --patch"
```

## [ag](https://github.com/ggreer/the_silver_searcher)

Code searching tool that ignores the crap

```zsh
brew install the_silver_searcher
```

## [fx](https://github.com/antonmedv/fx)

Interactive json viewer

```zsh
brew install fx
```

## [flat](https://github.com/hughsk/flat)

Makes stuff flat

```zsh
npx flat
```

## [gron](https://github.com/tomnomnom/gron)

Make json grepable. Kinda like [flat](https://www.npmjs.com/package/flat).

```zsh
brew install gron
```

## [jq](https://stedolan.github.io/jq/)

The ole classic

```zsh
brew install jq
```

## [tldr](https://github.com/tldr-pages/tldr)

```zsh
npm install -g tldr
alias help='tldr'
```

---

## Sources

- https://remysharp.com/2018/08/23/cli-improved
