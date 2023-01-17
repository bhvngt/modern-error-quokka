import ModernError from "modern-errors";

export const InvalidInputError = ModernError.subclass('InvalidInputError', {
    custom: class extends ModernError {
        #schemaId;
        constructor(message, options, schemaId) {
            super(message, options);
            this.#schemaId = schemaId;
        }
        get schemaId() {return this.#schemaId}
    }
})

const error = new InvalidInputError('Wrong user name', {}, "schema/1.0.0")

console.log(`error.message`, error.schemaId);


