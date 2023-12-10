import get from "@/core/requests/get";
import post from "@/core/requests/post";

const sendRequest = (type, url, data) => {
    let response
    let responseA
    let ok

    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    if (type === 'GET') {
        response = get(url, data, headers)
    } else {
        response = post(url, data, headers)
    }

    return response.then((responseAIn) => {
        responseA = responseAIn
        ok = responseA.ok

        return responseA.json()
    }).then((responseBIn) => {
        return {
            response: responseA,
            json: responseBIn
        }
    }).catch((error) => {
        return {
            response: {},
            json: {}
        }
    })
}

export {sendRequest}