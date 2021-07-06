const container = document.querySelector('.data-container')

const ARRAY_SIZE = 20
const MAX_VALUE = 100
const MIN_VALUE = 5
const DELAY = 50

function generateArray(){

    container.innerHTML = "";

    for(let i=0; i<ARRAY_SIZE; i++){
        
        const value = Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE

        const bar = document.createElement('div')
        bar.classList.add('bar')
        bar.style.height = `${value}px`
        bar.style.transform = `translateX(${i * 30}px)`;
        
        const label = document.createElement('label')
        label.classList.add('bar_id')
        label.innerHTML = value
        
        bar.appendChild(label)
        container.append(bar)

    }
}

async function selectionSort(){
    let array = document.querySelectorAll('.bar')
    var min_index = 0

    for(var i=0; i<array.length; i++){
        min_index = i;
        array[i].style.backgroundColor = 'darkblue'

        for(var j=i+1; j<array.length; j++){
            array[j].style.backgroundColor = 'red'
            
            await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, DELAY)
            )

            var value1 = parseInt(array[j].childNodes[0].innerHTML);
            var value2 = parseInt(array[min_index].childNodes[0].innerHTML);

            if (value1 < value2) {
                if (min_index !== i) {
                    // Provide skyblue color to the (min-idx)th bar
                    array[min_index].style.backgroundColor = "grey";
                }
                min_index = j;
            }
            else {
                // Provide skyblue color to the jth bar
                array[j].style.backgroundColor = "grey";
            }
        }

        var temp1 = array[min_index].style.height;
        var temp2 = array[min_index].childNodes[0].innerText;

        array[min_index].style.height = array[i].style.height;
        array[i].style.height = temp1;
        array[min_index].childNodes[0].innerText = array[i].childNodes[0].innerText;
        array[i].childNodes[0].innerText = temp2;

        await new Promise((resolve) => 
            setTimeout(() => {
                resolve();
            }, DELAY)
        )

        // Provide skyblue color to the (min-idx)th bar
        array[min_index].style.backgroundColor = "grey";
    
        // Provide lightgreen color to the ith bar
        array[i].style.backgroundColor = "rgb(0,255,34)";
    }

}


async function bubbleSort(){
    let array = document.querySelectorAll('.bar')

    for(var i=0; i<array.length; i++){
        for(var j=0; j<array.length-i-1; j++){
            array[j].style.backgroundColor = 'darkblue'
            array[j+1].style.backgroundColor = 'red'
            
            await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, DELAY)
            )

            var value1 = parseInt(array[j].childNodes[0].innerHTML);
            var value2 = parseInt(array[j+1].childNodes[0].innerHTML);

            if (value1 > value2) {
                await new Promise((resolve) => {
                    var temp1 = array[j+1].style.height;
                    var temp2 = array[j+1].childNodes[0].innerText;
            
                    array[j+1].style.height = array[j].style.height;
                    array[j].style.height = temp1;
                    array[j+1].childNodes[0].innerText = array[j].childNodes[0].innerText;
                    array[j].childNodes[0].innerText = temp2;

                    setTimeout(() => {
                        resolve();
                    }, DELAY)
                })
            }

            // Provide skyblue color to the (min-idx)th bar
            array[j+1].style.backgroundColor = "rgb(0,255,34)";
        
            // Provide lightgreen color to the ith bar
            array[j].style.backgroundColor = "grey";
        }
        array[array.length - i - 1].style.backgroundColor = "rgb(0,255,34)";
    }
}

window.onload = function() {
    generateArray();
};