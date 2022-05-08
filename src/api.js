let BASE = 'http://localhost:8080';

export default {
    getCategories: async()=>{
        //GET / CATEGORIES
        const res = await fetch(BASE +'/categories')
        const json = await res.json();

        console.log(json)
        return json;
    },
    getProducts: async(category, page, search)=>{
        // GET /products ([search, page, category])
        let fields ={};
        if(category !== 0){
            fields.category = category;
        }
        if(page > 0){
            fields.page = page;
        }
        if(search !==''){
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE +'/products/search?query='+queryString)
        const json = await res.json();
        return json;
    }
};