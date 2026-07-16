const getdata = document.getElementById('text')
fetch('https://jsonplaceholder.typicode.com/users')
.then( response=>response.json())
.then(data=> data.map ((item,i)=>{
    return(
        getdata.innerHTML+= `<tr>
      <th>${i+1}</th>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.website}</td>
      <td>
      <button class="btn btn-primary btn-sm">Edit</button>
      <button class="btn btn-danger btn-sm">Remove</button>
      </td>
    </tr>`
    )
}) )