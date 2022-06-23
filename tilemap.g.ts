// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level4":return tiles.createTilemap(hex`0c000c00030303030303030303030303030101010101010101010103030101010101010101010103030101010101020202020203030101010101020303030303030101010101020101010403030101010101020303030303030101010101020202020203030101010101010101010503030101010101010101010503030101010101010101010503030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 
2 . . . . . . 2 2 2 2 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.castle.tileDarkGrass2,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,myTiles.tile7], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`0c000c00080707070707070707070704060a0a090a0a0a0a0a090a03060a0a0a0a0a0a0a0a0a0a03060a090a0a0a0a090a0a0a03060a0a0a0a0a0a0a0a090a03060a0a090a0a0a0a0a0a0a03060a0a0c0c0d0d0c0c0a0a03060a0a0c0b0b0b0b0c0a0a03060a0a0c0b0b0b0b0c090a03060a090c0b0b0b0b0c0f0f03060a0a0c0b0e0e0b0c0f0f03050101010101010101010102`, img`
2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . 2 2 . . 2 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "teleportBase":
            case "level3":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020101010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020301010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020401010101010101010101010101020201010101010101010101010101010202010101010101010101010101010102020601010101010101010101010101020201010101010101010101050505050202010101010101010101010505050502020101010101010101010105050505020201010101010101010101050505050202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,myTiles.tile3,myTiles.tile4,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level0":
            case "level5":return tiles.createTilemap(hex`0c000c00010101010101010101010101010202020202020202020201010202020202020202020201010202020202020202020201010202020202020202020201010202020202020202020201010202030302020303020201010202030202020203020201010202030202020203020201010202030202020203020201010202030204040203020201010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 
2 . . 2 2 . . 2 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 . . 2 . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.floorLight5,sprites.dungeon.collectibleInsignia,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "Level1Teleporter":
            case "tile3":return tile3;
            case "Level2Teleporter":
            case "tile4":return tile4;
            case "Level2Spawner":
            case "tile5":return tile5;
            case "level2Chest":
            case "tile6":return tile6;
            case "heartTile":
            case "tile7":return tile7;
            case "myTile1":
            case "tile8":return tile8;
            case "level3Chest":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
