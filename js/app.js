let bookCatalog = [
    {sciFiction:[
        {ISBN:111, 
        title:"Alise in Wonderland", 
        year:2020,
        pages:300},
        {ISBN:112, 
        title:"Solaris", 
        year:2015,
        pages:100},
        {ISBN:113, 
        title:"Edem", 
        year:1969,
        pages:200},
        {ISBN:113, 
        title:"Edem2", 
        year:2020,
        pages:240}
    
    
    ]
    },
    {Fiction:[
        {ISBN:114, 
        title:"Sartoris", 
        year:1964,
        pages:300},
        {ISBN:115, 
        title:"Sound and Fury", 
        year:1968,
        pages:300},
        {ISBN:117, 
        title:"Old man and see", 
        year:1968,
        pages:80},
        {ISBN:181, 
        title:"War and Peace", 
        year:1945,
        pages:300}]

    },
    {It_Science:[
        {ISBN:122, 
        title:"Javascript for Dummmies", 
        year:2020,
        pages:300},
        {ISBN:142, 
        title:".NET for WEB", 
        year:2020,
        pages:300},
        {ISBN:132, 
        title:"SOLID programming", 
        year:2007,
        pages:300},
        {ISBN:132, 
        title:"Sience algorithms", 
        year:2010,
        pages:300}]

    }
]

for (const category in bookCatalog) {
    for(const categName in bookCatalog[category]){
        console.log(categName);
        console.log("+++++++++++++++++++");  
        console.log(bookCatalog[category][categName]); 
        for(const propArray in bookCatalog[category][categName]){
            console.log(propArray);
            console.log("------------------");
            for(const propIndex in bookCatalog[category][categName][propArray] ){
                let newBook = "";
                if(bookCatalog[category][categName][propArray][propIndex] == 2020) newBook = "(nauja knyga)";
                console.log(propIndex + ":" + bookCatalog[category][categName][propArray][propIndex] + newBook);
                
            }
        }   
    }   
}