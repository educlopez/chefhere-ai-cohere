import cohere from 'cohere-ai'

cohere.init(process.env.COHERE_API_KEY)

export default async function handler(req, res) {
  try {
    const { ingredients, tool, time, level } = req.body
    const response = await cohere.generate({
      model: 'command-xlarge-20221108',
      prompt: `Create a recipe include a descriptive name, detailed instructions, and the nutritional information including calories, fat, carbohydrates, and protein for a dish that utilizes a ${tool}, requires ${time} cooking time, is suitable for a cook with ${level} experience and includes only the ingredient ${ingredients}. `,
      max_tokens: 300,
      temperature: 0.7,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ['--'],
      return_likelihoods: 'NONE',
    })
    res.status(200).json({ recipe: response.body.generations[0].text })
  } catch (err) {
    console.error(err)
    res.status(500).json({ recipe: 'Error' })
  }
}
