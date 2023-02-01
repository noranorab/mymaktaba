const ul = document.querySelector('#posts');

/*
ul.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON'){
        const button = event.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.textContent === 'remove'){
            ul.removeChild(li);
        }else if(button.textContent === 'edit'){
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            button.textContent= 'save';
        }else if(button.textContent==='save'){
            const input = li.firstElementChild;
            const span = document.createElement('span');
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent='edit';
        }
    }
})
*/

const colorInput = document.getElementById("color");
colorInput.addEventListener("click", ()=>{
    console.log(document.getElementById("color").value);
});