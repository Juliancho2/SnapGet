import axios from 'axios';
import { NextResponse } from 'next/server';
import { transformData } from '@/utils/transformData';

export async function POST (req: Request) {
  const body = await req.json();

  try {
    // Validación de la solicitud
    if (!body.url) {
      return new Response('The request must contain a valid URL', { status: 400 });
    }

    const options = {
      method: 'GET',
      params: {
        url: body.url
      },
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY_MEDIA_DOWNLOADER,
        'X-RapidAPI-Host': process.env.API_HOST_MEDIA_DOWNLOADER
      }
    };

    const API_URL = String(process.env.API_URL_MEDIA_DOWNLOADER);

    const { data } = await axios.get(API_URL, options);

    if (data.error) {
      return new Response(String(data.error_message), { status: 400 });
    }
    const dataTransformed = transformData(data);

    return NextResponse.json(dataTransformed);
  } catch (err:any) {
    return NextResponse.json({ message: err.message });
  }
}
