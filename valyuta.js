// function clic(){
//     let reqem=Number(document.getElementById("val_1").value)
//     console.log(reqem)
//     let a = reqem*1.7
//     console.log(a)
//     cixis.innerHTML=`${a}`
// }
function clic(){
    let reqem=Number(document.getElementById("val_1").value)
    let hansivalyuta = document.getElementById("hansivalyuta").value
    let hansivalyutaya = document.getElementById("hansivalyutaya").value
    // console.log(typeof(hansivalyuta))
    if(hansivalyuta==="USD"&&hansivalyutaya==="AZE"){
        let a =reqem*1.7
        cixis.innerHTML=`${a}`
        console.log("1")
    }
    else if(hansivalyuta==="AZE"&&hansivalyutaya==="USD"){
        let a =reqem/1.7
        cixis.innerHTML=`${a}`
        console.log("2")
    }
    else if(hansivalyuta==="USD"&&hansivalyutaya==="USD"){
        let a =reqem
        cixis.innerHTML=`${a}`
        // console.log("2")
    }
    else if(hansivalyuta==="AZE"&&hansivalyutaya==="AZE"){
        let a =reqem
        cixis.innerHTML=`${a}`
        // console.log("2")
    }
    // else if (hansi valyuta = USd$$ hansivalyutaya=Aze) 1.7 ye bol
}
