const connection = require('../database/connection');

module.exports = {

    async create(request, response){

        const { title, category, description, url } = request.body;

        const [id] = await connection('ideas').insert({

            title,
            category,
            description,
            url
        });

        return response.json({ id });

    },

    async index(request, response) {

        const idea = await connection('ideas').select('*');

        return response.json(idea);

    }


}
