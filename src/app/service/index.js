export const getData = async () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const graphql = JSON.stringify({
        query: "query Query {\r\n  real_estates {\r\n    area\r\n    bed_count\r\n    id_real_estate\r\n    imageUrl\r\n    price\r\n    name\r\n  }\r\n}",
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