(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['adTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"service-ad\">\n	<div class=\"ad-header\">\n		<img class=\"ad-picture\" src=\""
    + alias4(((helper = (helper = helpers.picture || (depth0 != null ? depth0.picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"picture","hash":{},"data":data}) : helper)))
    + "\"  width=\"100\" height=\"100\"></img>\n		<p class=\"ad-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n	<div class=\"ad-content\">\n		<p class=\"ad-text\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\n		<p class=\"ad-rating\">"
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n</article>\n";
},"useData":true});
})();