/**
 * Load the libraries for the DITA topics pages.
 */
define(["require", "config"], function() {
    require(['options'], function(options){
        const jsModules = [
            'polyfill',
            'menu',
            'toc',
            'webhelp',
            'codeblock',
            'wh-sticky',
            'top-menu',
            'search-init',
            'expand',
            'permalink',
            'image-map',
            'template-module-loader',
            'bootstrap'
        ];
        if(!options.getBoolean("webhelp.custom.search.engine.enabled")) {
            jsModules.push('searchAutocomplete');
        } 
        require(jsModules);
    });
});