// Input 0
(function(a){var d=function(){};d.VERSION="0.0.1";a.Modulog=d})(window);
(function(){var a=function(){};a.VERSION="0.0.1";a.LEVEL_NONE=0;a.LEVEL_ERROR=1;a.LEVEL_WARN=2;a.LEVEL_INFO=3;a.LEVEL_DEBUG=4;a.level=a.LEVEL_DEBUG;var d=null;a.addLogTarget=function(b){"function"===typeof b&&(d=b)};a.debug=function(b,a,c){ModulogLog.level>=ModulogLog.LEVEL_DEBUG&&(b="[ DEBUG "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(c?console.debug(b,c):console.debug(b)),ModulogLog.__delegate(b,c))};a.info=function(b,a,c){ModulogLog.level>=ModulogLog.LEVEL_INFO&&
(b="[ INFO "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(c?console.info(b,c):console.info(b)),ModulogLog.__delegate(b,c))};a.warn=function(a,e,c){ModulogLog.level>=ModulogLog.LEVEL_WARN&&(a="[ WARN "+(e?"| "+e+" ":"")+"] "+a,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(c?console.warn(a,c):console.warn(a)),ModulogLog.__delegate(a,c))};a.error=function(a,e,c){ModulogLog.level>=ModulogLog.LEVEL_ERROR&&(a="[ ERROR "+(e?"| "+e+" ":"")+"] "+
a,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(c?console.error(a,c):console.error(a)),ModulogLog.__delegate(a,c))};a.__delegate=function(a,e){d&&(e?d(a+" : "+e.toString()):d(a))};window.Log=window.MLog=window.ModulogLog=a})(window.Modulog);
(function(){var a=function(){};a.VERSION="0.0.1";var d=null,b=ModulogLog;a.get=function(a){for(var b=a.split("."),g=d,h=0;h<b.length;h++){var f=b[h];g.hasOwnProperty(f)||ModulogLog.warn("Config value not found: "+a,"CONFIG");g=g[f]}return g};a.set=function(a,b){for(var g=a.split("."),h=d,f=0;f<g.length-1;f++)h=h[g[f]];h[g.pop()]=b};a.init=function(a,c){"string"===typeof a&&jQuery?$.getJSON(a,function(a){d=a;"function"===typeof c&&c()}):"object"===typeof a?d=a:b.error("Could not init config. init() function expects config object or url to config.js. Latter needs jQuery to be initialized before.",
"Modulog | ModulogConfig")};window.Config=window.MConfig=window.ModulogConfig=a})(window.Modulog);
// Input 1
(function(a){var d=function(){};d.VERSION="0.0.4";a.EC=a.EdgeCommons=d;Log.debug("v"+d.VERSION,"EdgeCommons")})(window);
// Input 2
(function(a){var d=function(){};d.VERSION="0.0.4";var b=ModulogLog,e=null,c=null;a.loadScript=function(a,c){b.debug("loadScript: "+a,"EdgeCommons | Core");try{yepnope({load:a,callback:function(d){d==a&&(b.debug("Loading external script was successful: "+a,"EdgeCommons | Core"),"function"===typeof c&&c())}})}catch(d){b.error("Loading external script failed: "+a,"EdgeCommons | Core")}};a.getInjectedData=function(a,c){try{c=c||"data";for((!a||!a.getParentSymbol)&&b.error("getInjectedData(): First argument 'sys' is not optional",
"EdgeCommons | Core");a.getParentSymbol();)a=a.getParentSymbol();var d=a.getSymbolElement().find("."+c).html();return $.parseJSON(d)}catch(e){b.error("Reading injected data failed (scriptClassSelector="+c+")","EdgeCommons | Core",e)}};a.setAdaptiveLayouts=function(a){(!a||!a.length)&&b.error("Error in setAdaptiveLayouts(). Argument 'layouts' is not optional and has to be an array.");e=a};a.applyAdaptiveLayout=function(a,d){try{a.setVariable("doResizing",function(){var f=a.getComposition().getStage().getSymbolElement().width(),
j=a.$(d),i=null;$.each(e,function(a,b){f>=b-20&&(i=b)});c!=i&&(b.debug("Switching to: layout"+i,"EdgeCommons | Core"),c=i,j.html(""),a.createChildSymbol("layout"+i,d));a.$("currentLayout").html(a.getVariable("layout"))}),a.getVariable("doResizing")()}catch(f){console.error(f)}};a.Core=d;a.Log=b;a.debug=b.debug;a.info=b.info;a.warn=b.warn;a.error=b.error;a.Config=MConfig})(EdgeCommons);
