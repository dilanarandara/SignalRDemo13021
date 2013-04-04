/// <reference path="jquery-1.6.4.js" />
/// <reference path="jquery.signalR-1.0.0-rc2.min.js" />


$(function () {
    var hub = $.connection.notification;

    hub.client.sendDetails = function (data) {
        $('#messages').append(data + "<br />");
    };

    $.connection.hub.start().done(function () {
        $('#SendNotification').click(function () {
            var message = $('#txtNotification').val();
            hub.server.sendNotifications(message);
            $('#txtNotification').val('');
        });
    });
});