function save() {
    // const gender = document.getElementById("gender");
    // const color = document.getElementById("color");
    const size = document.getElementById("size");
    const text = document.getElementById("text");

    const data = {
        // gender: gender.value,
        // color: color.value,
        size: size.value,
        text: text.value
    }

    console.log(data)




    localStorage.setItem("data", data.size);
}

