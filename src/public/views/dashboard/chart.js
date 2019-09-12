var ctx = document.getElementById("myChart").getContext("2d");
console.log("entrou no chart");
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
  let index = chart.data.labels.indexOf(data.token)
  console.log(index)
  if(index === -1 ){
    chart.data.labels.push(data.token);
    chart.data.datasets[0].data.push(data.time);
  }else{
    chart.data.labels[index]=index+1;
    chart.data.datasets[0].data[index] = new Date(data.time) - new Date(chart.data.datasets[0].data[index]) ;  
    chart.update();
  }
};

let url = "http://redes-chat.mybluemix.net/";
var socket = io.connect(url);
console.log("conectou na url:", url);
socket.on("send_to_dashboard", data => {
  console.log('entrou ', data)
  adicionaAoChart(data);  
});
