$(document).ready(function () {
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
  client.on("connect", function () {
    $("#level").val("The fan is currently turned off");
  })
  $("#offButton").click(function () {
    $("#level").val("The fan is currently turned off");
    var topic = "cherry/fan/status";
    var payload ="Turned Off";

    client.publish(topic, payload)
  })

  client.on("message", function (topic, payload) {
    var row = "<tr><td>" + topic + "</td><td>" + payload + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
    $("#tbbroker").append(row);
  })

  $("#1Button").click(function () {
    $("#level").val("The fan is currently turned at 1");
    var topic = "cherry/fan/status";
    var payload = "Turned at 1";

    client.publish(topic, payload)
  })
  client.on("message", function (topic, payload) {
    var row = "<tr><td>" + topic + "</td><td>" + payload + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
    $("#tbbroker").append(row);
  })

  $("#2Button").click(function () {
    $("#level").val("The fan is currently turned at 2");
    var topic = "cherry/fan/status";
    var payload = "Turned at 2";

    client.publish(topic, payload)
  })
  client.on("message", function (topic, payload) {
    var row = "<tr><td>" + topic + "</td><td>" + payload + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
    $("#tbbroker").append(row);
  })

  $("#3Button").click(function () {
    $("#level").val("The fan is currently turned at 3");
    var topic = "cherry/fan/status";
    var payload = "Turned at 3";


    client.publish(topic, payload)
  })
  client.on("message", function (topic, payload) {
    var row = "<tr><td>" + topic + "</td><td>" + payload + "</td><td>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</td></tr>";
    $("#tbbroker").append(row);
  })

})