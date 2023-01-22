function createNpc() {
   npc1.update()
   npc2.update()
   npc1CollisionBlock.update({ follow: npc1 })
   npc2CollisionBlock.update({ follow: npc2 })
   moveObjectWithMap({ objectToMove: npc1, objectToMoveCollision: npc1CollisionBlock })
   moveObjectWithMap({ objectToMove: npc2, objectToMoveCollision: npc2CollisionBlock })
}

