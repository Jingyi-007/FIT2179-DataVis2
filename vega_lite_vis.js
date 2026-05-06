// Section 1 - World Choropleth Map
var choroplethMap = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth_map", choroplethMap)
  .then(function(result) {})
  .catch(console.error);

// Section 2 - Bar Chart
var barChart = "js/bar_chart.vg.json";
vegaEmbed("#bar_chart", barChart)
  .then(function(result) {})
  .catch(console.error);

// Section 3 - Malaysia State Choropleth Map
var malaysiaMap = "js/malaysia_choropleth.vg.json";
vegaEmbed("#malaysia_map", malaysiaMap)
  .then(function(result) {})
  .catch(console.error);

// Section 4 - Heatmap
var heatmap = "js/heatmap.vg.json";
vegaEmbed("#heatmap", heatmap)
  .then(function(result) {})
  .catch(console.error);

// Section 5 - Enrolment Trend Line Chart
var lineChart = "js/line_chart.vg.json";
vegaEmbed("#line_chart", lineChart)
  .then(function(result) {})
  .catch(console.error);

// Section 6 - Stacked Bar for enrollment by state comparison
var stackedBar = "js/stacked_bar.vg.json";
vegaEmbed("#stacked_bar", stackedBar)
  .then(function(result) {})
  .catch(console.error);

// Section 7 - Completion Dot Plot
var completionDotPlot = "js/completion_dotplot.vg.json";
vegaEmbed("#completion_dot_plot", completionDotPlot)
  .then(function(result) {})
  .catch(console.error);