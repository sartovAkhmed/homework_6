import axios from "axios";

const FIRST_API_URL = "https://jsonplaceholder.typicode.com";

// export const getPosts =
//     axios({url: `${FIRST_API_URL}/posts`, method: 'GET', params: { offset: 0, limit: 10 } })

axios.defaults.baseURL = FIRST_API_URL
axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
}

export const getPosts = async (setUser: any) => {
    try {
        const res = await axios.get('/posts', {
            params: { offset: 0, limit: 10 },
        })
        // const res = await axios.get(`${FIRST_API_URL}/posts`, {
        //     params: { offset: 0, limit: 10 },
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem('token')}`
            // },
            // timeout: 10000
        // });
        setUser(res.data)
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data.errText, 'error');
        } else if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

export const createPosts = async (params:any) => {
    const res = await 
        axios.post('/posts', { title: 'Akhmed', body: 'lorem lorem lorem' })
}

export const deletePosts =async (params:any) => {
    const res = await
        axios.delete('/posts')
        // axios.delete(`${FIRST_API_URL}/posts/1`, { headers: { Authorization: {  } } })
}