$(document).ready(function() {
var TMR = 0, myDate = '23.08.2016 00:00:00';
 
onload = function ()
{
setInterval (function ()
   {
   var a = myDate.split (' '),
       b = a [0].split  ('.'),
       c = a [1].split  (':'),
       d = new Date,
 
     T     = [],                  C     = [];
     T [0] =           b [2],     C [0] = d.getFullYear (),  
     T [1] =           b [1] - 1 , C [1] = d.getMonth    (),      
     T [2] = parseInt (b [0])   , C [2] = d.getDate     (),       
     T [3] = parseInt (c [0])   , C [3] = d.getHours    (),      
     T [4] = parseInt (c [1])   , C [4] = d.getMinutes  (),      
     T [5] = parseInt (c [2])   , C [5] = d.getSeconds  ();    
 
   for (var D = [], j = 0; j < 6; j++) D [j] = C [j] - T [j];
  
   if (D [5] < 0) D [5] += 60,                                                   D [4]--;
   if (D [4] < 0) D [4] += 60,                                                   D [3]--;
   if (D [3] < 0) D [3] += 24,                                                   D [2]--;
   if (D [2] < 0) D [2] = C [2] + new Date (C [0], C [1], 0).getDate () - T [2], D [1]--;
   if (D [1] < 0) D [1] = C [1] + 11 - T [1],                                    D [0]--;
   for (j = 0; j < 6; j++) formTxt (D [j], j);
 
      function formTxt (n, q)
      {
      var w = [['год'    , 'года'   , 'лет'    ],  // 0, M
               ['месяц'  , 'месяца' , 'месяцев'],  // 1, M
               ['день'   , 'дня'    , 'дней'   ],  // 2, M
               ['час'    , 'часа'   , 'часов'  ],  // 3, M
               ['минуту' , 'минуты' , 'минут'  ],  // 4, F
               ['секунду', 'секунды', 'секунд' ]], // 5, F
          k = n % 10,
          l = (!k || n > 5 && n < 21 || k > 4) ? 2 : ((k == 1) ? 0 : 1),
          t = w [q] [l];
      document.getElementById ('mt').rows [0].cells [q].children [0].innerHTML = n + '<p>' + t; 
      }
   TMR = 1000;
   }, TMR);
}
});