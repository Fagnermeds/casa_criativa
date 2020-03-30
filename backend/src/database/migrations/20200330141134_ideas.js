
exports.up = function(knex) {

    return knex.schema.createTable('ideas', function(table){

        table.increments();

        table.string('title').notNullable();
        table.string('category').notNullable();
        table.string('description').notNullable();
        table.string('url').notNullable();

    });

};

exports.down = function(knex) {

    return knex.schema.dropTable('ideas');

};
