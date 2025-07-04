let books=[{
  title:"raju",
  authorName:"ramu",
  releaseYear:2010
},{
   title:"ganesh",
  authorName:"rajesh",
  releaseYear:1943
},{
   title:"sai",
  authorName:"bharath",
  releaseYear:1932
},{
   title:"dhanamma",
  authorName:"malli",
  releaseYear:1948
}]
let sortByYear=(book1,book2)=>{
  if(book1.releaseYear>book2.releaseYear){return 1;}
 else if(book1.releaseYear<book2.releaseYear){return -1;
   }  else {
  return 0;
   }
}
let filteredBooks=books.filter((book)=>book.releaseYear<1950)
console.log(filteredBooks.sort(sortByYear));