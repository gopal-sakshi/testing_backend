/*

maps ===> key_value
    methods ===> get/set; has(); delete(); clear(); keys/values/entries; 
    properties ===> maps23.size
    not methods ===> parse/stringify
    learn about weakMaps

weakMaps
- keys cant be garbage_collectible (ie not primitives); only objects can be keys
- prevent memoryLeaks... if keys arent referenced anywhere, then they can be deleted

sets ====> unique values
- new Set([1,2,3,1,1,2,3,1,3])
- new Set();
    methods ====> add(), delete(), clear(), has(), values/keys/entries
    properties ===> size



maps_vs_objects
    in maps, keys can be anything; but in objects, only strings can be keys
    difficult to check the number of items in an Object =====> use size in Maps
    Own object properties might collide with property keys inherited from the prototype (toString, constructor)

*/