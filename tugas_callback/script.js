var myArray = [];

$.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  success:function(data) {
    myArray = data
    buildTable(myArray)
    console.log(data)
  },
});

function buildTable(data) {
  var table = document.getElementById("myTable")
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].address.street}, ${data[i].address.suite}, ${data[i].address.city}</td>
                    <td>${data[i].company.name}</td>
                </tr>`
                
    table.innerHTML += row
  }
}

