(function(){
    const article = document.querySelector('article');
    const articleInn = document.querySelector('article h3');
    //console.log(article);

    //console.log(article);
    const articles = document.querySelectorAll('article');
    //console.log(articles[3]);
    const   links = document.querySelectorAll('a');
    console.log(links);
    
    

    for (let index = 0; index < articles.length; index++) {
        articles[index].addEventListener('click',function(){articles[index].style.background = 'tomato';});  

    }

    for (let index = 0; index < links.length; index++) {
        links[index].href = "http://kitm.lt/";
        links[index].target = "_blank";
        
    }
    const list = document.querySelector('ul')
    

    const btn = document.querySelector('button')
    const userInput = document.querySelector('input')
    btn.addEventListener('click',addToList)
    function addToList () {
        //articleInn.textContent = userInput.value 
       // articleInn.innerHTML = userInput.value 
       let task = document.createElement('li');
        task.textContent = userInput.value;
        list.appendChild(task);

    }

    
    
  

})();