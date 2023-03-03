const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
	apiKey: "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",
});

const openai = new OpenAIApi(config);

const runPrompt = async () => {
	const prompt = `
  how to create navbar in reactjs
        {
            "Q": "question",
            "A": "answer"
        }
    `;

	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: prompt,
		max_tokens: 2048,
		temperature: 0,
	});

	var parsableJSONresponse = response.data.choices[0].text;
	console.log(parsableJSONresponse)
	// const parsedResponse = JSON.parse(parsableJSONresponse);

	// console.log("Question: ", parsedResponse.Q);
	// console.log("Answer: ", parsedResponse.A);
};

runPrompt();

const express = require('express')
const app = express()
const port = 3000
const cors=require("cors");
app.use(cors());
app.get('/m', (req, res)  => {
   res.json({message:'hello rajan'})
   res.write('hello')


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})