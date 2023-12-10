const get = async (url, data, headers) => {
    url = `${url}?${new URLSearchParams(data)}`

    return await fetch(url, {
        method: 'GET',
        headers: headers,
    })
}

export default get