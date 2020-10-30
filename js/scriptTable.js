(function(){
    const btn = document.querySelector('button')
    const userInput = document.querySelectorAll('input')
    btn.addEventListener('click',createTable)
    
    function createTable () {
    if(document.contains(document.getElementById('myTable'))){
        document.getElementById('myTable').remove();
    }
       let table = document.createElement('table');
       table.setAttribute('id', 'myTable')
       let header = document.createElement('thead');
       let headerName = document.createElement('th');
       let headerText= document.createElement('tr')
       table.appendChild(header);
       header.appendChild(headerName);
       headerName.appendChild(headerText);
       headerName.colSpan = userInput[2].value;
       headerText.textContent = userInput[0].value
       let tableBody = document.createElement('tbody');
       for (let i = 0; i < userInput[1].value; i++) {
           let tableRow = document.createElement('tr')
           for (let j = 0; j < userInput[2].value; j++) {
               tableRow.appendChild(document.createElement('td'));              
           }
           tableBody.appendChild(tableRow);
       }
       table.appendChild(tableBody);
       document.querySelector('div').appendChild(table);
    }
 })();