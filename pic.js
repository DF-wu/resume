
// scroll
let currNodes = document.querySelectorAll('div.harvester.stream');
let queue = [];
for (let index = 0; index < currNodes.length; index++) {
    const element = currNodes[index];

    
    if(queue.includes(element)){
        // has it, ignore
        continue;
    }else{
        //not found
        queue.push(element)
    }
}



window.addEventListener('scroll', () => {
    for (const e of document.querySelectorAll('div.harvester.stream.downloaded:not(.clicked)')) {
      // 你要確定 e 真的是會下載的那個按鈕
      e.click()
      e.classList.add('clicked')
    }  
})



window.addEventListener('scroll', () => {
    [...document.querySelectorAll('div.harvester.stream:not(.success):not(.downloaded)')].forEach((e) => e.click())
})

setTimeout((e) => {
    for (let index = 0; index < 100; index++) {
        window.scrollBy(0,500);
    }
}, 200);


window.addEventListener('scroll', () => {
    [...document.querySelectorAll('div.harvester.stream'))].forEach((e) => e.click())
})