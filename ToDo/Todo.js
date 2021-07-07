// function addItem()
// {
//         var listItem =  document.getElementsByClassName(".item");
//         var List= document.getElementsByClassName(".List");
//         //List.appendChild(listItem);
//         List.appendChild(listItem);
// }
//var btn= document.addEventListener("click",addItem);
// function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
//   }
//document.addEventListener(load)
var btn=document.getElementById("addButton");
btn.addEventListener("click",myFunction);



      
        //   var node = document.createElement("LI");
        //   var textnode = document.getElementsById("item").value;
        //   var t = document.createTextNode(textnode);
        //   node.appendChild(t);
         function myFunction() {
                var li = document.createElement("li");
                var inputValue = document.getElementById("myInput").value;
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                
                if (inputValue === '') {
                    alert("You must write something!");
                } else {
                    document.getElementById("myUL").appendChild(li);
                }
                document.getElementById("myInput").value = "";

               
                    
                
             }
        //document.getElementById("myList").appendChild(node);