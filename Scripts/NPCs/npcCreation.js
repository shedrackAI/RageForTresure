const npc1 = new NPC({
   position: {
      x: 740,
      y: 140
   },
   movement: {
      x: 0,
      y: 0
   },
   image: createSprite(npcImage),
   scale: 0.8,
   frames: {
      fpsY: 4,
      fpsX: 3,
      frameX: 1,
      frameY: 2,
      animationFrame: 9
   }
});

const npc1CollisionBlock = new NpcCollisionBlock({ // instance of the collision block Class
   position: {
      x: npc1.position.x,
      y: npc1.position.y
   },
   offset: {
      x: 0,
      y: 0
   },
   width: 30,
   height: 48,
});



const npc2 = new NPC({
   position: {
      x: 1970,
      y: 1700
   },
   movement: {
      x: 0,
      y: 0
   },
   image: createSprite(femaleNPC),
   scale: 1.5,
   frames: {
      fpsY: 4,
      fpsX: 3,
      frameX: 1,
      frameY: 2,
      animationFrame: 9
   }
});

const npc2CollisionBlock = new NpcCollisionBlock({ // instance of the collision block Class
   position: {
      x: npc2.position.x,
      y: npc2.position.y
   },
   offset: {
      x: -24,
      y: -27
   },
   width: 30,
   height: 40,
});

// Later i will switch the
//  animation to IF statement for better movement :)