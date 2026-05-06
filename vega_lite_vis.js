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