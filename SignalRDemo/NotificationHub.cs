using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRDemo
{
  [HubName("notification")]
  public class NotificationHub : Hub
  {
    public void SendNotifications(string message)
    {
      Clients.All.SendDetails(message);
    }
  }
}