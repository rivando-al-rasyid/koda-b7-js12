const url = "https://jsonplaceholder.typicode.com/users";

function customLowerCase(text){
  let hasil=""
    for (let i = 0; i < text.length; i++) {
      let kodeAngka = text.charCodeAt(i);
      if (kodeAngka >= 65 && kodeAngka <= 90 )
        hasil = hasil + String.fromCharCode(kodeAngka + 32);
      else{
        hasil = hasil + text[i];
      }
}
return hasil
}

// fetch(url).then(response =>{
//   if (!response.ok){
//     throw response.status
//   }
//     return response.json()
// }).then(
//   result => {
//     let cusLowerCaseEmail=[]
//     let toLowerCaseEmail=[]
//     result.forEach(user => {
//       let email = user.email.toLowerCase();
//       toLowerCaseEmail.push(email);
//     });
//       result.forEach(user => {
//       let cusEmail = customLowerCase(user.email);
//       cusLowerCaseEmail.push(cusEmail)
//     });
//     console.log(toLowerCaseEmail);
//     console.log(cusLowerCaseEmail);


// }).catch(err => {
//   console.log(err)
// });

(async () => {
  try {
    const response = await fetch(url)
      if (!response.ok){
    throw response.status
  }
  const result = await response.json();

    let email = result.map(user => user.email.toLowerCase());
    let cusLowerCaseEmail = [];
    result.forEach(user => {
      let cusEmail = customLowerCase(user.email);
      cusLowerCaseEmail.push(cusEmail)
    })


    console.log('output',email)
    console.log('output', cusLowerCaseEmail);

  }catch (err){
    console.log("error",err)
  }

})()
