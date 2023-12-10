const post = async (url, data, headers) => {
    return await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    })
}

export default post