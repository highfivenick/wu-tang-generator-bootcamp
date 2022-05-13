// select button from dom and run a function on click
document.querySelector('button').addEventListener('click', getName)
// make a function to get name
function getName(){
    //assign the value of the answers to a variable converted to a number
    const answer1 = Number(document.querySelector('#pizza').value)
    const answer2 = Number(document.querySelector('#sport').value)
    const answer3 = Number(document.querySelector('#vacation').value)
    const answer4 = Number(document.querySelector('#OS').value)
    const answer5 = Number(document.querySelector('#leon').value)

    // split the answers into two groups and assign the sum of the answers to a variable for each group
    const firstIndex = answer1 + answer2 
    const lastIndex = answer3 + answer4 + answer5 
    // create two objects containing an array of name options; the sum of each group of answers will be used to choose an index in these arrays to assign the names
    let firstArray = [
        'Rich',
        'Grimy',
        'Cash',
        "Bangin/'",
        'Unscrupulous',
        'Daft',
        'Silly Ass'
    ]
    let lastArray = [
        'Demon',
        'Hustler',
        'Hitta',
        'Disciple',
        'Michael',
        'Nigga',
        'Tré',
        'Bunyon'
    ]
    // create two new variables that are assigned to the indeces of the two objects
    let firstName = firstArray[firstIndex]
    let lastName = lastArray[lastIndex]
    //select the innertext of where the answer will display and input the names
    document.querySelector('h1').innerText = `Welcome to the Chamber, ${firstName} ${lastName}`
    document.querySelector('.questionblock').classList.add('hide')
}