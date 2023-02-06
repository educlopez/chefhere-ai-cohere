import cohere from 'cohere-ai'

export default async function handler(req, res) {
  const apiKey = process.env.COHERE_API_KEY
  const { tool, ingredient, time, level } = req.query

  cohere.init(apiKey)

  const output = await cohere.generate({
    model: 'command-xlarge-20221108',
    prompt: `Create a recipe for a dish that utilizes a ${tool}, requires ${time} cooking time, is suitable for a cook with ${level} experience and includes only the ingredient ${ingredient}. -- The recipe should include a descriptive name, detailed instructions, and the nutritional information including calories, fat, carbohydrates, and protein.`,
    max_tokens: 1000,
    temperature: 0.7,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE',
  })
  const text = output.body.generations[0].text
  res.json({
    status: output.statusCode,
    response: text,
  })
}
