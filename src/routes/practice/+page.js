export async function load({session, fetch, params, url}) {
    if(!(url.host === 'drmithileshkumar.com' || url.host === 'localhost:5173' || url.host === 'localhost:3000')) {
        return {
            status: 301,
            redirect: `https://drmithileshkumar.com/practice`
        }
    }
    return {
        props: {

        }
    }
}