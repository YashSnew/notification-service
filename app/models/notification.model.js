const objection = require("objection");
const { Model } = require("objection");

function validate(model) {
    return true;
}

class Notification extends Model {
    static get tableName() {
        return 'notifications';
    }

    $beforeInsert() {
        // Handle DB insertions
        validate(this);
    }

    static create(notificationData, trx = null) {
        // Error Handling
        // if (!currentUser) {
        //     throw new Error("current user not found");
        // }
        return this.query(trx).insert({
            ...notificationData,
        });
    }
}