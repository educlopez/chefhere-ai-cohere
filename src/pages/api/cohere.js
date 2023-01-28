import cohere from 'cohere-ai';

export default async function handler(req, res) {
  const apiKey = process.env.COHERE_API_KEY;
  const { tool, ingredient, time, level } = req.query;

  cohere.init(apiKey);

  const output = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: `Generate a recipe with ${tool} in ${time}, suitable for ${level} cooks with the following parameters:\n --\n Ingredients: ${ingredient}\n --\n Provide instructions for preparing the dish, including step-by-step instructions and a list of ingredients used.\n --\n Include nutritional value (calories, fat, carbohydrates, protein) for the dish`,
    max_tokens: 700,
    temperature: 0.7,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  });
  const text = output.body.generations[0].text;
  res.json({
    status: output.statusCode,
    response: text
  });
  console.log(text);
}
