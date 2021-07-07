const container = document.querySelector('.data-container')
const ARRAY_SIZE = 20
const MAX_VALUE = 100
const MIN_VALUE = 5
var DELAY = 200

const speed = document.getElementById("speed")
const val = speed.options[speed.selectedIndex].value

speed.addEventListener("change", (e) => {
    const value = e.target.value
   
    if (value) {
        DELAY = parseInt(value)
    }
});

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

    var message = document.getElementById("message")
    message.innerHTML = ""
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

    var message = document.getElementById("message")
    message.innerHTML = "<h3>Generated Array Sorted</h3>"
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

    var message = document.getElementById("message")
    message.innerHTML = "<h3>Generated Array Sorted</h3>"
}

async function insertionSort(){
    let array = document.querySelectorAll('.bar')

    array[0].style.backgroundColor = "rgb(0,255,34)"

    for(var i=1; i<array.length; i++){
        var j = i-1
        
        var key = parseInt(array[i].childNodes[0].innerHTML)
        var key_height = array[i].style.height

        array[i].style.backgroundColor = "darkblue"

        await new Promise((resolve) => 
            setTimeout(() => {
                resolve();
            }, DELAY)
        )

        while(j>=0 && parseInt(array[j].childNodes[0].innerHTML) > key){
            array[j].style.backgroundColor = "darkblue"

            array[j + 1].style.height = array[j].style.height;
            array[j + 1].childNodes[0].innerText = array[j].childNodes[0].innerText;

            j = j-1

            await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, DELAY)
            )
            
            for(var k=i; k>=0; k--){
                array[k].style.backgroundColor = "rgb(0,255,34)" 
            }
        }

        array[j + 1].style.height = key_height;
        array[j + 1].childNodes[0].innerHTML = key;
        
        // To pause the execution of code for 600 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, DELAY)
        );
        
        // Provide light green color to the ith bar
        array[i].style.backgroundColor = "rgb(0,255,34)";
    }

    var message = document.getElementById("message")
    message.innerHTML = "<h3>Generated Array Sorted</h3>"
}

window.onload = function() {
    generateArray();
};