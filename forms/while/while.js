// Problem 1

let runLoop = "Y"
i = 0 

while (runLoop == "Y") {
    runLoop = prompt("Do you want to continue to run the loop Y/N)") 
    console.log(`This is loop iteration ${i}.`)
    i++
}
