class Rover {
  constructor(direction, posX, posY, travelling) {
    this.direction = direction;
    this.posX = posX;
    this.posY = posY;
    this.travelling = travelling;
    this.commands = commands;
  }


  turnLeft() {
    switch (this.direction) {
      case 'N': this.direction = 'W'; break;
      case 'W': this.direction = 'S'; break;
      case 'S': this.direction = 'E'; break;
      case 'E': this.direction = 'N'; break;
      default:
      // do nothing
    }
  }

  turnRight() {
    switch (this.direction) {
      case 'N': this.direction = 'E'; break;
      case 'E': this.direction = 'S'; break;
      case 'S': this.direction = 'W'; break;
      case 'W': this.direction = 'N'; break;
      default:
    }
  }

  moveForward(arr) {
    // Iteration 4 | Commands
    switch (this.direction) {
      case 'N':
        if (this.posX <= 0) {
          this.posX = this.posX + 1;
        } else {
          console.log('North');
        }
        break;

      case 'S':
        if (this.posX >= arr.length) {
          this.posX = this.posX - 1;
        } else {
          console.log('South');
        }
        break;

      case 'E':
        if (this.posY <= arr[arr.length - 1].length) {
          this.posY = this.posY - 1;
        } else {
          console.log('East');
        }
        break;

      case 'W':
        if (this.posY >= 0) {
          this.posY = this.posY + 1;
        }
        else {
          console.log('Keany West');
        }
        break;
      default:
        console.log('she moves like jaegger');
    }
  }
  // Iteration 4 | Commands
commands() {
  const input = prompt('What do you want to explore?(F,R,or L)');

}
}