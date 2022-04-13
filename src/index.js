//  CORE DELIVERABLES
// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.

// Fetch the ramen data from the API
fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => console.log(data));
    for (const menuImgs of data.menuImgs) {
        let images = document.createElement('li');
        images.appendChild(
            document
        )
    }
// Create a function to insert array of pictures into the 'div' container with the id of 'ramen-menu'
function menuImgs = 
    //function menuImgs

//Create an img tag with document.createElement('img')
let div = document.getElementById('ramen-menu')
let images = document.createElement('img');
//append new img element into 'div' with id of 'ramen-menu'
div.append(images)



// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.

//create an eventlistener for click
document.addEventListener('click', (e) => {
})
//


// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.

//create a new 




fetch('url', {
    Method: 'POST',
    Headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    Body: body,
    Cache: 'default'
  })




//Fetch images in the 'div' with an id of 'ramen menu'.
    fetch('http://localhost:3000/ramens',{
        Method: 'POST'
    
    })
        .then(response => response.json())
        .then(data => console.log(data));

        const menu = document.getElementById('ramen-menu');
        menu.src = 'http://localhost:3000/ramens';

        // function postedImg (menu) {
            

        // }



        // .then(data => {
        //     console.log(data)
        //     Object.keys(data).forEach((key) => {
        //         const ele = document.createElement('span');
        //         const img = document.createElement('img');
        //         img.setAttribute('src',data[key]);
        //         ele.appendChild(img);
        //     });
        // })
//             const menu = document.getElementById('ramen-menu');
//             menu.innerHTML = '';

//             for (const menuImgs in data) {
//                 console.log(data[menuImgs]);
//                 menu.innerHTML +=
//             }
//             document.
//         });




// function(){
// const div = document.querySelector('#div')

// }

//Request data from server and get all ramen objects.

//Display image of each ramen using an 'img' tag inside the '#ramen-menu' div.


