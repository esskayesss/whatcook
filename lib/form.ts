'use server'

import OpenAI from "openai";
import sampleImage from '@/public/sample.png'

const openai = new OpenAI({
  apiKey: process.env.XAI_API_KEY,
  baseURL: "https://api.x.ai/v1",
});

export const addIngredientsFromImage = async (url: string) => {
  const completion = await openai.chat.completions.create({
    model: "grok-2-vision-1212",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image_url",
            image_url: {
              url: `${url}`,
              detail: "high",
            },
          },
          {
            type: "text",
            text: `List out food ingredients that you can detect from this image. 
              Return a JSON in the form:
              {
                ingredients: Array<string>
              }

              keep every ingredient in lowercase. your response message should be directly marshalled into JSON so do not add any additional artifacts or text or symbols. do not include brands. for example, if you see nescafe coffee, just write coffee. if possible, an ingredient can be written in multiple ways, add multiple entries. for example, if you notice chicken breast, you should write chicken as well as chicken breast.  
            `,
          },
        ],
      },
    ],
  });

  return completion.choices
}
