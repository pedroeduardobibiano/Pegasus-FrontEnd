let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async()=>{
        //GET / CATEGORIES
        const res = await fetch(BASE +'/categories')
        const json = await res.json();
        return json;
    }
};