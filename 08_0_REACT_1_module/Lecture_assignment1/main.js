window.addEventListener("load",()=>{
    let i=0;
    const id = setInterval(()=>{
        i+=10
        document.getElementById("progress-bar-setInterval").style.width = `${i}%`
        document.getElementById("progress-bar-setInterval").style.backgroundColor = `rgb(${159-i+50}, ${212-i+50}, ${255-i+50})`
        document.getElementById("time").innerText = `time: ${i/10} sec`
        if(i===100){
            clearInterval(id)
        }
    },1000)
})

