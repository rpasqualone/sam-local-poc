exports.handler = (event, context, callback) => {
	console.log('env:', process.env.ENV_VAR);
	console.log('event:',  event);
	callback(null, {
		statusCode: 200,
		body: event.queryStringParameters['queryString']
	});
};
