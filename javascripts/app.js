/* eslint-disable default-case */
/* eslint-disable indent */
/* eslint-disable brace-style */
// 1. Rover Object Goes Here

// eslint-disable-next-line no-alert
// ======================
const rover = {
  direction: 'N',
  posX: 0,
  posY: 0,
  travelLog: [],
};

const rover2 = {
  direction: 'E',
  posX: 8,
  posY: 5,
  travelLog: [],
};

const rover3 = {
  direction: 'W',
  posX: 4,
  posY: 6,
  travelLog: [],
};

// line first and then, the column

const grid = [
  ['free', 'x', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free', 'free', 'free', 'x', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'x', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'x', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'x', 'free', 'free', 'x', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
  ['free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free', 'free'],
];


// 2.Turn left
// ======================

const turnLeft = () => {
  switch (rover.direction) {
    case 'N': rover.direction = 'W'; break;
    case 'W': rover.direction = 'S'; break;
    case 'S': rover.direction = 'E'; break;
    case 'E': rover.direction = 'N'; break;
    default:
    // do nothing
  }

  document.getElementById('list').innerHTML = '<li> He turned left </li>';
};

// 2.Turn Right
const turnRight = () => {
  switch (rover.direction) {
    case 'N': rover.direction = 'E'; break;
    case 'E': rover.direction = 'S'; break;
    case 'S': rover.direction = 'W'; break;
    case 'W': rover.direction = 'N'; break;
    default:
    // do nothing
  }
  document.getElementById('list').innerHTML = '<li> He turned right! </li>';
};

const obstacles = () => {
  if(grid[rover.posY][rover.posX] === 'x') {
    alert("This is a obstacle!aaaaahh!")
    return true;
  } 
}

// 3.Move forward
const moveForward = () => {
  const beforeX = rover.posX;
  const beforeY = rover.posY;

  switch (rover.direction) {
    case 'N':
      // eslint-disable-next-line no-cond-assign
      if (rover.posX <= 0) {
        document.getElementById('list').innerHTML = '<li> HYou reached the top </li>';
      } else {
        rover.posX -= 1;
      }
      break;

    case 'S':
      if (rover.posX >= grid.length) {
        // eslint-disable-next-line no-console
        alert('You reached the top');
      } else {
        rover.posX += 1;
      }
      break;

    case 'W':
      // eslint-disable-next-line no-cond-assign
      if (rover.posY <= 0) {
        console.log('Keany west');
      } else {
        rover.posY -= 1;
      }
      break;

    case 'E':
      if (rover.posY >= grid[grid.length - 1].length) {
        console.log('I dont know');
      } else {
        rover.posY += 1;
      }
      break;
    default:
  }
    if (obstacles()) {
      rover.posX = beforeX;
      rover.posY = beforeY;
    }
  console.log(grid[rover.posY][rover.posX]);
  console.log(obstacles());
};

// 3.Move backwards
const moveBackwards = () => {
  switch (rover.direction) {
    case 'N':
      if (rover.posX >= 10) {
        alert('You reached the limit south with backwards');
      } else {
        rover.posX += 1;
      }
      break;

    case 'S':
      if (rover.posX <= grid.length) {
        alert('You reached the limit north');
      } else {
        rover.posX -= 1;
      }
      break;

    case 'W':
      if (rover.posY >= 10) {
        alert('You reached the limit north');
      } else {
        rover.posY += 1;
      }
      break;

    case 'E':
      if (rover.posY <= grid[grid.length - 1].length) {
        console.log('I dont know');
      } else {
        rover.posY -= 1;
      }
      break;

    default:
  }
};

// Iteration 4 | Commands

const commands = () => {
  const input = prompt('What do you want to explore?(F,R,or L)');
  // Bonus || Validate Inputs:
const input = prompt('What do you want to explore?(F,R,or L)');  if (input.toUpperCase().includes('L') || input.toUpperCase().includes('F') || input.toUpperCase().includes('R') || input.toUpperCase().includes('B')) {
    for (let i = 0; i < input.length; i += 1) {
      switch (input[i].toLowerCase()) {
        case 'f':
          moveForward(rover);
          document.getElementById('list').innerHTML = `We moved forward in position. Now you are in ${rover.posX}, ${rover.posY}`;
          travel(rover);
          break;
        case 'b':
          moveBackwards(rover);
          document.getElementById('list').innerHTML = `We moved backwards in position. Now you are in ${rover.posX}, ${rover.posY}`;
          travel(rover);
          break;
        case 'l':
          turnLeft(rover);
          document.getElementById('list').innerHTML = `We turned left in your position. You are in ${rover.posX}, ${rover.posY}`;
          break;
        case 'r':
          turnRight(rover);
          document.getElementById('list').innerHTML = `We turned right in your position. You still are in ${rover.posX}, ${rover.posY}`;
          break;
      }
    }
  } else {
    alert('This is not a joke, dude! This is a serious test');
  }
};

// travelLog

document.querySelector('.button').addEventListener('click', () => commands(rover));

const travel = () => {
  console.log(rover.travelLog.push([rover.posX, rover.posY]));
};
