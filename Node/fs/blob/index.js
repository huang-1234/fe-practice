const obj = {hello: 'world'};
const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
