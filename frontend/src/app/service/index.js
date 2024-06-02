const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getData = async () => {

    const graphql = JSON.stringify({
        query: "query Query {\r\n  real_estates {\r\n    area\r\n    bed_count\r\n    id_real_estate\r\n    price\r\n    project_name\r\n    short_description\r\n    type\r\n    images {\r\n      id_image_gallery\r\n      id_real_estate\r\n      imageUrl\r\n    }\r\n  }\r\n}",
        variables: {}
    })

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow"
    };

    const data = await fetch("http://localhost:4000/", requestOptions);

    if (data !== null)
        return data.json();
}

export const searchData = async (type, min_price, max_price, bed_count, area) => {

    console.log(type, min_price, max_price, bed_count, area);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: "query Search_real_estates($type: String, $minPrice: Int, $maxPrice: Int, $bedCount: Int, $area: String) {\r\n  search_real_estates(type: $type, min_price: $minPrice, max_price: $maxPrice, bed_count: $bedCount, area: $area) {\r\n    id_real_estate\r\n    project_name\r\n    area\r\n    bed_count\r\n    price\r\n    short_description\r\n    type\r\n    images {\r\n      id_image_gallery\r\n      id_real_estate\r\n      imageUrl\r\n    }\r\n  }\r\n}",
        variables: { "type": type, "minPrice": min_price, "maxPrice": max_price, "bedCount": bed_count, "area": area }
    })
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: graphql,
        redirect: "follow"
    };

    const data = await fetch("http://localhost:4000/", requestOptions);

    if (data !== null)
        return data.json();
}