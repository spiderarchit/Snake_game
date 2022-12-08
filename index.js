
// i have defined some constants here.....

let velocity = {x:0 , y:0};

const gamesound = new Audio('./picsandmusicfiles/snake song.mp3');
const foodeating = new Audio('./picsandmusicfiles/food-eating.wav');
const snakedirection = new Audio ('./picsandmusicfiles/change-direction.mp3');
const gameover = new Audio ('./picsandmusicfiles/game-over.mp3');

let speed = 5;
let past = 0;

let score =0;

let snakearr= [{x:8, y:16}];

let food= {x:14, y: 15};


function main(present)
{
    window.requestAnimationFrame(main);

    if((present - past)/1000 < 1 /speed )
    {
        return;
    }
    
    // console.log(present);
    past = present;

    gameEngine();


}

function iscollide(snakearr)
{
    
    for(let i=1;i<snakearr.length;i++)
    {
        if(snakearr[i].x === snakearr[0].x && snakearr[i].y === snakearr[0].y)
        {
            return true;
        }

    }

    if(snakearr[0].x >= 18 || snakearr[0].x<=0 || snakearr[0].y<=0 || snakearr[0].y>=18)
    {
        return true;
    }

    return false;
}

function gameEngine()
{
 
    //there are two task that will be performed by this function

    // task 1: first to update the snake and food
       
    // update case 1: if my food gets collided with wall or the part of my body

    if(iscollide(snakearr))
    {
     
        gamesound.pause();
        gameover.play();

        
        velocity= {x:0 , y: 0};
        alert(" Your game is over. Press any key to play it again!");

        
        snakearr = [{x:8, y:16}];

        score = 0;

        myscore.innerHTML = "Score: " + score;

        // gamesound.play();

    }


    // if i have eaten the food 
   
    if(snakearr[0].x === food.x && snakearr[0].y === food.y)

    { 
     foodeating.play();
    snakearr.unshift ({x: snakearr[0].x + velocity.x , y: snakearr[0].y + velocity.y});

    let a = 2;

    let b = 16;

    // food = {x:Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a) * Math.random())};

    food. x = Math.round(a+(b-a)*Math.random());
    food. y = Math.round(a+(b-a)*Math.random());

    score+=1;

    myscore.innerHTML= "Score: " + score;
    
    }

    //now i am going to move my snake according to my directions

    for(let i = snakearr.length-2;i>=0;i--)
    {
     
        snakearr[i+1]= {...snakearr[i]};
        
    }

    snakearr[0].x = snakearr[0].x + velocity.x;
    snakearr[0].y = snakearr[0].y + velocity.y;



    // task 2: second to render or display the snake and food

    board.innerHTML = "";
    snakearr.forEach((e,index)=>{
        
        // this code is for add snake head


        snakeelement = document.createElement('div');

        snakeelement.style.gridRowStart = e.y;
        snakeelement.style.gridColumnStart = e.x;

        if(index === 0)
        {
            snakeelement.classList.add('head');
        }
          
        else{
        snakeelement.classList.add('snakebody');
        }

        board.appendChild(snakeelement);

    })

        // this code is for adding snake food

        snakefood = document.createElement('div');

        snakefood.style.gridRowStart = food.y;

        snakefood.style.gridColumnStart = food.x;

        snakefood.classList.add('food');

        board.appendChild(snakefood);

}






// this is where i am going to start my logics
window.requestAnimationFrame(main);

window.addEventListener('keydown',(e)=>{


    velocity = { x: 0 , y: 0};     // start the game now 
    
   gamesound.play();


   switch (e.key) {
    case "ArrowUp":
        
       velocity. x=0;
       velocity. y= -1;

        break;
    case "ArrowDown":
        
        velocity.x=0;
        velocity.y= 1;
        break;
    case "ArrowLeft":
        
        velocity.x=-1;
        velocity.y= 0;
        break;
    case "ArrowRight":
        
        velocity.x=1;
        velocity.y= 0;
        break;
   
    default:
        break;
   }

   


})











// console.log("i am here");

