//listen for form submit
document.getElementById('myForm').addEventListener('submit',addBookmark);

function addBookmark(e){
    
    let siteName = document.getElementById('siteName').value;
    let Siteurl = document.getElementById('siteUrl').value;

    //console.log("name" + siteName + "url" + Siteurl);

    let bookmark={
        name:siteName,
        url:Siteurl
    };
    //console.log(bookmark);

    if(localStorage.getItem('bookmarks') === null){
        let bookmarks = []; 
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }else{
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //console.log(bookmarks);
        bookmarks.push(bookmark);
        //console.log(bookmarks);
        localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
    }
    e.preventDefault();

}

function fetchBookmarks(){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);

    let bookmarksResults = document.getElementById('bookmarksResults');

    bookmarksResults.innerHTML='';
    for(let i=0;i<bookmarks.length;i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;


        bookmarksResults.innerHTML += '<div class="well">'+
                                    '<h3>'+name+
                                    '</h3>'+
                                    '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a>'+
                                    '<a onClick="delete()" class="btn btn-danger" target="_blank" href="'+url+'">Delete</a>'+
                                    '</div>';
    }
}
