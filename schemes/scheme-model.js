const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update
}

// Returns a promise that will resolve into an array of schemes.
function find() {
    // SELECT * 
    // FROM schemes
    return db('schemes');
};

// Returns a promise that will resolve into a single scheme or null if id is invalid.
function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
};

function findSteps(id) {
    return db('schemes')
        .join('steps', 'schemes.id', 'steps.scheme_id')
        .select('scheme_name', 'step_number', 'instructions')
        .where('schemes.id', id)
}

// function findSteps(id) {
//     return db('schemes')
//         .where({ id })
//         .first()
//         .then(scheme => (
//             db('steps')
//                 .where('scheme_id', id)
//                 .then(steps => (
//                     {...scheme, steps: steps}
//                 ))
//         ))
// };

function add(scheme) {
    return db('schemes')
        .insert(scheme)
}

function update(changes, id) {
    return db('schemes')
        .where({ id })
        .update(changes)
}