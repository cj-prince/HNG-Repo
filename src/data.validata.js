import Joi from 'joi';



export const validateData = (schema, type) => async (req, res, next) => {
    try {
        const getType = {
            body: req.body,
            params: req.params,
            query: req.query,
            headers: req.headers,
        };

        const options = { language: { key: '{{key}} ' } };
        const data = getType[type];

        const isValid = await schema.validate(data, options);
        if (!isValid.error) {
            return next();
        }

        const { message } = isValid.error.details[0];
        return Response.error(res, message.replace(/"/gi, ''), 400, 'Invalid Data');
    } catch (error) {
        return next(error);
    }
};

export const getSchema = Joi.object({
  slack_name: Joi.string(),
  track: Joi.string
});
