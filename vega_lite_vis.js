var choroplethMap = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", choroplethMap)
  .then(function(result) {})
  .catch(console.error);

var barChart = "js/bar_chart.vg.json";
vegaEmbed("#bar_chart", barChart)
  .then(function(result) {})
  .catch(console.error);

var malaysiaMap = "js/malaysia_choropleth.vg.json";
vegaEmbed("#malaysia_map", malaysiaMap)
  .then(function(result) {})
  .catch(console.error);

var treemap = "js/treemap.vg.json";
vegaEmbed("#treemap", treemap)
  .then(function(result) {})
  .catch(console.error);

var treemapPrimary = "js/treemap_primary.vg.json";
var treemapSecondary = "js/treemap_secondary.vg.json";
var barTertiary = "js/bar_tertiary.vg.json";

vegaEmbed("#treemap_primary", treemapPrimary)
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#treemap_secondary", treemapSecondary)
  .then(function(result) {})
  .catch(console.error);

vegaEmbed("#bar_tertiary", barTertiary)
  .then(function(result) {})
  .catch(console.error);