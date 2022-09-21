// temporary storage to keep up with our user's input. Create a variable called: usersWord.
let usersWord = ""
// give the UL Elements id="even" properties values and create a variable to hold a reference to them in
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
//  a function that will update this variable when the user types in //
function updateWord(element) {
    usersWord = element.value

    console.log(usersWord)
  }
//   create function that will create a new element (<li>), put the input as its innerText and append it to the Odd List

function handleSubmit() {
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord

    if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
      } else {
       
        oddList.appendChild(newListItem)
      }
    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }