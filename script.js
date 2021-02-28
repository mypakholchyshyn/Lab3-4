class Road {
   constructor(directions = ['east', 'west'], sidewalk = true) {
       this.directions = directions;
       this.numLanes = directions.length;
       this.sidewalk = sidewalk;
   }
}
let road = new Road(['north', 'north', 'south', 'south'], true);