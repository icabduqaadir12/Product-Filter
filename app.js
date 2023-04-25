const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-item");
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");


    for(var i = 0; i < pname.length; i++){
        var match = product[i].getElementsByTagName('h2')[0];
        
        if(match){
            var textbox = match.textContent || match.innerHTML;

            if(textbox.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
                console.log(product[i]);

            }else{
                product[i].style.display = "none";
            }
        }

    }

    // var inb = textbox.toUpperCase().indexOf(searchBox);
    // console.log(inb);
    // // console.log(match);
    // console.log(textbox);
}


// const search = () => {
//     const searchbox = document.getElementById("search-item").value.toUpperCase();
//     const storeitems = document.getElementById("product-list");
//     const product = document.querySelectorAll(".product");
//     const pname = document.getElementsByTagName("h2");
//     const searchb = document.querySelector('#search-item');

//     for(var i = 0; i < pname.length; i++){
//         let match = product[i].getElementsByTagName('h2')[0];

//         if(match){
//             let textValue = match.textContent || match.innerHTML;

//             if(textValue.toUpperCase().indexOf(searchbox) > -1){
//                 product[i].style.display = "";
//             }else{
//                 product[i].style.display = "none";
//             }
//         }
//     }
// }