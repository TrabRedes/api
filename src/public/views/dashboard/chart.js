var ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        label: "Gráfico de vazão",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: []
      }
    ]
  },

  // Configuration options go here
  options: {}
});
adicionaAoChart = data => {
  chart.labels.append(data.getHours());
  chart.datasets[0].data.append(data.token);
  chart.update();
};
$(function() {
  var socket = io.connect("https://redes-chat.mybluemix.net/");
  socket.on("save_on_database", data => {
    adicionaAoChart(data);
    console.log('chegou essa msg', data)
  });
});
