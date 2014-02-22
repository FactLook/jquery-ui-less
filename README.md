# JQuery-UI LESS Adaption for TWBS (3.0.0)

This was a simple conversion of the JQuery-UI CSS components into .less files. 
By Louis-Philippe Huberdeau.

Wich comes in pretty handy as I need it to have consistent (themeable) styles
from TWBS with jQuery UI comps. 

Goal for this branch is to make all jQUeryUI widgets use glyphicons and follow, whatever bootstrap theme used, in your project.

Example usage:
-----------------------------------------

@import "../bootstrap/less/bootstrap";</br>
@import "../less/jquery.ui.less";</br>
</br>
@import "themes/variables_cerulean";</br>
@import "themes/bootswatch_cerulean";</br>
</br>
@import "demovars.less";

------------------------------------------
live demo of development state here: http://dc-development.github.io/jquery-ui-less/

Note that this is an VERY early stage project. Feel free to submit pull requests, or report issues.

