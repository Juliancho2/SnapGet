import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST (res:Request) {
  const body = await res.json();

  try {
    // Validación de la solicitud
    if (!body.url) {
      return new Response('The request must contain a valid URL', { status: 400 });
    }

    const options = {
      method: 'GET',
      url: process.env.API_URL_TIk_TOK,
      params: {
        url: body.url
      },
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY_TIk_TOK,
        'X-RapidAPI-Host': process.env.API_HOST_TIk_TOK
      }
    };

    const API_URL = String(process.env.API_URL_TIk_TOK);

    const { data } = await axios.get(API_URL, options);

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ message: 'There was an error in the application.' });
  }
}
