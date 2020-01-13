(*Last updated 2020-01-03*)

This is the git repository for Illion's atomic site. This readme will loosely explain how the site is built and document some custom settings and things. (Future me, I know you're reading this. What did you forget this time?)


# Overview of the site #

## How it works ##
This is a (mostly) static website. The source files are hosted on GitHub. The repository is linked to Netlify, which builds and hosts the website. The framework used to build is Hugo.

The source files include HTML snippets, CSS stylesheets and Javascript scripts. These are pulled together by Hugo to create the structure of each webpage at build time.

The actual content of the pages is written in Markdown. Again, Hugo pulls the content at build time to put into the webpages. In addition to pure Markdown, Hugo "shortcodes" are used to insert nontextual content in the content files (e.g. embedded iframes or drawn chess diagrams).

It is currently set up such that when changes are pushed to the master branch of the GitHub repository, Netlify automatically detects it and redeploys a new version of the site.


## Layout of the repository ##
The repository follows a standard Hugo directory layout.

The toml file `/config.toml` contains basic information about the site, some used in every page when Hugo builds the whole site. It also somehow contains information to build menu bars (how did that happen?). (A .toml file contains key-value pairs, like .json or .yaml files.)

The most important folders are:

- `/content`: contains the content of the site (mostly in .md files). Subfolders determine the "type" of content in them. Currently split into `./post` (for blog posts) and `./timeless` (for other fixed pages).
- `/layouts`: contains HTML snippets and templates that Hugo uses to generate individual pages. Subfolders correspond to folders in /content, telling Hugo which HTML templates to use. Notably, `./shortcodes` contains HTML shortcodes referencable in the Markdown of content files.
- `/static`: contains any auxiliary files used for the site. Currently organised into `./css`, `./js`, `./images` (self-explanatory), `./fonts` (contains custom fonts, notably FigurineNotationT1 for chess figurine font), and `./dbs` (contains just a database of FICS atomic games.)

Less important at the moment are:

- `/archetypes`: contains templates used when generating new blank content files (by Hugo in the command line).
- `/data`: contains additional data accessible by Hugo coding. Currently empty.
- `/resources`: currently empty.
- `/themes`: To use external display themes. Currently empty.


# How to write new content #

## Create a new content file ##
Create a new .md file somewhere in `/content`. For automatic boilerplate, use the command `hugo new [path] [flags]` when `cd` is the repository's root directory. **Remember to include the .md suffix in the path.** Useful flag: `-k [string]` to specify the kind of content.

Setting a flag `draft = true` in the header marks the content as draft, and will not be deployed in production. (It will still appear in the GitHub repository, though.)

Write content in said file and save.


## Live preview ##
In the command line, `hugo server [flags]` will build the site locally, allowing for a preview of how it looks. This is accessible at http://localhost:1313 when run.

Useful flags are `-w` watch mode to update when changes are made live, and `-D` draft mode to include draft content. As a result I would normally run `hugo server -wD`.


## Push changes to live site ##
For the changes to appear in the live site, it must be pushed to GitHub's master branch. This is easy if you understand Git. (If you are future me needing to read this part, go and read Git documentation. Go on.) If not, magic commands:

- `git status` to check the status
- `git add .` to stage all reported changes, `git add [file]` to just add one file
- `git commit -m [commit message]` to commit the staged changes, adding a clear, descriptive and informative commit message.
- `git push origin master` to push the local master branch to the origin (GitHub) master branch. **This will trigger a Netlify build and deploy.**

If you are future me reinstalling Git on a new computer or something and trying to figure out how to reconfigure it, sorry, and good luck.



## fen-diag: automatic FEN-to-diagram conversion ##
To make chess diagram insertion easier when writing content, I wrote some code over a number of files to automatically do so, taking the diagram FEN and turning it into a diagram drawn on a HTML5 canvas. The overview of the process is:

- (User input) User puts shortcode containing FEN in the Markdown content.
- (Automatic) Shortcode creates a HTML `<figure>` element with a `<div>` and `<figcaption>` inside. The `<div>` will contain the diagram.
- (Automatic) CSS styles the div with the appropriate final dimensions.
- (Automatic) A JS script inserts a HTML canvas into each div, sizes them, and draws the appropriate diagrams in each.

The relevant files are:

- `/layouts/shortcodes/fen-diag.html` (shortcode creating the figure and div. Takes fen (string) as an argument. Optional argument `flip` (nonempty string = true, shows board from black's perspective) and caption (inserts caption in HTML `<figure>` element).
- `/static/css/default.css` (relevant selectors are `.fen-diag`, `.fen-diag-cnv-wrapper`, `figcaption`)
- `/static/js/fen_diagram.js` (the JS script. Styling the canvas (colours, pieces, ornaments) is done here.)