

// {# for each section #}
// {# for each character → create an array, creates the lines, and markthem correctlu #}
// {# when the element get in the view, show all the line that belongs to the <array> #}

// const dialogues = document.querySelectorAll('.dialogue'); 

// create a line for each character in each part
const allCall = {}

function initSection(parent) {
  const jus = createLines(parent.querySelectorAll('.ju'), "var(--ju-color)", "reverse", parent.dataset.dialogLine)
  const clems = createLines(parent.querySelectorAll('.clem'), "var(--clem-color)", "normal", parent.dataset.dialogLine )
  allCall[parent.dataset.dialogLine] = {jus, clems}
  showLines(jus);
  showLines(clems);
  document.body.querySelectorAll('.leader-line').forEach(line =>{
    if(line.parentElement === document.body) {
      parent.insertAdjacentElement('beforeend', line)
    }
  })
}





function showLines(array) {
array.forEach(line =>{line.show()})
}
function hideLines(array) {
array.forEach(line =>{line.hide()})
}

function createLines(array, color, direction, idwrap) {

let outputArray = [ ]

    const options =  {
      startSocketGravity: direction == 'reverse' ? '1' : '',
      startPlug: 'behind' , endPlug: 'behind',
      path: 'arc',
      color: color,
      startSocket: 'bottom',
      topSocket: 'top',
      size: 1
      }
      array.forEach((el,index)=>{

    //only do drawBetweenObject if there is another.
    if(index + 1 < array.length) {
    
      if ( direction == 'reverse') {
        outputArray.push(new LeaderLine(array[index + 1], array[index], options ));
        // add class on the fly to the new one
    } 
    else {
    outputArray.push(new LeaderLine(array[index], array[index + 1], options ));
    }
      document.querySelector('body>.leader-line:last-of-type').id = `${idwrap}-${el.classList}-${index}`; 
    }

    }) 
    return outputArray;
}
window.addEventListener('load', function() {
  const section = document.querySelector(`${location.hash}`)
  if(section.classList == "journal") {
    section.style.visibility = 'hidden'
    initSection(section);
    section.dataset.lineDone = 'true'
    section.style.visibility = 'visible'
  } 
})

//when hashchange 
window.addEventListener('hashchange', function() {
  // check if there ia some lines already, otherwith, addThem;
  const section = document.querySelector(`${location.hash}`)
  if(section.dataset.lineDone == 'true') {
    console.log('already lined')
    return
  } else {
    initSection(section.querySelector('.dialogue'));
    section.dataset.lineDone = 'true'
  }
})

