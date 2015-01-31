# JQuery-UI LESS adapter for TWBS 3

## v0.1.4

Have consistent (themeable) styles
from TWBS with jQuery UI components.

This project contains a functional [demo](http://flack.github.io/jquery-ui-less/demo.html) with generated themes.

Just clone this repo anywhere to your machine and browse the demo folder, to see how its used.
If you want to use it standalone make sure you also clone the twbs submodule by using:

`git clone --recursive https://github.com/flack/jquery-ui-less.git`

Goal for this branch is to make all jQUeryUI widgets use glyphicons and follow, whatever bootstrap theme used, in your project.

Example usage:

```

@import "../bootstrap/less/bootstrap";
@import "../less/jquery.ui.less";

@import "themes/variables_cerulean";
@import "themes/bootswatch_cerulean";

@import "demovars.less";

```

The demo only contains generated css (beside the demo-less files).
The themes are downloaded here: http://bootswatch.com/yeti/.

-----------

The translation of the bootstrap vars should be done in `jquery.ui.variables.less`
