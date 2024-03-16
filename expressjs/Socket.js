//probelms by http
// 1. http module is not secure
// 2. http module is not easy to use
// 3. Unidirectional-real time updates from server to client
// 4.Polling-requesting server for new data at regular intervals
// 5.Latency- time delay between the cause and effect of some physical change in the system being observed
// 6.Scalibility-ability of a system to handle a growing amount of work
//Socket.io is a library that enables real-time, bidirectional and event-based communication between web clients and servers
const express=require('express');
const SocketIO=require('socket.io');
const path=require('path');