$(document).ready(() => {
    const dataJson = "./products.json"
    console.log(dataJson);

    $("#stockButton").click(() => {
        $.getJSON(dataJson, function (data, state) {
            console.log(typeof data);
            console.log(data);

            if (state === "success") {
                let successData = data;
                for (const dato of successData) {
                    $(".modal-body").append(`<div>
                                                <h3>${dato.name}</h3>
                                                <p>Stock: ${dato.stock} unidades.</h3>
                                                <p>Precio: $${dato.price}.</h3>
                                            </div>`);
                }
            }
        });
    });
});