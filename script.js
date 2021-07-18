function Adicionar(){
    const email = document.getElementById("txtEmail").value;
    const dataObj = { email };

    if (localStorage.getItem('items') === null) {
        localStorage.setItem('items', JSON.stringify([dataObj]));
    } else {
        localStorage.setItem('items',JSON.stringify([...JSON.parse(localStorage.getItem('items')),dataObj]));
    }
}