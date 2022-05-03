function getAdmins(map){
    let admins=[];
    for ([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set("Luiz", "Admin");
usuarios.set("Natália", "Admin");
usuarios.set("Caio", "User");
usuarios.set("Paulo", "Admin");

console.log(getAdmins(usuarios));