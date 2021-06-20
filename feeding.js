var num = prompt("how many sheeps should we feed him?");
function numofmeals(n)
{
  for (var i=0; i< n ;i++)
  {
    document.write("<img src ='sheep.png' />" )
  }
};

var cups =prompt("how many cups of water should we give him ?");

function numofcups(c)
{
  for (var i=0;i<c ;i++)
  {
    document.write("<img src='wc.png '" + "width=200 " +"height=auto"+"/>")
  }

};