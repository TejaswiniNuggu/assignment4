var xhr = new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
xhr.send();

xhr.onload=function(){
    var data = JSON.parse(xhr.response);
    console.log(data);
    for(var i=0; i<data.length; i++){
        console.log(data[i].flag);
    }
}


 //   xhr.onload = function () {
   //     var data1 = JSON.parse(xhr.response);
//        console.log(data1);
//        for (var i = 0; i < data1.length; i++) {
//            console.log(data1[i].name);
 //           console.log(data1[i].region);
 //           console.log(data1[i].subregion);
//            console.log(data1[i].population);
//        }
//    };

