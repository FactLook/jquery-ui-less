# JQuery-UI LESS Adaption for TWBS (3.0.0)

This was a simple conversion of the JQuery-UI CSS components into .less files. 
By Louis-Philippe Huberdeau. Wich came in pretty handy, as I need it to have consistent (themeable) styles
from TWBS with jQuery UI components. 

live demo of beta here: http://dc-development.github.io/jquery-ui-less/

Goal for this branch is to make all jQUeryUI widgets use glyphicons and follow, whatever bootstrap theme used, in your project.

Example usage:

```

@import "../bootstrap/less/bootstrap";
@import "../less/jquery.ui.less";

@import "themes/variables_cerulean";
@import "themes/bootswatch_cerulean";

@import "demovars.less";

```


###Note that this is an  early stage project. Feel free to submit pull requests, or report issues.

