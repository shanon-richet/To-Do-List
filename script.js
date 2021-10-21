const main= document.querySelector('main')
const button= document.querySelector('button')
const input= document.querySelector('input')

button.onclick= () => {
    let list= document.createElement('li')
    list.innerHTML= input.value;
    main.appendChild(list)
    if(input.value === ''){
       main.removeChild(list)
    }
}