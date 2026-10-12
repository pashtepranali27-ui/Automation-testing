
let profilepicture = null // null is a special value that represents the absence of any object value. It is often used to indicate that a variable should not point to any object or that an object reference is intentionally empty.
console.log(profilepicture); // 
console.log(typeof profilepicture); // object

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | ==  comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/

let no_of_audi = null;
console.log(no_of_audi);
