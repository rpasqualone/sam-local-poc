exports.handler = (event, context, callback) => {
	console.log(event.festivalId);
	console.log(event);
	callback(null, {
		statusCode: 200,
		body: event.queryStringParameters['queryString']
	});
};
