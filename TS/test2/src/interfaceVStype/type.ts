

type Name = {
  name: string; 
}
type User = Name & { age: number };

function showUserInfo(userInfo: User) {
  console.log(userInfo)
}
const u1 = { name: 'huangsq', age:18}
showUserInfo(u1)


type StringOrNumber = string | number;  
type MyText = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
